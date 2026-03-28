'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { X, Eye, EyeSlash } from '@phosphor-icons/react'
import { createClient } from '@/lib/supabase/client'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

const AIRPORTEO_LOGO = `<svg viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" fill="none">
  <text x="0" y="45" font-size="48" font-weight="700" font-family="var(--font-playfair), serif" fill="#d4a04a" letter-spacing="2">
    AIRPORTEO
  </text>
</svg>`

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

              {/* Email Form */}
              {isEmailForm && (
                <>
                  {/* Email Input */}
                  <div className="stagger-child mb-4" style={{ animationDelay: childVariants[4] + 's' }}>
                    <label style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '8px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      style={{
                        width: '100%',
                        height: '40px',
                        paddingLeft: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        background: 'transparent',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    />
                  </div>

                  {/* Password Input */}
                  <div className="stagger-child mb-4" style={{ animationDelay: childVariants[5] + 's' }}>
                    <label style={{ fontSize: '12px', fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', display: 'block', marginBottom: '8px' }}>
                      Password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        style={{
                          width: '100%',
                          height: '40px',
                          paddingLeft: '12px',
                          paddingRight: '40px',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          borderRadius: '8px',
                          background: 'transparent',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                          e.currentTarget.style.background = 'transparent'
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '12px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '4px',
                        }}
                      >
                        {showPassword ? <EyeSlash size={16} color="rgba(255,255,255,0.35)" /> : <Eye size={16} color="rgba(255,255,255,0.35)" />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="stagger-child flex items-center justify-between mb-6" style={{ animationDelay: childVariants[6] + 's' }}>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        style={{ cursor: 'pointer', accentColor: '#d4a04a' }}
                      />
                      <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 500 }}>Remember me</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {}}
                      style={{
                        fontSize: '12px',
                        color: 'rgba(212, 160, 74, 0.8)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 500,
                      }}
                    >
                      Forgot password?
                    </button>
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
                      animationDelay: childVariants[7] + 's',
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
                        animationDelay: childVariants[8] + 's',
                      }}
                    >
                      {error}
                    </div>
                  )}

                  {/* Sign Up Link */}
                  <p className="stagger-child text-center mt-4" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', animationDelay: childVariants[8] + 's' }}>
                    Don&apos;t have an account?{' '}
                    <button
                      type="button"
                      onClick={() => setIsEmailForm(false)}
                      style={{
                        color: 'rgba(212, 160, 74, 0.9)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 600,
                        textDecoration: 'underline',
                      }}
                    >
                      Create one
                    </button>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
