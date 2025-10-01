import Topbar from '@/components/Topbar'

export default function Home() {
  return (
    <>
      <Topbar />
      <main className="container" style={{ padding: '40px 0' }}>
        <h1>Portal Paranhos PR</h1>
        <p>Transparência, gestão e dados abertos.</p>
        <a href="/admin/login">Área Administrativa</a>
      </main>
    </>
  )
}
