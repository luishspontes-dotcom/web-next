export default function Topbar() {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        background: '#fff',
        borderBottom: '1px solid #e5e7eb',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: 60,
        }}
      >
        <div style={{ fontWeight: 900 }}>PARANHOS • PR</div>
        <nav style={{ display: 'flex', gap: 16 }}>
          <a href="/">Início</a>
          <a href="#bio">Bio</a>
          <a href="#noticias">Notícias</a>
          <a href="/admin/login">Admin</a>
        </nav>
      </div>
    </div>
  )
}
