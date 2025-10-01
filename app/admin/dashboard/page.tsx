'use client'

import { useEffect, useState } from 'react'

export default function Dashboard() {
  const [d, setD] = useState<any>(null)
  useEffect(() => {
    fetch((process.env.NEXT_PUBLIC_API_URL || '') + '/admin/status')
      .then((r) => r.json())
      .then(setD)
  }, [])
  if (!d) return <main style={{ padding: 24 }}>Carregando…</main>
  const x = d.data || {}
  return (
    <main style={{ padding: 24 }}>
      <h1>KPIs</h1>
      <div>Territórios: {x.territorios ?? '--'}</div>
      <div>Municípios: {x.municipios ?? '--'}</div>
      <div>Solicitações Natal: {x.solicitacoes_natal ?? '--'}</div>
    </main>
  )
}
