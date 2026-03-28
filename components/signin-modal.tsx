'use client'

import { useState } from 'react'
import { X, Eye, EyeSlash, Phone, EnvelopeSimple } from '@phosphor-icons/react'

const AIRPORTEO_LOGO = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="29" viewBox="0 0 499.83 80.6" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; fill-rule:evenodd; clip-rule:evenodd">
  <defs>
    <linearGradient id="lg0" gradientUnits="userSpaceOnUse" x1="99.58" y1="74.66" x2="61.66" y2="7.6">
      <stop offset="0" stop-color="#3E5BA4"/><stop offset="0.37" stop-color="#3B5298"/><stop offset="0.71" stop-color="#2F3166"/><stop offset="1" stop-color="#27294A"/>
    </linearGradient>
    <linearGradient id="lg1" gradientUnits="userSpaceOnUse" x1="38.52" y1="0.02" x2="40.91" y2="80.58">
      <stop offset="0" stop-color="#E84E46"/><stop offset="0.32" stop-color="#E02824"/><stop offset="0.64" stop-color="#D72124"/><stop offset="1" stop-color="#A02720"/>
    </linearGradient>
  </defs>
  <path fill="#FEFEFE" fill-rule="nonzero" d="M120.54 57.27l12.63 -33.07 8.94 0 12.63 33.07 -8.63 0 -2.98 -7.5 -11.04 0 -2.93 7.5 -8.62 0zm12.68 -13.61l8.78 0 -4.41 -11.5 -4.37 11.5zm39 13.61l0 -33.07 8.27 0 0 33.07 -8.27 0zm26.78 0l0 -33.07 16.54 0c3.9,0 6.78,1.02 8.63,3.08 1.85,2.05 2.77,4.81 2.77,8.27 0,2.22 -0.56,4.17 -1.69,5.85 -1.13,1.68 -2.67,2.93 -4.63,3.75 0.48,0.38 0.87,0.8 1.16,1.26 0.29,0.46 0.61,1.1 0.95,1.93l3.9 8.93 -8.63 0 -3.69 -8.42c-0.31,-0.72 -0.71,-1.24 -1.18,-1.57 -0.48,-0.32 -1.17,-0.49 -2.06,-0.49l-3.8 0 0 10.48 -8.27 0zm8.27 -16.84l6.11 0c1.61,0 2.87,-0.41 3.78,-1.21 0.9,-0.81 1.36,-2.03 1.36,-3.67 0,-3.32 -1.59,-4.98 -4.78,-4.98l-6.47 0 0 9.86zm37.15 16.84l0 -33.07 16.28 0c2.64,0 4.81,0.52 6.53,1.56 1.71,1.05 2.98,2.46 3.82,4.24 0.84,1.78 1.26,3.78 1.26,6.01 0,2.26 -0.48,4.26 -1.44,6.01 -0.96,1.74 -2.32,3.11 -4.08,4.08 -1.76,0.98 -3.86,1.46 -6.29,1.46l-7.81 0 0 9.71 -8.27 0zm8.27 -16.07l5.96 0c1.75,0 3.06,-0.48 3.93,-1.44 0.87,-0.96 1.31,-2.23 1.31,-3.8 0,-1.71 -0.4,-3.04 -1.21,-3.98 -0.8,-0.94 -2.06,-1.41 -3.77,-1.41l-6.22 0 0 10.63zm51.59 16.59c-5.38,0 -9.47,-1.37 -12.28,-4.11 -2.81,-2.74 -4.21,-7.01 -4.21,-12.79 0,-6.13 1.4,-10.53 4.21,-13.2 2.81,-2.67 6.9,-4.01 12.28,-4.01 5.37,0 9.46,1.34 12.27,4.01 2.81,2.67 4.21,7.07 4.21,13.2 0,5.78 -1.4,10.05 -4.21,12.79 -2.81,2.74 -6.9,4.11 -12.27,4.11zm0 -7.04c2.77,0 4.8,-0.8 6.08,-2.39 1.29,-1.59 1.93,-4.08 1.93,-7.47 0,-3.7 -0.64,-6.31 -1.93,-7.83 -1.28,-1.53 -3.31,-2.29 -6.08,-2.29 -2.81,0 -4.86,0.76 -6.14,2.29 -1.28,1.52 -1.93,4.13 -1.93,7.83 0,3.39 0.65,5.88 1.93,7.47 1.28,1.59 3.33,2.39 6.14,2.39zm33.97 6.52l0 -33.07 16.53 0c3.91,0 6.78,1.02 8.63,3.08 1.85,2.05 2.77,4.81 2.77,8.27 0,2.22 -0.56,4.17 -1.69,5.85 -1.13,1.68 -2.67,2.93 -4.62,3.75 0.48,0.38 0.86,0.8 1.15,1.26 0.29,0.46 0.61,1.1 0.95,1.93l3.91 8.93 -8.63 0 -3.7 -8.42c-0.31,-0.72 -0.7,-1.24 -1.18,-1.57 -0.48,-0.32 -1.17,-0.49 -2.06,-0.49l-3.8 0 0 10.48 -8.26 0zm8.26 -16.84l6.12 0c1.6,0 2.86,-0.41 3.77,-1.21 0.91,-0.81 1.36,-2.03 1.36,-3.67 0,-3.32 -1.59,-4.98 -4.78,-4.98l-6.47 0 0 9.86z"/>
  <path fill="url(#lg0)" d="M116.01 80.6l-16.55 0c-12.15,0 -21.29,-5.79 -26.07,-15.89l-6 -12.67 7.07 0 -1.4 -2.97 -10.24 -6.7 -17.59 -37.17c9.87,-5.08 19.86,-5.18 34.2,2.92 2.62,2.3 4.59,4.8 5.55,6.82l31.03 65.66z"/>
  <path fill="url(#lg1)" d="M0 80.6l16.55 0c12.15,0 21.29,-5.79 26.07,-15.89l5.96 -12.67 -7.09 0 1.4 -2.97 10.24 -6.7 11.88 -25.24c2.42,-5.15 7.76,-9.66 14.42,-9.01 -10.24,-9.37 -23.53,-9.25 -31.91,-6.48 -7.37,2.44 -14.25,8.12 -16.66,13.3l-30.86 65.66z"/>
