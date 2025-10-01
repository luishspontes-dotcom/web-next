'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = useState('admin@paranhospr.com.br')
  const [password, setPassword] = useState('admin123')
  const r = useRouter()
  async function submit(e: any) {
    e.preventDefault()
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
      callbackUrl: '/admin/dashboard',
    })
    if (res?.ok) r.push('/admin/dashboard')
    else alert('Credenciais inválidas')
  }
  return (
    <main style={{ display: 'grid', placeItems: 'center', minHeight: '100vh' }}>
      <form onSubmit={submit} style={{ width: 300 }}>
        <h1>Login Admin</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />
        <button style={{ width: '100%' }}>Entrar</button>
      </form>
    </main>
  )
}
