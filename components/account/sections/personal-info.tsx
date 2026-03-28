'use client'

import { useState } from 'react'

export function PersonalInfoSection() {
  const [formData, setFormData] = useState({
    firstName: 'Michael',
    lastName: 'Roberts',
    email: 'm.roberts@gmail.com',
    phone: '+44 7911 123456',
    nationality: 'United Kingdom',
    passportCountry: 'United Kingdom',
    language: 'English',
    currency: 'GBP (£)',
  })

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPasswordData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="space-y-4">
      {/* Personal Information Card */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '12px',
          padding: '24px 28px',
          opacity: 0,
          transform: 'translateY(12px)',
          animation: 'fadeInUp 0.4s ease forwards',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', marginBottom: '20px' }}>
          Personal Information
        </h3>

        {/* Form Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px 24px',
            marginBottom: '20px',
          }}
          className="md:grid-cols-1"
        >
          {[
            { label: 'First Name', name: 'firstName', type: 'text' },
            { label: 'Last Name', name: 'lastName', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Phone', name: 'phone', type: 'tel' },
            { label: 'Nationality', name: 'nationality', type: 'select', options: ['United Kingdom', 'United States', 'Canada', 'Australia'] },
            { label: 'Passport Country', name: 'passportCountry', type: 'select', options: ['United Kingdom', 'United States', 'Canada', 'Australia'] },
            { label: 'Preferred Language', name: 'language', type: 'select', options: ['English', 'Arabic', 'Chinese', 'Hindi'] },
            { label: 'Preferred Currency', name: 'currency', type: 'select', options: ['GBP (£)', 'USD ($)', 'EUR (€)', 'AED (د.إ)', 'SAR (﷼)'] },
          ].map((field) => (
            <div key={field.name}>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'rgba(26,26,46,0.55)',
                  marginBottom: '8px',
                }}
              >
                {field.label}
              </label>
              {field.type === 'select' ? (
                <select
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1a1a2e',
                    background: '#ffffff',
                    cursor: 'pointer',
                    boxSizing: 'border-box',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(26,26,46,0.35)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 10px center',
                    backgroundSize: '20px',
                    paddingRight: '36px',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor = '#d4a04a'
                    ;(e.target as HTMLSelectElement).style.boxShadow = '0 0 0 3px rgba(212,160,74,0.12)'
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,0,0,0.07)'
                    ;(e.target as HTMLSelectElement).style.boxShadow = 'none'
                  }}
                  onMouseEnter={(e) => {
                    if ((e.target as HTMLSelectElement) !== document.activeElement) {
                      (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,0,0,0.12)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if ((e.target as HTMLSelectElement) !== document.activeElement) {
                      (e.target as HTMLSelectElement).style.borderColor = 'rgba(0,0,0,0.07)'
                    }
                  }}
                >
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '44px',
                    padding: '0 14px',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '8px',
                    fontSize: '14px',
                    color: '#1a1a2e',
                    background: '#ffffff',
                    boxSizing: 'border-box',
                    transition: 'all 0.2s ease',
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = '#d4a04a'
                    ;(e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(212,160,74,0.12)'
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = 'rgba(0,0,0,0.07)'
                    ;(e.target as HTMLInputElement).style.boxShadow = 'none'
                  }}
                  onMouseEnter={(e) => {
                    if ((e.target as HTMLInputElement) !== document.activeElement) {
                      (e.target as HTMLInputElement).style.borderColor = 'rgba(0,0,0,0.12)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if ((e.target as HTMLInputElement) !== document.activeElement) {
                      (e.target as HTMLInputElement).style.borderColor = 'rgba(0,0,0,0.07)'
                    }
                  }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Save Button */}
        <button
          style={{
            background: '#1D215E',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: 600,
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginTop: '8px',
          }}
          className="hover:bg-[#282d6e]"
        >
          Save Changes
        </button>
      </div>

      {/* Change Password Card */}
      <div
        style={{
          background: '#ffffff',
          border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: '12px',
          padding: '24px 28px',
          opacity: 0,
          transform: 'translateY(12px)',
          animation: 'fadeInUp 0.4s ease forwards',
          animationDelay: '0.1s',
        }}
      >
        <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', marginBottom: '20px' }}>
          Change Password
        </h3>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px 24px',
            marginBottom: '20px',
          }}
          className="md:grid-cols-1"
        >
          {[
            { label: 'Current Password', name: 'currentPassword', placeholder: 'Enter current password' },
            { label: 'New Password', name: 'newPassword', placeholder: 'Enter new password' },
          ].map((field) => (
            <div key={field.name}>
              <label
                style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: 'rgba(26,26,46,0.55)',
                  marginBottom: '8px',
                }}
              >
                {field.label}
              </label>
              <input
                type="password"
                name={field.name}
                placeholder={field.placeholder}
                value={passwordData[field.name as keyof typeof passwordData]}
                onChange={handlePasswordChange}
                style={{
                  width: '100%',
                  height: '44px',
                  padding: '0 14px',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '8px',
                  fontSize: '14px',
                  color: '#1a1a2e',
                  background: '#ffffff',
                  boxSizing: 'border-box',
                  transition: 'all 0.2s ease',
                }}
                onFocus={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = '#d4a04a'
                  ;(e.target as HTMLInputElement).style.boxShadow = '0 0 0 3px rgba(212,160,74,0.12)'
                }}
                onBlur={(e) => {
                  (e.target as HTMLInputElement).style.borderColor = 'rgba(0,0,0,0.07)'
                  ;(e.target as HTMLInputElement).style.boxShadow = 'none'
                }}
              />
            </div>
          ))}
        </div>

        {/* Update Password Button */}
        <button
          style={{
            background: '#1D215E',
            color: '#ffffff',
            fontSize: '13px',
            fontWeight: 600,
            padding: '10px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            marginTop: '8px',
          }}
          className="hover:bg-[#282d6e]"
        >
          Update Password
        </button>
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
