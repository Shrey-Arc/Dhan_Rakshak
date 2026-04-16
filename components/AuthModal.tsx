'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { api, AuthUser } from '@/lib/api'

export function AuthModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [profile, setProfile] = useState<AuthUser | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('dhan-user')
    if (saved) {
      setProfile(JSON.parse(saved) as AuthUser)
    }
  }, [])

  const submit = async () => {
    setError('')
    setLoading(true)
    try {
      if (mode === 'signup') {
        const created = await api.signup({ name, email, password })
        setProfile(created)
        localStorage.setItem('dhan-user', JSON.stringify(created))
      } else {
        const loggedIn = await api.login({ email, password })
        setProfile(loggedIn.user)
        localStorage.setItem('dhan-user', JSON.stringify(loggedIn.user))
      }
      setOpen(false)
      setPassword('')
      router.refresh()
    } catch {
      setError('Authentication failed. Please verify details and try again.')
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('dhan-user')
    setProfile(null)
    setName('')
    setEmail('')
    setPassword('')
  }

  if (profile) {
    return <button className="ghost-btn" type="button" onClick={logout}>👤 {profile.name} (Logout)</button>
  }

  return (
    <>
      <button className="primary-btn" type="button" onClick={() => setOpen(true)}>Login</button>
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)} role="presentation">
          <div className="modal" role="dialog" aria-modal="true" aria-label="Login modal" onClick={(event) => event.stopPropagation()}>
            <h3>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h3>
            {mode === 'signup' && (
              <input placeholder="Full name" value={name} onChange={(event) => setName(event.target.value)} />
            )}
            <input placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            {error && <small>{error}</small>}
            <button className="primary-btn" type="button" onClick={() => void submit()} disabled={loading}>
              {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Sign up'}
            </button>
            <button className="ghost-btn" type="button" onClick={() => setMode((prev) => prev === 'login' ? 'signup' : 'login')}>
              {mode === 'login' ? 'Need an account? Sign up' : 'Already have an account? Login'}
            </button>
            <small>Protected auth with secure backend token flow.</small>
          </div>
        </div>
      )}
    </>
  )
}
