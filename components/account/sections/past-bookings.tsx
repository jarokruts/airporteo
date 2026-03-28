'use client'

export function PastBookingsSection() {
  const pastBookings = [
    { id: 1, date: '12 Mar 2026', airport: 'FRA — Frankfurt', service: 'Meet & Greet', flight: 'LH401' },
    { id: 2, date: '28 Feb 2026', airport: 'CDG — Paris', service: 'Fast Track + Porter', flight: 'AF1234' },
    { id: 3, date: '14 Feb 2026', airport: 'JFK — New York', service: 'VIP Suite', flight: 'AA100' },
    { id: 4, date: '03 Jan 2026', airport: 'SIN — Singapore', service: 'Meet & Greet', flight: 'SQ321' },
    { id: 5, date: '18 Dec 2025', airport: 'DOH — Doha', service: 'Transfer + Lounge', flight: 'QR007' },
  ]

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid rgba(0,0,0,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        opacity: 0,
        transform: 'translateY(12px)',
        animation: 'fadeInUp 0.4s ease forwards',
      }}
    >
      {/* Table */}
      <div className="overflow-x-auto">
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', background: '#f8f9fb' }}>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(26,26,46,0.35)' }}>
                Date
              </th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(26,26,46,0.35)' }}>
                Airport
              </th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(26,26,46,0.35)' }}>
                Service
              </th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(26,26,46,0.35)' }}>
                Flight
              </th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(26,26,46,0.35)' }}>
                Status
              </th>
              <th style={{ padding: '14px 12px', textAlign: 'left', fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.8px', color: 'rgba(26,26,46,0.35)' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {pastBookings.map((booking) => (
              <tr
                key={booking.id}
                style={{
                  borderBottom: '1px solid rgba(29,33,94,0.06)',
                  transition: 'background-color 0.2s ease',
                }}
                className="hover:bg-[rgba(29,33,94,0.06)]"
              >
                <td style={{ padding: '14px 12px', fontSize: '13px', color: '#1a1a2e' }}>{booking.date}</td>
                <td style={{ padding: '14px 12px', fontSize: '13px', fontWeight: 600, color: '#1a1a2e' }}>
                  {booking.airport}
                </td>
                <td style={{ padding: '14px 12px', fontSize: '13px', color: 'rgba(26,26,46,0.55)' }}>
                  {booking.service}
                </td>
                <td style={{ padding: '14px 12px', fontSize: '13px', color: 'rgba(26,26,46,0.55)' }}>
                  {booking.flight}
                </td>
                <td style={{ padding: '14px 12px' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '12px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(26,138,92,0.08)',
                      color: '#1a8a5c',
                    }}
                  >
                    Completed
                  </span>
                </td>
                <td style={{ padding: '14px 12px', fontSize: '12px', fontWeight: 600 }}>
                  <a href="#" style={{ color: '#d4a04a', textDecoration: 'none', marginRight: '12px', cursor: 'pointer', transition: 'opacity 0.2s ease' }} className="hover:opacity-70">
                    Invoice
                  </a>
                  <span style={{ color: 'rgba(26,26,46,0.35)', margin: '0 8px' }}>•</span>
                  <a href="#" style={{ color: '#d4a04a', textDecoration: 'none', cursor: 'pointer', transition: 'opacity 0.2s ease' }} className="hover:opacity-70">
                    Rebook
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
