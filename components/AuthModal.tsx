'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

type Profile = { name: string; avatar: string }

export function AuthModal() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [profile, setProfile] = useState<Profile | null>(null)

  const continueWithGoogle = () => {
    setProfile({ name: 'Aarav Singh', avatar: '🧑🏽‍💼' })
    setOpen(false)
  }

  const tryDemo = () => {
    setProfile({ name: 'Demo User', avatar: '🛡️' })
    setOpen(false)
    router.push('/')
  }

  if (profile) {
    return <button className="ghost-btn" type="button">{profile.avatar} {profile.name}</button>
  }

  return (
    <>
      <button className="primary-btn" type="button" onClick={() => setOpen(true)}>Login</button>
      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)} role="presentation">
          <div className="modal" role="dialog" aria-modal="true" aria-label="Login modal" onClick={(event) => event.stopPropagation()}>
            <h3>Welcome to DhanRakshak</h3>
            <p>Continue with Google or try the demo account.</p>
            <button className="primary-btn" type="button" onClick={continueWithGoogle}>Continue with Google</button>
            <button className="ghost-btn" type="button" onClick={tryDemo}>Try Demo Account</button>
            <small>demo@dhanrakshak.com / demo123</small>
          </div>
        </div>
      )}
    </>
  )
}
