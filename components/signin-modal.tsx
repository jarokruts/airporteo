'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { X, Eye, EyeSlash, Phone, EnvelopeSimple } from '@phosphor-icons/react'
import { createClient } from '@/lib/supabase/client'

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
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      if (data.session) {
        // Sign in successful, redirect to account page
        onClose()
        router.push('/account')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
      setLoading(false)
    }
  }

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
                  onClick={handleEmailSignIn}
                  disabled={loading}
                  className="stagger-child submit-btn w-full h-[48px] rounded-[8px] font-semibold transition-all mt-1"
                  style={{
                    background: loading ? 'rgba(212, 160, 74, 0.5)' : 'linear-gradient(135deg, #d4a04a, #c08a30)',
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
                    cursor: loading ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(212, 160, 74, 0.3)'
                      ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(212, 160, 74, 0.2)'
                      ;(e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'
                    }
                  }}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>

                {/* Error Message */}
                {error && (
                  <div
                    className="stagger-child mt-3 p-3 rounded-[8px] text-center"
                    style={{
                      background: 'rgba(220, 38, 38, 0.1)',
                      color: '#dc2626',
                      fontSize: '13px',
                      fontWeight: 500,
                      animationDelay: childVariants[9] + 's',
                    }}
                  >
                    {error}
                  </div>
                )}
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
