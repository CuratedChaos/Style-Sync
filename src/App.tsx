/*=================================
    FILE 3 of 3: index.html (App.tsx)
    StyleSync — AI Virtual Trial Room
    Complete kiosk portrait app
=================================*/

import { useState, useEffect, useRef, useCallback } from 'react'
import { useCamera } from './useCamera'
import { LogoHorizontal, LogoSplash } from './components/Logo/Logo'
import { ToastLayer } from './components/Toast/Toast'
import { SplashScreen } from './components/Splash/SplashScreen'


/* ══════════════════════════════════════════
   TYPES
══════════════════════════════════════════ */
interface Product {
  id: number; name: string; brand: string; price: number
  rating: number; ratingCount: number; sizes: string[]
  colours: string[]; fabric: string; description: string
  img: string; tag?: string; wishlisted: boolean
}
interface CartItem { product: Product; size: string; qty: number }
interface Accessory { id: number; type: string; name: string; price: number; img: string }
interface ToastItem { id: number; msg: string; icon: string }

/* ══════════════════════════════════════════
   DATA — 15 Shirts
══════════════════════════════════════════ */
const IMGS = [
  'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1551537870-7f0467b40fec?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1529374255-6f8f5f36f6e6?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1583744526371-9bd5d41f5fc4?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1548036161-ea50ca78a8cf?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=400&h=500&fit=crop&auto=format',
  'https://images.unsplash.com/photo-1543087903-8d8f68d7f0be?w=400&h=500&fit=crop&auto=format',
]
const RAW: Omit<Product,'id'|'rating'|'ratingCount'|'wishlisted'>[] = [
  { name:'White Oxford',    brand:'Ralph Lauren',   price:1999,  sizes:['S','M','L','XL'],      colours:['White','Off-White'],  fabric:'100% Cotton',   tag:'Bestseller', img:IMGS[0],  description:'Timeless white Oxford in premium cotton. Perfect for formal meetings or casual Fridays. Mother-of-pearl buttons, classic spread collar.' },
  { name:'Black Slim Fit',  brand:'Zara',           price:1899,  sizes:['M','L','XL'],          colours:['Black'],              fabric:'Poly-Cotton',   tag:'New',        img:IMGS[1],  description:'Sharp black slim-fit with a subtle sheen. Wrinkle-resistant fabric keeps you sharp all day. Ideal for evening events.' },
  { name:'Denim Casual',    brand:"Levi's",         price:2199,  sizes:['S','M','L','XL','XXL'],colours:['Blue','Dark Blue'],   fabric:'Denim',                           img:IMGS[2],  description:'Classic stonewashed denim shirt with a relaxed fit. Vintage feel. Pair with chinos or wear over a tee for street style.' },
  { name:'Polo Premium',    brand:'Lacoste',        price:1699,  sizes:['S','M','L'],           colours:['Cream','Navy'],       fabric:'Piqué Cotton',  tag:'Popular',    img:IMGS[3],  description:'Heritage polo in premium piqué cotton with the iconic croc emblem. Ribbed collar and cuffs for a refined casual look.' },
  { name:'Oversized Tee',   brand:'H&M',            price:1499,  sizes:['M','L','XL','XXL'],    colours:['Grey','Black'],       fabric:'Jersey',                          img:IMGS[4],  description:'Ultra-soft oversized tee with a dropped shoulder cut. Garment-dyed for a lived-in aesthetic. Streetwear essential.' },
  { name:'Grey Hoodie',     brand:'Nike',           price:2499,  sizes:['S','M','L','XL'],      colours:['Grey','Charcoal'],    fabric:'Fleece',        tag:'Trending',   img:IMGS[5],  description:'Classic Nike pullover hoodie in premium fleece. Kangaroo pocket, adjustable drawstring. Perfect for workouts or street wear.' },
  { name:'Navy Linen',      brand:'Massimo Dutti',  price:3499,  sizes:['S','M','L'],           colours:['Navy','Blue'],        fabric:'Linen',         tag:'Summer',     img:IMGS[6],  description:'Breathable pure linen in deep navy. Relaxed fit with mandarin collar. Perfect for beach-to-city transitions.' },
  { name:'Silk Cream',      brand:'Louis Philippe', price:5999,  sizes:['M','L','XL'],          colours:['Cream','Beige'],      fabric:'Silk Blend',    tag:'Premium',    img:IMGS[7],  description:'Luxurious silk-blend with pearlescent finish. Fluid drape. Ideal for formal dinners and premium events.' },
  { name:'Burgundy Check',  brand:'Peter England',  price:2799,  sizes:['S','M','L','XL'],      colours:['Burgundy','Red'],     fabric:'Cotton',                          img:IMGS[8],  description:'Sophisticated micro-check in rich burgundy. Semi-formal fit with spread collar. Versatile from boardroom to bar.' },
  { name:'Olive Utility',   brand:'Jack & Jones',   price:3199,  sizes:['M','L','XL','XXL'],    colours:['Olive','Green'],      fabric:'Canvas',        tag:'Trending',   img:IMGS[9],  description:'Heavy-duty utility shirt with multiple pockets and epaulette detail. Rugged canvas with military-inspired edge.' },
  { name:'Printed Floral',  brand:'Mango Man',      price:1799,  sizes:['S','M','L'],           colours:['White','Multi'],      fabric:'Viscose',                         img:IMGS[10], description:'Bold tropical floral on lightweight viscose. Relaxed Cuban collar for resort wear or vibrant casual.' },
  { name:'Royal Blue',      brand:'Arrow',          price:2999,  sizes:['S','M','L','XL'],      colours:['Blue','Royal Blue'],  fabric:'Oxford Cotton',  tag:'Bestseller', img:IMGS[11], description:'Premium royal blue Oxford weave. Classic button-down collar and box pleat. Wardrobe essential for the modern professional.' },
  { name:'Charcoal Fleece', brand:'Adidas',         price:4499,  sizes:['M','L','XL','XXL'],    colours:['Charcoal','Grey'],    fabric:'Tech Fleece',                     img:IMGS[12], description:'Next-gen tech fleece with bonded seams. Moisture-wicking and thermally efficient. Elevates your athleisure game.' },
  { name:'Striped Nautical',brand:'Tommy Hilfiger', price:2299,  sizes:['S','M','L','XL'],      colours:['White','Navy','Red'], fabric:'Piqué Cotton',   tag:'Popular',    img:IMGS[13], description:'Iconic Breton-inspired stripe polo with Tommy flag detail. Classic nautical colours. A perennial wardrobe favourite.' },
  { name:'Mustard Twill',   brand:'Celio',          price:3799,  sizes:['M','L','XL'],          colours:['Mustard','Yellow'],   fabric:'Twill Cotton',                    img:IMGS[14], description:'Statement mustard twill with tonal button finish. Contemporary slim fit. Pairs beautifully with dark indigo or charcoal trousers.' },
]
const SHIRTS: Product[] = RAW.map((r, i) => ({
  ...r, id: i + 1,
  rating: parseFloat((3.8 + Math.random() * 1.2).toFixed(1)),
  ratingCount: Math.floor(150 + Math.random() * 850),
  wishlisted: false,
}))