</svg>`

const COUNTRY_CODES = [
  { code: '+359', country: 'Bulgaria' },
  { code: '+1', country: 'USA' },
  { code: '+44', country: 'UK' },
  { code: '+49', country: 'Germany' },
  { code: '+971', country: 'UAE' },
  { code: '+91', country: 'India' },
  { code: '+86', country: 'China' },
  { code: '+33', country: 'France' },
  { code: '+39', country: 'Italy' },
  { code: '+34', country: 'Spain' },
  { code: '+81', country: 'Japan' },
]

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [isEmailForm, setIsEmailForm] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phoneCode, setPhoneCode] = useState('+359')
  const [phoneNumber, setPhoneNumber] = useState('')

  if (!isOpen) return null

  const childVariants = [0.08, 0.14, 0.2, 0.26, 0.32, 0.38, 0.44, 0.5, 0.56]

  return (
    <>
      {/* Backdrop Overlay with Flexbox Centering */}
      <div
        className="fixed inset-0 z-40 flex items-center justify-center p-4 md:p-0"
        style={{
          background: 'rgba(12, 14, 40, 0.75)',
          backdropFilter: 'blur(8px)',
          animation: 'fadeIn 0.3s ease forwards',
          padding: '16px',
        }}
        onClick={onClose}
      >
        {/* Decorative background gradients */}
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(62,91,164,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212,160,74,0.05) 0%, transparent 70%)',
          }}
        />

        {/* Modal Card */}
        <div
          className="relative z-50 w-full max-w-[420px] md:max-w-[480px]"
          onClick={(e) => e.stopPropagation()}
          style={{
            maxHeight: 'calc(100vh - 32px)',
            overflowY: 'auto',
            boxSizing: 'border-box',
          }}
        >
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.97);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          @keyframes childFadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .modal-content {
            animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .stagger-child {
            animation: childFadeIn 0.4s ease forwards;
            opacity: 0;
          }
          
          /* Mobile responsive styles */
          @media (max-width: 480px) {
            .overlay {
              padding: 16px;
            }
            .modal-card {
              width: 100%;
              max-width: none;
              margin: 0;
              border-radius: 16px;
              padding: 24px;
              position: relative;
              box-sizing: border-box;
              max-height: calc(100vh - 32px);
              overflow-y: auto;
            }
            .modal-logo svg {
              max-width: 160px;
              height: auto;
            }
            .social-btn,
            .signin-form input,
            .signin-form button,
            .submit-btn {
              width: 100%;
              box-sizing: border-box;
            }
          }
          
          @media (max-width: 360px) {
            .overlay {
              padding: 12px;
            }
            .modal-card {
              padding: 20px;
              max-height: calc(100vh - 24px);
            }
            .modal-logo svg {
              max-width: 140px;
            }
          }
        `}</style>

        <div
          className="relative rounded-[20px] p-[30px] md:p-8 overflow-hidden modal-content modal-card"
          style={{
            background: '#1D215E',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxSizing: 'border-box',
          }}
        >
          {/* Decorative top line */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(212,160,74,0.3), transparent)',
            }}
          />

          {/* Decorative glow */}
          <div
            className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(212,160,74,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)'
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            <X size={14} color="rgba(255,255,255,0.55)" />
          </button>

          {/* Content */}
          <div className="relative z-10 space-y-0">
            {/* Logo */}
            <div className="stagger-child text-center mb-7 modal-logo" style={{ animationDelay: childVariants[0] + 's' }}>
              <div
                dangerouslySetInnerHTML={{ __html: AIRPORTEO_LOGO }}
                className="inline-block"
                style={{
                  maxWidth: '180px',
                  height: 'auto',
                }}
              />
            </div>

            {/* Heading */}
            <h1
              className="stagger-child text-center mb-2"
              style={{
                fontSize: '24px',
                fontWeight: '700',
                fontFamily: 'var(--font-playfair)',
                letterSpacing: '0.3px',
                color: '#ffffff',
                animationDelay: childVariants[1] + 's',
              }}
            >
              Welcome to Sign In
            </h1>

            {/* Subtext */}
            <p
              className="stagger-child text-center mb-7"
              style={{
                fontSize: '13px',
                fontWeight: '400',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: '1.5',
                animationDelay: childVariants[2] + 's',
              }}
            >
            </p>

            {/* Social Buttons */}
            <div className="stagger-child space-y-2.5 mb-6" style={{ animationDelay: childVariants[3] + 's' }}>
              <button
                className="social-btn w-full h-[46px] rounded-[8px] flex items-center justify-center gap-3 transition-all"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.2px',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="14" fontWeight="700" fill="#4285F4">G</text>
                </svg>
                Continue with Google
              </button>

              <button
                className="w-full h-[46px] rounded-[8px] flex items-center justify-center gap-3 transition-all"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.2px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)'
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M17 8a7 7 0 1 1-14 0m14 0a7 7 0 1 1-14 0" />
                </svg>
                Continue with Apple
              </button>
            </div>

            {/* Divider */}
            <div
              className="stagger-child flex items-center gap-4 mb-6"
              style={{
                animationDelay: childVariants[4] + 's',
              }}
            >
              <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', flex: 1 }} />
              <span style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
                or sign in with email
              </span>
              <div style={{ height: '1px', background: 'rgba(255, 255, 255, 0.1)', flex: 1 }} />
            </div>

            {/* Email/Password Form or Phone Form */}
                {isEmailForm ? (
                  <>
                    {/* Email Field */}
                    <div className="stagger-child mb-4 signin-form" style={{ animationDelay: childVariants[5] + 's' }}>
                  <label style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                      className="w-full h-[46px] rounded-[8px] px-4 pr-12 transition-all"
                      style={{
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'transparent',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(212, 160, 74, 0.5)'
                      e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 74, 0.15)'
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.target.style.boxShadow = 'none'
                    }}
                    onMouseEnter={(e) => {
                      if (document.activeElement !== e.target) {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (document.activeElement !== e.target) {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                  />
                </div>

                {/* Password Field */}
                <div className="stagger-child mb-3" style={{ animationDelay: childVariants[6] + 's' }}>
                  <label style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '8px' }}>
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      className="w-full h-[46px] rounded-[8px] px-4 pr-12 transition-all"
                      style={{
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'transparent',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(212, 160, 74, 0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 74, 0.15)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                        e.target.style.boxShadow = 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (document.activeElement !== e.target) {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (document.activeElement !== e.target) {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center transition-colors"
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
                      }}
                    >
                      {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div
                  className="stagger-child flex items-center justify-between mt-2 mb-4"
                  style={{
                    animationDelay: childVariants[7] + 's',
                    marginTop: '-4px',
                  }}
                >
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-[18px] h-[18px] rounded"
                      style={{
                        background: rememberMe ? '#d4a04a' : 'transparent',
                        border: `1px solid ${rememberMe ? '#d4a04a' : 'rgba(255, 255, 255, 0.1)'}`,
                        cursor: 'pointer',
                        accentColor: '#d4a04a',
                      }}
                    />
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#d4a04a',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e8b65e'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#d4a04a'
                    }}
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Sign In Button */}
                <button
                  className="stagger-child submit-btn w-full h-[48px] rounded-[8px] font-semibold transition-all mt-1"
                  style={{
                    background: 'linear-gradient(135deg, #d4a04a, #c08a30)',
                    color: '#1D215E',
                    fontSize: '15px',
                    fontWeight: '600',
                    letterSpacing: '0.3px',
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    animationDelay: childVariants[8] + 's',
                    boxShadow: '0 2px 8px rgba(212, 160, 74, 0.2)',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(212,160,74,0.35)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 160, 74, 0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <span style={{ position: 'relative', zIndex: 1 }}>Sign In</span>
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                    className="shine-overlay"
                  />
                </button>
              </>
            ) : (
              <>
                {/* Phone Field */}
                <div className="stagger-child mb-4 signin-form" style={{ animationDelay: childVariants[5] + 's' }}>
                  <label style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '8px' }}>
                    Phone Number
                  </label>
                  <div className="flex gap-3">
                    <select
                      value={phoneCode}
                      onChange={(e) => setPhoneCode(e.target.value)}
                      className="h-[46px] rounded-[8px] px-3 transition-all"
                      style={{
                        width: '90px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'transparent',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(212, 160, 74, 0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 74, 0.15)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                        e.target.style.boxShadow = 'none'
                      }}
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code} value={c.code} style={{ background: '#1D215E', color: '#ffffff' }}>
                          {c.code}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      placeholder="123 456 7890"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 h-[46px] rounded-[8px] px-4 transition-all"
                      style={{
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'transparent',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgba(212, 160, 74, 0.5)'
                        e.target.style.boxShadow = '0 0 0 3px rgba(212, 160, 74, 0.15)'
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                        e.target.style.boxShadow = 'none'
                      }}
                    />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginTop: '8px' }}>
                    We&apos;ll send you a one-time verification code via SMS.
                  </p>
                </div>

                {/* Send Code Button */}
                <button
                  className="stagger-child submit-btn w-full h-[48px] rounded-[8px] font-semibold transition-all mt-4"
                  style={{
                    background: 'linear-gradient(135deg, #d4a04a, #c08a30)',
                    color: '#1D215E',
                    fontSize: '15px',
                    fontWeight: '600',
                    letterSpacing: '0.3px',
                    border: 'none',
                    animationDelay: childVariants[6] + 's',
                    boxShadow: '0 2px 8px rgba(212, 160, 74, 0.2)',
                    boxSizing: 'border-box',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(212,160,74,0.35)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(212, 160, 74, 0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  Send Code
                </button>
              </>
            )}

            {/* Toggle Method Link */}
            <button
              onClick={() => setIsEmailForm(!isEmailForm)}
              className="stagger-child w-full mt-1 py-2 text-center flex items-center justify-center gap-2 transition-colors"
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.55)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                animationDelay: (isEmailForm ? childVariants[8] : childVariants[7]) + 's',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#d4a04a'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)'
              }}
            >
              {isEmailForm ? (
                <>
                  <Phone size={14} />
                  Sign in with phone instead
                </>
              ) : (
                <>
                  <EnvelopeSimple size={14} />
                  Sign in with email instead
                </>
              )}
            </button>

            {/* Footer */}
            <div
              className="stagger-child pt-5 mt-6 text-center border-t border-[rgba(255,255,255,0.1)]"
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.55)',
                animationDelay: (isEmailForm ? 'calc(' + childVariants[8] + 's + 0.06s)' : 'calc(' + childVariants[7] + 's + 0.06s)'),
              }}
            >
              Don&apos;t have an account?{' '}
              <a
                href="#"
                style={{
                  color: '#d4a04a',
                  fontWeight: '600',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e8b65e'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#d4a04a'
                }}
              >
                Create one
              </a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}
