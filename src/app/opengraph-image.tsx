import { ImageResponse } from 'next/og'

export const alt = 'Diego Pasaye — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

// Dynamic social/AI preview image (fixes the missing og:image). On-brand dark + lime.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          color: '#fafafa',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '26px', color: '#a3e635', letterSpacing: '4px' }}>
          <div style={{ width: '16px', height: '16px', borderRadius: '9999px', background: '#a3e635' }} />
          AVAILABLE FOR WORK
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '150px', fontWeight: 700, letterSpacing: '-6px', lineHeight: 0.95 }}>
          <span>Diego</span>
          <span style={{ color: '#8a8a8a' }}>Pasaye</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '28px', color: '#8a8a8a' }}>
          <span>Software Engineer — Morelia, México</span>
          <span style={{ color: '#5a5a5a' }}>diegopasaye.dev</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