const ACCESSORIES: Accessory[] = [
  { id:101, type:'Shirt', name:'Club Stripe',   price:2299, img:'https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=200&h=250&fit=crop&auto=format' },
  { id:102, type:'Shirt', name:'Oxford White',  price:1999, img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=200&h=250&fit=crop&auto=format' },
  { id:103, type:'Shirt', name:'Linen Blue',    price:3299, img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=250&fit=crop&auto=format' },
  { id:104, type:'Shirt', name:'Polo Green',    price:1799, img:'https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=200&h=250&fit=crop&auto=format' },
  { id:105, type:'Jeans', name:'Slim Indigo',   price:3499, img:'https://images.unsplash.com/photo-1624378439432-ae4db5b11437?w=200&h=250&fit=crop&auto=format' },
  { id:106, type:'Shoes', name:'White Leather', price:5999, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=250&fit=crop&auto=format' },
  { id:107, type:'Watch', name:'Steel Minimal', price:8999, img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=250&fit=crop&auto=format' },
  { id:108, type:'Belt',  name:'Italian Hide',  price:1999, img:'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=200&h=250&fit=crop&auto=format' },
  { id:109, type:'Bag',   name:'Canvas Tote',   price:2499, img:'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=250&fit=crop&auto=format' },
]

const CATS = ['All','Formal','Casual','Streetwear','Sports','Premium']
const FILTERS = ['Price ↑','Colour','Fabric','Size','Brand']
const PAY_METHODS = [
  { id:'gpay',   label:'Google Pay',  sub:'UPI · Instant',         icon:'🟢', color:'#1a7f37' },
  { id:'phonepe',label:'PhonePe',     sub:'UPI · Instant',         icon:'🟣', color:'#5f259f' },
  { id:'paytm',  label:'Paytm',       sub:'Wallet · UPI',          icon:'🔵', color:'#00b9f1' },
  { id:'upi',    label:'Other UPI',   sub:'Enter UPI ID',          icon:'📲', color:'#f97316' },
  { id:'credit', label:'Credit Card', sub:'Visa / Mastercard',     icon:'💳', color:'#1e40af' },
  { id:'debit',  label:'Debit Card',  sub:'All banks supported',   icon:'🏦', color:'#065f46' },
  { id:'cash',   label:'Cash',        sub:'Pay at store counter',  icon:'💵', color:'#78350f' },
]
const GST_RATE    = 0.18
const COUPON_CODE = 'STYLE10'
const COUPON_DISC = 0.10

/* ══════════════════════════════════════════
   HELPERS
══════════════════════════════════════════ */
function fmtP(n: number) { return `₹${n.toLocaleString('en-IN')}` }
function Stars({ r }: { r: number }) {
  return (
    <span className="stars">
      {[1,2,3,4,5].map(n => (
        <i key={n} className={`ri-star${n<=Math.round(r)?'-fill':'-line'}`} />
      ))}
    </span>
  )
}
function orderId() { return 'SS' + Date.now().toString().slice(-8) }
function invoice() { return 'INV' + Math.random().toString(36).slice(2,10).toUpperCase() }
function delivery() {
  const d = new Date(); d.setDate(d.getDate() + 3 + Math.floor(Math.random() * 4))
  return d.toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'})
}


/* ══════════════════════════════════════════
   SHIRT DETAIL MODAL
══════════════════════════════════════════ */
function ShirtModal({
  product, onClose, onTryOn, onAddCart,
}: {
  product: Product
  onClose: () => void
  onTryOn: (p: Product) => void
  onAddCart: (p: Product, size: string) => void
}) {
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0])
  return (
    <div className="modalOverlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modalBox">
        <div className="modalHandle"><span /></div>
        <div className="modalHeader">
          <h3>{product.name}</h3>
          <button className="closeBtn" onClick={onClose}><i className="ri-close-line" /></button>
        </div>
        <div className="modalBody">
          <div className="shirtDetailWrap">
            <img className="shirtDetailImg" src={product.img} alt={product.name} />
            <div className="detailRow">
              <div>
                <div className="detailName">{product.name}</div>
                <div className="detailBrand">{product.brand}</div>
              </div>
              <div className="detailPrice">{fmtP(product.price)}</div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:8}}>
              <Stars r={product.rating} />
              <span style={{fontSize:11,color:'var(--text-3)'}}>({product.ratingCount.toLocaleString()})</span>
            </div>
            <div className="detailMeta">
              <div className="metaRow">
                <span className="metaLabel">Fabric</span>
                <span className="metaValue">{product.fabric}</span>
              </div>
              <div className="metaRow">
                <span className="metaLabel">Colours</span>
                <span className="metaValue">{product.colours.join(', ')}</span>
              </div>
              <div>
                <div className="metaLabel" style={{marginBottom:8}}>Select Size</div>
                <div className="sizeGrid">
                  {product.sizes.map(s => (
                    <button key={s} className={`sizeBtn${s===size?' on':''}`} onClick={() => setSize(s)}>{s}</button>
                  ))}
                </div>
              </div>
            </div>
            <p className="detailDesc">{product.description}</p>
            <div className="detailBtnRow">
              <button className="btnPrimary" onClick={() => { onTryOn(product); onClose() }}>
                <i className="ri-body-scan-line" /> Try On
              </button>
              <button className="btnAccent" onClick={() => { onAddCart(product, size); onClose() }}>
                <i className="ri-shopping-bag-line" /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   CART DRAWER
══════════════════════════════════════════ */
function CartDrawer({
  items, onClose, onChange, onRemove, onCheckout,
}: {
  items: CartItem[]
  onClose: () => void
  onChange: (id: number, size: string, qty: number) => void
  onRemove: (id: number, size: string) => void
  onCheckout: (total: number) => void
}) {
  const [coupon, setCoupon] = useState('')
  const [couponApplied, setCouponApplied] = useState(false)

  const subtotal = items.reduce((s, c) => s + c.product.price * c.qty, 0)
  const discount = couponApplied ? Math.round(subtotal * COUPON_DISC) : 0
  const gst      = Math.round((subtotal - discount) * GST_RATE)
  const total    = subtotal - discount + gst

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === COUPON_CODE) setCouponApplied(true)
    else alert('Invalid coupon code. Try STYLE10')
  }

  return (
    <div className="modalOverlay" onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modalBox">
        <div className="modalHandle"><span /></div>
        <div className="modalHeader">
          <h3>Shopping Cart {items.length > 0 && `(${items.length})`}</h3>
          <button className="closeBtn" onClick={onClose}><i className="ri-close-line" /></button>
        </div>
        <div className="modalBody">
          {items.length === 0 ? (
            <div className="emptyCart">
              <i className="ri-shopping-bag-line" />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <div className="cartBody">
              {items.map(ci => (
                <div key={`${ci.product.id}-${ci.size}`} className="cartItem">
                  <img className="cartItemImg" src={ci.product.img} alt={ci.product.name} />
                  <div className="cartItemInfo">
                    <h4>{ci.product.name}</h4>
                    <p>{ci.product.brand}</p>
                    <div className="size">Size: {ci.size}</div>
                    <div className="qtyRow">
                      <button className="qtyBtn" onClick={() => onChange(ci.product.id, ci.size, ci.qty - 1)}>−</button>
                      <span className="qtyVal">{ci.qty}</span>
                      <button className="qtyBtn" onClick={() => onChange(ci.product.id, ci.size, ci.qty + 1)}>+</button>
                      <span style={{marginLeft:'auto',fontWeight:700,fontSize:14}}>{fmtP(ci.product.price * ci.qty)}</span>
                    </div>
                  </div>
                  <button className="removeBtn" onClick={() => onRemove(ci.product.id, ci.size)}>
                    <i className="ri-delete-bin-line" />
                  </button>
                </div>
              ))}

              <div className="couponRow">
                <input
                  className="couponInput"
                  placeholder="COUPON CODE"
                  value={coupon}
                  onChange={e => setCoupon(e.target.value)}
                />
                <button className="applyBtn" onClick={applyCoupon}>Apply</button>
              </div>

              <div className="cartSummary">
                <div className="summaryRow"><span>Subtotal</span><strong>{fmtP(subtotal)}</strong></div>
                {couponApplied && <div className="summaryRow"><span>Discount (10%)</span><strong style={{color:'#22c55e'}}>−{fmtP(discount)}</strong></div>}
                <div className="summaryRow"><span>GST (18%)</span><strong>{fmtP(gst)}</strong></div>
                <div className="divider" />
                <div className="summaryRow total"><span>Total</span><strong>{fmtP(total)}</strong></div>
              </div>

              <button className="proceedBtn" onClick={() => { onClose(); onCheckout(total) }}>
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   PAYMENT MODAL
══════════════════════════════════════════ */
function PaymentModal({
  total, onClose, onSuccess,
}: {
  total: number
  onClose: () => void
  onSuccess: () => void
}) {
  const [method,    setMethod]    = useState('gpay')
  const [upiId,     setUpiId]     = useState('')
  const [cardNum,   setCardNum]   = useState('')
  const [cardExp,   setCardExp]   = useState('')
  const [cardCvv,   setCardCvv]   = useState('')
  const [success,   setSuccess]   = useState(false)
  const [oid]     = useState(orderId)
  const [inv]     = useState(invoice)
  const [delDate] = useState(delivery)

  function pay() {
    setSuccess(true)
    onSuccess()
  }

  if (success) return (
    <div className="modalOverlay">
      <div className="modalBox">
        <div className="modalHandle"><span /></div>
        <div className="modalBody">
          <div className="paySuccess">
            <div className="successIcon"><i className="ri-check-line" /></div>
            <h3>Payment Successful!</h3>
            <p>Your order has been confirmed and is being prepared.</p>
            <div className="invoiceCard">
              <div className="invoiceRow"><span>Order ID</span><strong>{oid}</strong></div>
              <div className="invoiceRow"><span>Invoice</span><strong>{inv}</strong></div>
              <div className="invoiceRow"><span>Amount Paid</span><strong>{fmtP(total)}</strong></div>
              <div className="invoiceRow"><span>Est. Delivery</span><strong>{delDate}</strong></div>
              <div className="invoiceRow"><span>Method</span><strong>{PAY_METHODS.find(m=>m.id===method)?.label}</strong></div>
            </div>
            <button className="downloadBtn" onClick={() => alert('Invoice downloaded!')}>
              <i className="ri-download-line" /> Download Invoice
            </button>
            <button className="continueBtn" onClick={onClose}>Continue Shopping</button>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="modalOverlay" onClick={e => { if (e.target===e.currentTarget) onClose() }}>
      <div className="modalBox">
        <div className="modalHandle"><span /></div>
        <div className="modalHeader">
          <h3>Pay {fmtP(total)}</h3>
          <button className="closeBtn" onClick={onClose}><i className="ri-close-line" /></button>
        </div>
        <div className="modalBody">
          <div className="paymentMethods">
            {PAY_METHODS.map(pm => (
              <div
                key={pm.id}
                className={`payMethod${method===pm.id?' selected':''}`}
                onClick={() => setMethod(pm.id)}
              >
                <div className="payMethodIcon">{pm.icon}</div>
                <div className="payMethodInfo">
                  <h4>{pm.label}</h4>
                  <p>{pm.sub}</p>
                </div>
                <div className={`payMethodRadio${method===pm.id?' on':''}`} />
              </div>
            ))}
            {method==='upi' && (
              <div className="upiRow">
                <input className="upiInput" placeholder="yourname@upi" value={upiId} onChange={e=>setUpiId(e.target.value)} />
              </div>
            )}
            {(method==='credit'||method==='debit') && (
              <div className="cardForm">
                <input className="cardInput" placeholder="Card Number" maxLength={19} value={cardNum} onChange={e=>setCardNum(e.target.value)} />
                <div className="cardRow">
                  <input className="cardInput" placeholder="MM/YY" maxLength={5} value={cardExp} onChange={e=>setCardExp(e.target.value)} />
                  <input className="cardInput" placeholder="CVV" maxLength={3} value={cardCvv} onChange={e=>setCardCvv(e.target.value)} />
                </div>
              </div>
            )}
          </div>
          <button className="payNowBtn" onClick={pay}>
            <i className="ri-lock-line" /> Pay {fmtP(total)}
          </button>
        </div>
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   SMART MIRROR (right column)
══════════════════════════════════════════ */
function SmartMirror({
  cam,
}: {
  cam: ReturnType<typeof useCamera>
}) {
  const { videoRef, cameraOn, scanState, aiResult, overlayUrl, overlayOn, startCamera, stopCamera, switchCamera, captureImage, toggleFullscreen } = cam

  return (
    <div className="mirrorCol">
      {/* Camera control buttons */}
      <div className="cameraControls">
        {!cameraOn ? (
          <button className="camBtn primary" onClick={startCamera}>
            <i className="ri-camera-line" /> Start Camera
          </button>
        ) : (
          <>
            <button className="camBtn danger" onClick={stopCamera}>
              <i className="ri-camera-off-line" /> Stop
            </button>
            <button className="camBtn" onClick={switchCamera}>
              <i className="ri-camera-switch-line" />
            </button>
            <button className="camBtn" onClick={captureImage}>
              <i className="ri-screenshot-line" />
            </button>
            <button className="camBtn" onClick={toggleFullscreen}>
              <i className="ri-fullscreen-line" />
            </button>
          </>
        )}
      </div>

      {/* Mirror frame */}
      <div className="mirrorFrame">
        {/* Live badge */}
        {cameraOn && (
          <div className="liveStatus">
            <div className="liveDot" />
            LIVE
          </div>
        )}

        {/* Camera feed */}
        <video ref={videoRef} id="camera" autoPlay muted playsInline style={{ display: cameraOn ? 'block' : 'none' }} />

        {/* Placeholder */}
        {!cameraOn && (
          <div className="cameraPlaceholder">
            <i className="ri-camera-line" />
            <p>Tap Start Camera to begin</p>
          </div>
        )}

        {/* AI Scanning overlay */}
        {cameraOn && scanState === 'scanning' && (
          <div className="aiScanOverlay">
            <div className="scanSpinner" />
            <p>Scanning body…</p>
          </div>
        )}

        {/* Clothing overlay (try-on) */}
        {overlayUrl && (
          <img id="clothingOverlay" src={overlayUrl} alt="Try-on"
            className={overlayOn ? '' : 'hidden'} />
        )}

        {/* AR guides */}
        {cameraOn && scanState !== 'scanning' && (
          <>
            <div className="faceGuide" />
            <div className="bodyGuide" />
            <div className="corner topLeft" /><div className="corner topRight" />
            <div className="corner bottomLeft" /><div className="corner bottomRight" />
            <div className="trackingDot" style={{ top:'22%', left:'50%' }} />
            <div className="trackingDot" style={{ top:'40%', left:'46%' }} />
            <div className="trackingDot" style={{ top:'56%', left:'54%' }} />
            <div className="trackingDot" style={{ top:'72%', left:'50%' }} />
            <div className="scanLine" />
          </>
        )}

        {/* Status bar */}
        {cameraOn && scanState === 'done' && (
          <div className="statusBar">
            <div className="statusItem">
              <h3>{aiResult?.fit ?? '—'}</h3><p>Fit Score</p>
            </div>
            <div className="statusItem">
              <h3>30 FPS</h3><p>Tracking</p>
            </div>
            <div className="statusItem">
              <h3>{aiResult ? 'Ready' : '—'}</h3><p>AI Status</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ══════════════════════════════════════════
   APP
══════════════════════════════════════════ */
export default function App() {
  const cam = useCamera()

  // Splash screen
  const [showSplash, setShowSplash] = useState(true)

  // Product list state
  const [shirts, setShirts]               = useState<Product[]>(SHIRTS)
  const [visible, setVisible]             = useState(6)
  const [search, setSearch]               = useState('')
  const [activeCat, setActiveCat]         = useState('All')
  const [sortFilter, setSortFilter]       = useState('')

  // UI state
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [activeProduct, setActiveProduct]     = useState<Product | null>(null)
  const [showModal, setShowModal]             = useState(false)
  const [showCart, setShowCart]               = useState(false)
  const [showPayment, setShowPayment]         = useState(false)
  const [payTotal, setPayTotal]               = useState(0)

  // Cart
  const [cart, setCart] = useState<CartItem[]>([])

  // Toasts
  const [toasts, setToasts] = useState<ToastItem[]>([])

  // Product grid scroll ref (for infinite scroll)
  const gridRef = useRef<HTMLDivElement>(null)

  /* ─ Toast helper ─────────────────── */
  const addToast = useCallback((msg: string, icon = 'ri-check-circle-fill') => {
    const id = Date.now()
    setToasts(t => [...t, { id, msg, icon }])
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3000)
  }, [])

  /* ─ Wishlist toggle ─────────────── */
  function toggleWishlist(id: number) {
    setShirts(prev => prev.map(s => {
      if (s.id !== id) return s
      const next = { ...s, wishlisted: !s.wishlisted }
      addToast(next.wishlisted ? 'Added to Wishlist ♥' : 'Removed from Wishlist', 'ri-heart-fill')
      return next
    }))
  }

  /* ─ Filtered list ───────────────── */
  const filtered = shirts.filter(s => {
    const q = search.toLowerCase()
    const matchSearch = !q || s.name.toLowerCase().includes(q) || s.colours.join().toLowerCase().includes(q) || s.price.toString().includes(q)
    const matchCat = activeCat === 'All'
      || (activeCat === 'Formal'     && ['White Oxford','Black Slim Fit','Silk Cream','Royal Blue','Burgundy Check'].includes(s.name))
      || (activeCat === 'Casual'     && ['Denim Casual','Polo Premium','Oversized Tee','Navy Linen','Printed Floral','Striped Nautical','Mustard Twill'].includes(s.name))
      || (activeCat === 'Streetwear' && ['Oversized Tee','Olive Utility','Printed Floral'].includes(s.name))
      || (activeCat === 'Sports'     && ['Grey Hoodie','Charcoal Fleece'].includes(s.name))
      || (activeCat === 'Premium'    && ['Silk Cream','Royal Blue','Olive Utility'].includes(s.name))
    return matchSearch && matchCat
  }).sort((a, b) => {
    if (sortFilter === 'Price ↑') return a.price - b.price
    if (sortFilter === 'Price ↓') return b.price - a.price
    return 0
  })

  const displayList = filtered.slice(0, visible)

  /* ─ Infinite scroll ─────────────── */
  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    function onScroll() {
      if (el!.scrollTop + el!.clientHeight >= el!.scrollHeight - 40) {
        setVisible(v => Math.min(v + 6, filtered.length))
      }
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [filtered.length])

  /* ─ Cart helpers ────────────────── */
  function addToCart(product: Product, size: string) {
    setCart(prev => {
      const exists = prev.find(c => c.product.id === product.id && c.size === size)
      if (exists) return prev.map(c => c.product.id === product.id && c.size === size ? { ...c, qty: c.qty + 1 } : c)
      return [...prev, { product, size, qty: 1 }]
    })
    addToast(`${product.name} added to cart`, 'ri-shopping-bag-fill')
  }

  function changeQty(id: number, size: string, qty: number) {
    if (qty < 1) { removeFromCart(id, size); return }
    setCart(prev => prev.map(c => c.product.id === id && c.size === size ? { ...c, qty } : c))
  }

  function removeFromCart(id: number, size: string) {
    setCart(prev => prev.filter(c => !(c.product.id === id && c.size === size)))
  }

  /* ─ Try On ──────────────────────── */
  function handleTryOn(product: Product) {
    setActiveProduct(product)
    cam.tryOn(product.img, product.name)
    addToast(`Trying on ${product.name}`, 'ri-body-scan-line')
  }

  /* ─ Open shirt modal ────────────── */
  function openModal(product: Product) {
    setSelectedProduct(product)
    setShowModal(true)
  }

  const cartCount = cart.reduce((s, c) => s + c.qty, 0)
  const aiResult  = cam.aiResult

  return (
    <>
      {/* Splash screen — sits above everything, dismissed on tap */}
      {showSplash && <SplashScreen onEnter={() => setShowSplash(false)} />}

      {/* Landscape warning */}
      <div className="rotateWarning">
        <i className="ri-phone-line" />
        <h3>Rotate Your Device</h3>
        <p>StyleSync works best in portrait mode</p>
      </div>

      {/* Toasts */}
      <ToastLayer toasts={toasts} />

      {/* Modals */}
      {showModal && selectedProduct && (
        <ShirtModal
          product={selectedProduct}
          onClose={() => setShowModal(false)}
          onTryOn={handleTryOn}
          onAddCart={addToCart}
        />
      )}
      {showCart && (
        <CartDrawer
          items={cart}
          onClose={() => setShowCart(false)}
          onChange={changeQty}
          onRemove={removeFromCart}
          onCheckout={total => { setPayTotal(total); setShowPayment(true) }}
        />
      )}
      {showPayment && (
        <PaymentModal
          total={payTotal}
          onClose={() => { setShowPayment(false); setCart([]) }}
          onSuccess={() => {}}
        />
      )}

      {/* ═══ KIOSK WRAPPER ═══ */}
      <div className="kioskWrap">

        {/* ── TOP BAR ─────────────────────── */}
        <header className="topBar">
          <LogoHorizontal iconSize={34} />

          <div className="searchWrap">
            <i className="ri-search-line" />
            <input
              className="searchInput"
              placeholder="Search shirts, colour, price…"
              value={search}
              onChange={e => { setSearch(e.target.value); setVisible(6) }}
            />
          </div>

          <div className="aiChip">
            <i className={cam.scanState === 'scanning' ? 'ri-loader-4-line' : cam.scanState === 'done' ? 'ri-checkbox-circle-line' : 'ri-cpu-line'} />
            <span>{cam.scanState === 'scanning' ? 'Scanning…' : cam.scanState === 'done' ? 'AI Ready' : 'AI Standby'}</span>
          </div>

          <div className="topActions">
            <button className="iconBtn" onClick={() => setShowCart(true)}>
              <i className="ri-shopping-bag-line" />
              {cartCount > 0 && <span className="cartBadge">{cartCount}</span>}
            </button>
            <button className="iconBtn" onClick={cam.reset} title="Reset">
              <i className="ri-refresh-line" />
            </button>
          </div>
        </header>

        {/* ── MIDDLE ROW ──────────────────── */}
        <div className="middleRow">

          {/* LEFT — WARDROBE */}
          <div className="wardrobeCol">

            <div className="wardrobeHeader">
              <h2>Wardrobe</h2>
              <p>Select &amp; try on any outfit</p>
            </div>

            {/* Category tabs */}
            <div className="categoryTabs">
              {CATS.map(c => (
                <button
                  key={c}
                  className={`category${activeCat===c?' active':''}`}
                  onClick={() => { setActiveCat(c); setVisible(6) }}
                >{c}</button>
              ))}
            </div>

            {/* Filter chips */}
            <div className="filterBar">
              {FILTERS.map(f => (
                <button
                  key={f}
                  className={`filterChip${sortFilter===f?' on':''}`}
                  onClick={() => setSortFilter(prev => prev===f ? '' : f)}
                >
                  <i className="ri-filter-line" />{f}
                </button>
              ))}
            </div>

            {/* Product grid */}
            <div className="productGrid" ref={gridRef}>
              {displayList.map(p => (
                <div
                  key={p.id}
                  className={`productCard${activeProduct?.id===p.id?' active':''}`}
                  onClick={() => openModal(p)}
                >
                  {p.tag && <span className="tag">{p.tag}</span>}
                  <button
                    className={`heartBtn${p.wishlisted?' on':''}`}
                    onClick={e => { e.stopPropagation(); toggleWishlist(p.id) }}
                  >
                    <i className={p.wishlisted ? 'ri-heart-fill' : 'ri-heart-line'} />
                  </button>
                  <div className="productThumb">
                    <img src={p.img} alt={p.name} loading="lazy" />
                  </div>
                  <div className="productInfo">
                    <h4>{p.name}</h4>
                    <div className="brand">{p.brand}</div>
                    <Stars r={p.rating} />
                    <span className="price">{fmtP(p.price)}</span>
                  </div>
                  <button
                    className={`tryOnBtn${activeProduct?.id===p.id?' active':''}`}
                    onClick={e => { e.stopPropagation(); handleTryOn(p) }}
                  >
                    {activeProduct?.id===p.id ? '✓ Wearing' : 'Try On'}
                  </button>
                </div>
              ))}

              {/* Loading skeleton for remaining items */}
              {visible < filtered.length && [1,2].map(k => (
                <div key={k} className="skeletonCard">
                  <div className="skelThumb" />
                  <div className="skelLine w80" />
                  <div className="skelLine w60" />
                  <div className="skelLine w60" />
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT — SMART MIRROR */}
          <SmartMirror cam={cam} />

        </div>

        {/* ── BOTTOM PANEL ────────────────── */}
        <div className="bottomPanel">

          {/* AI Strip */}
          <div className="aiStrip">
            <div className="aiStripLeft">
              <div className="aiLabel"><i className="ri-sparkling-line" />AI Stylist</div>
              <p className="aiRec">
                {aiResult
                  ? aiResult.tip
                  : 'Select an outfit and start the camera to get AI styling recommendations.'}
              </p>
            </div>
            <div className="aiMetrics">
              <div className="metricPill">
                <span className="metricVal">{aiResult?.size ?? '—'}</span>
                <span className="metricKey">Size</span>
              </div>
              <div className="metricPill">
                <span className="metricVal">{aiResult?.bodyType ?? '—'}</span>
                <span className="metricKey">Body</span>
              </div>
              <div className="metricPill">
                <span className="metricVal">{aiResult ? `${aiResult.confidence}%` : '—'}</span>
                <span className="metricKey">Conf.</span>
              </div>
              <div className="metricPill">
                <span className="metricVal">{aiResult?.weather ?? '—'}</span>
                <span className="metricKey">Weather</span>
              </div>
            </div>
          </div>

          {/* You May Also Like */}
          <div className="recSection">
            <div className="recTitle">✦ You May Also Like</div>
            <div className="recStrip">
              {ACCESSORIES.map(a => (
                <div key={a.id} className="recCard" onClick={() => addToast(`${a.name} added to cart`, 'ri-shopping-bag-fill')}>
                  <div className="recThumb"><img src={a.img} alt={a.name} loading="lazy" /></div>
                  <div className="recType">{a.type}</div>
                  <div className="recName">{a.name}</div>
                  <div className="recPrice">{fmtP(a.price)}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>
  )
}
