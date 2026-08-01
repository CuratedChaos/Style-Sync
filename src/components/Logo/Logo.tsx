export function SSMark({ size = 80 }: { size?: number }) {
  const aspect = 116 / 100
  return (
    <svg
      width={size * aspect}
      height={size}
      viewBox="0 0 116 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Outer navy ring (centred at 50,50) ── */}
      <circle cx="50" cy="50" r="45" stroke="#1B2D78" strokeWidth="3.5"/>

      {/* ── Clothes hanger hook ── */}
      <path
        d="M50 10 C54 10 57 13 57 17 C57 21 54 23 50 23"
        stroke="#1B2D78" strokeWidth="2.2" strokeLinecap="round"
      />
      {/* ── Hanger shoulder bar ── */}
      <path
        d="M50 23 C50 28 50 28 33 36 L67 36 C50 28 50 28 50 23"
        stroke="#1B2D78" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
      />

      {/* ── Shirt silhouette ghost ── */}
      <path
        d="M33 36 L22 47 L32 51 L32 74 L68 74 L68 51 L78 47 L67 36
           Q60 41 50 41 Q40 41 33 36Z"
        fill="#1B2D78" fillOpacity="0.07"
        stroke="#1B2D78" strokeWidth="1" strokeOpacity="0.18"
      />

      {/* ── Upper triangle (dark navy ▲) ── */}
      <polygon points="50,27 31,60 69,60" fill="#1B2D78"/>

      {/* ── Lower triangle (blue ▼) ── */}
      <polygon points="50,61 31,28 69,28" fill="#2563EB" fillOpacity="0.72"/>

      {/* ── AI node — blue circle sitting on the right of the ring ── */}
      <circle cx="104" cy="50" r="11" fill="#2563EB"/>
      {/* Three white dots */}
      <circle cx="100.5" cy="46" r="2.2" fill="white"/>
      <circle cx="107.5" cy="46" r="2.2" fill="white"/>
      <circle cx="104"   cy="55" r="2.2" fill="white"/>
      {/* Connecting lines */}
      <line x1="100.5" y1="46" x2="107.5" y2="46" stroke="white" strokeWidth="1.4"/>
      <line x1="100.5" y1="46" x2="104"   y2="55" stroke="white" strokeWidth="1.4"/>
      <line x1="107.5" y1="46" x2="104"   y2="55" stroke="white" strokeWidth="1.4"/>

      {/* ── Connector line from ring edge to AI node ── */}
      <line x1="95" y1="50" x2="93" y2="50" stroke="#1B2D78" strokeWidth="2" strokeOpacity="0.35"/>
    </svg>
  )
}

/** Full logo: icon + wordmark (horizontal — for top bar) */
export function LogoHorizontal({ iconSize = 34 }: { iconSize?: number }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:10, flexShrink:0 }}>
      <SSMark size={iconSize} />
      <div>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 20,
          fontWeight: 700,
          color: '#1B2D78',
          lineHeight: 1,
          letterSpacing: '-0.3px',
        }}>
          Style<span style={{ color:'#2563EB' }}>Sync</span>
        </div>
      </div>
    </div>
  )
}

/** Full logo: icon centered above wordmark + tagline (for splash) */
export function LogoSplash() {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
      <SSMark size={150} />
      <div style={{ textAlign:'center' }}>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 46,
          fontWeight: 800,
          color: '#1B2D78',
          letterSpacing: '-1px',
          lineHeight: 1,
        }}>
          Style<span style={{ color:'#2563EB' }}>Sync</span>
        </div>
        <div style={{
          marginTop: 8,
          fontSize: 12,
          fontWeight: 500,
          color: '#A8978A',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
        }}>
          AI Powered Smart Virtual Trial Room
        </div>
      </div>
    </div>
  )
}