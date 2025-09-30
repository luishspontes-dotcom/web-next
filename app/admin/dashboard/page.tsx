'use client'
import { useEffect,useState } from 'react'
export default function Dashboard(){
  const [d,setD]=useState<any>(null)
  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+'/admin/status').then(r=>r.json()).then(setD)
  },[])
  if(!d) return <main>Carregando…</main>
  return (
    <main style={{padding:24}}>
      <h1>Dashboard KPIs</h1>
      <p>Territórios: {d.data?.territorios}</p>
      <p>Municípios: {d.data?.municipios}</p>
      <p>Solicitações Natal: {d.data?.solicitacoes_natal}</p>
    </main>
  )
}
