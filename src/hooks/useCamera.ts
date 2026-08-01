import { useEffect, useRef, useState } from 'react'

export function useCamera() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const [isCameraOn, setIsCameraOn] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 1280,
          height: 720,
          facingMode: 'user'
        },
        audio: false
      })

      streamRef.current = stream

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }

      setIsCameraOn(true)
      setError(null)
    } catch (err) {
      console.error(err)
      setError('Unable to access camera')
    }
  }

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach(track => track.stop())
    streamRef.current = null

    if (videoRef.current) {
      videoRef.current.srcObject = null
    }

    setIsCameraOn(false)
  }

  useEffect(() => {
    return () => stopCamera()
  }, [])

  return {
    videoRef,
    isCameraOn,
    error,
    startCamera,
    stopCamera
  }
}