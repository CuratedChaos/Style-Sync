/*=================================
    FILE 2 of 3: script.js (useCamera.ts)
    Camera logic — StyleSync Kiosk
    start / stop / capture /
    switch (front↔back) / fullscreen
=================================*/

import { useState, useRef, useCallback, useEffect } from 'react'

// Module-level mutable — not reactive, so not a hook.
// Keeps the hook count identical to the previous version of this file.
let _facingMode: 'user' | 'environment' = 'user'

export type AiScanState = 'idle' | 'scanning' | 'done'

export interface AiResult {
  size:       'S' | 'M' | 'L' | 'XL'
  bodyType:   'Slim' | 'Athletic' | 'Regular' | 'Broad'
  confidence: number
  fit:        string
  occasion:   string
  weather:    string
  tip:        string
}

const SIZES:      AiResult['size'][]     = ['S', 'M', 'L', 'XL']
const BODY_TYPES: AiResult['bodyType'][] = ['Slim', 'Athletic', 'Regular', 'Broad']

const TIPS: Record<string, string> = {
  'White Oxford':     'Pair with beige chinos and white sneakers for a clean modern look.',
  'Black Slim Fit':   'Looks great with black trousers and Oxford leather shoes.',
  'Denim Casual':     'Best paired with blue jeans and casual white sneakers.',
  'Polo Premium':     'Wear with cream chinos and loafers for a polished smart-casual look.',
  'Oversized Tee':    'Comfortable with cargo pants and high-top sneakers.',
  'Grey Hoodie':      'Layer with denim jeans and winter boots for a streetwear edge.',
  'Navy Linen':       'Pair with linen trousers and espadrilles for beach-to-city ease.',
  'Silk Cream':       'Wear with tailored charcoal trousers and a silver watch.',
  'Burgundy Check':   'Looks stunning with dark navy trousers and tan brogues.',
  'Olive Utility':    'Great with black cargo pants and ankle boots.',
  'Printed Floral':   'Pair with white shorts and canvas espadrilles for a resort look.',
  'Royal Blue Oxford':'Matches perfectly with charcoal trousers and black derbies.',
  'Charcoal Fleece':  'Wear with tapered joggers and clean white trainers.',
  'Striped Nautical': 'Pair with navy shorts and white canvas sneakers.',
  'Mustard Twill':    'Beautiful with dark indigo denim and chocolate suede boots.',
}

function randomItem<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateAiResult(shirtName: string): AiResult {
  return {
    size:       randomItem(SIZES),
    bodyType:   randomItem(BODY_TYPES),
    confidence: 92 + Math.floor(Math.random() * 7),
    fit:        `${94 + Math.floor(Math.random() * 5)}%`,
    occasion:   randomItem(['College', 'Office', 'Casual', 'Dinner', 'Party', 'Travel']),
    weather:    `${24 + Math.floor(Math.random() * 8)}°C`,
    tip:        TIPS[shirtName] ?? 'Complete the look with matching trousers and clean footwear.',
  }
}

export function useCamera() {
  const videoRef  = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const [cameraOn,    setCameraOn]    = useState(false)
  const [scanState,   setScanState]   = useState<AiScanState>('idle')
  const [aiResult,    setAiResult]    = useState<AiResult | null>(null)
  const [overlayUrl,  setOverlayUrl]  = useState('')
  const [overlayOn,   setOverlayOn]   = useState(false)
  const [activeShirt, setActiveShirt] = useState<string>('')

  /*──── Internal: start stream ────────*/
  const startStream = useCallback(async (facing: 'user' | 'environment') => {
    try {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(t => t.stop())
      }
      const s = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720, facingMode: facing },
        audio: false,
      })
      streamRef.current = s
      if (videoRef.current) videoRef.current.srcObject = s
      setCameraOn(true)

      // Trigger AI scan
      setScanState('scanning')
      setTimeout(() => {
        setScanState('done')
        setAiResult(prev => prev ?? generateAiResult(activeShirt))
      }, 3000)
    } catch {
      alert('Camera permission is required to use StyleSync. Please allow camera access and try again.')
    }
  }, [activeShirt])

  /*──── Start camera ──────────────────*/
  const startCamera = useCallback(() => {
    startStream(_facingMode)
  }, [startStream])

  /*──── Stop camera ───────────────────*/
  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
    if (videoRef.current) videoRef.current.srcObject = null
    setCameraOn(false)
    setScanState('idle')
  }, [])

  /*──── Switch camera ─────────────────*/
  const switchCamera = useCallback(() => {
    _facingMode = (_facingMode === 'user' ? 'environment' : 'user')
    startStream(_facingMode)
  }, [startStream])

  /*──── Capture snapshot ──────────────*/
  const captureImage = useCallback(() => {
    if (!videoRef.current) return
    const canvas = document.createElement('canvas')
    canvas.width  = videoRef.current.videoWidth
    canvas.height = videoRef.current.videoHeight
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.save()
    ctx.scale(-1, 1)
    ctx.drawImage(videoRef.current, -canvas.width, 0)
    ctx.restore()
    const url = canvas.toDataURL('image/png')
    const a   = document.createElement('a')
    a.href = url
    a.download = `stylesync-capture-${Date.now()}.png`
    a.click()
  }, [])

  /*──── Fullscreen ────────────────────*/
  const toggleFullscreen = useCallback(() => {
    const el = videoRef.current?.parentElement
    if (!el) return
    if (!document.fullscreenElement) {
      el.requestFullscreen?.()
    } else {
      document.exitFullscreen?.()
    }
  }, [])

  /*──── Select & try-on shirt ─────────*/
  const tryOn = useCallback((imgUrl: string, shirtName: string) => {
    setActiveShirt(shirtName)
    setOverlayOn(false)
    setTimeout(() => {
      setOverlayUrl(imgUrl)
      setOverlayOn(true)
      setAiResult(generateAiResult(shirtName))
    }, 280)
  }, [])

  /*──── Reset ─────────────────────────*/
  const reset = useCallback(() => {
    stopCamera()
    setOverlayUrl('')
    setOverlayOn(false)
    setAiResult(null)
    setActiveShirt('')
    setScanState('idle')
  }, [stopCamera])

  /*──── Cleanup ───────────────────────*/
  useEffect(() => () => {
    streamRef.current?.getTracks().forEach(t => t.stop())
  }, [])

  return {
    videoRef,
    cameraOn,
    scanState,
    aiResult,
    overlayUrl,
    overlayOn,
    activeShirt,
    startCamera,
    stopCamera,
    switchCamera,
    captureImage,
    toggleFullscreen,
    tryOn,
    reset,
  }
}
