import { categories, locations, providers, rankProvider } from "@/src/lib/asistan-domain";

const sortedProviders = [...providers].sort((a, b) => rankProvider(b) - rankProvider(a));

const providerAppointments = [
  { time: "09:30", person: "Ali Yılmaz", service: "Dermatoloji kontrol", status: "Onaylı" },
  { time: "11:00", person: "Ayşe Demir", service: "Online görüşme", status: "Bekliyor" },
  { time: "15:30", person: "Boş slot", service: "Bekleme listesi uygun", status: "AI öneri" },
];

const pricing = [
  { plan: "Free", price: "₺0", text: "Sınırlı randevu, temel profil ve temel takvim." },
  { plan: "Pro", price: "₺1.490", text: "Sınırsız randevu, yorumlar, bildirimler, sekreter hesabı." },
  { plan: "Clinic", price: "₺4.900", text: "Çoklu sağlayıcı, personel rolleri, gelişmiş onay akışları." },
  { plan: "Enterprise", price: "Özel", text: "API erişimi, çoklu şube, özel destek ve kurumsal raporlama." },
];

export default function Home() {
  return (
    <main className="shell">
      <header className="topbar">
        <a className="brand" href="#hero" aria-label="ASISTAN ana sayfa">
          <span className="mark">A</span>
          <span>asistan</span>
        </a>
        <nav className="nav" aria-label="Ana navigasyon">
          <a href="#customer">Mobil uygulama</a>
          <a href="#provider">Provider paneli</a>
          <a href="#architecture">Mimari</a>
          <a href="#pricing">Paketler</a>
        </nav>
        <a className="cta" href="#mvp">MVP&apos;yi incele</a>
      </header>

      <section className="hero" id="hero">
        <div>
          <span className="kicker">KKTC öncelikli • Türkçe • AI-ready işletim platformu</span>
          <h1>İhtiyacınız olan uzmanı bulun, müsait saatini görün, hemen randevu alın.</h1>
          <p className="lead">
            ASISTAN; müşteri mobil pazar yeri, provider web SaaS paneli ve provider mobil companion deneyimini birbirine karıştırmadan tasarlanmış profesyonel hizmet işletim sistemidir.
          </p>
          <div className="hero-actions">
            <a className="cta" href="#customer">Müşteri akışını gör</a>
            <a className="cta secondary" href="#provider">Provider paneli</a>
          </div>
          <div className="trust-row">
            <span>Canlı müsaitlik</span>
            <span>Doğrulanmış yorum</span>
            <span>Rol bazlı izin</span>
            <span>FCM bildirim mimarisi</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="ASISTAN müşteri mobil ve provider web önizlemesi">
          <div className="dashboard-card">
            <strong>Provider Web Dashboard</strong>
            <p>Randevu, takvim, sekreter önerileri, yorumlar ve AI içgörüleri tek premium panelde.</p>
            <div className="dashboard-grid">
              <div className="metric"><strong>12</strong><span>Bugünkü randevu</span></div>
              <div className="metric"><strong>4</strong><span>Onay bekleyen</span></div>
              <div className="metric"><strong>%82</strong><span>Takvim doluluğu</span></div>
              <div className="metric"><strong>4.9</strong><span>Ortalama puan</span></div>
            </div>
            <div style={{ marginTop: 18 }}>
              {providerAppointments.map((item) => (
                <div className="calendar-row" key={item.time}>
                  <span className="pill">{item.time}</span>
                  <span>{item.person}<br /><small>{item.service} • {item.status}</small></span>
                </div>
              ))}
            </div>
          </div>

          <div className="phone">
            <div className="phone-screen">
              <div className="mobile-header">
                <div className="location"><span>📍 Lefkoşa</span><span>🔔</span></div>
                <input className="search" aria-label="Hizmet arama" placeholder="Hangi hizmete ihtiyacınız var?" />
              </div>
              <div className="mobile-content">
                <div className="chips">
                  {['Bugün müsait', 'En yakın', 'En yüksek puanlı', 'Online görüşme'].map((chip) => <span className="chip" key={chip}>{chip}</span>)}
                </div>
                <div className="categories">
                  {categories.slice(0, 9).map((category) => (
                    <div className="category" key={category.name}><b>{category.icon}</b>{category.name}</div>
                  ))}
                </div>
                {sortedProviders.map((provider) => (
                  <article className="provider-card" key={provider.id}>
                    <div className="provider-main">
                      <div className="avatar">{provider.name.split(' ').at(-1)?.charAt(0)}</div>
                      <div>
                        <h3>{provider.name} {provider.verified ? '✓' : ''}</h3>
                        <div className="meta">{provider.title} • ⭐ {provider.rating} ({provider.reviewCount})<br />{provider.location} • {provider.distanceKm} km • {provider.online ? 'Online' : 'Yüz yüze'}</div>
                      </div>
                    </div>
                    <div className="slot-row">
                      <span className="slot">En erken: {provider.nextAvailable}</span>
                      <button className="book">Randevu Al</button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="mvp">
        <div className="section-heading">
          <h2>Audit sonucu: depo boştu; ASISTAN için MVP omurgası kuruldu.</h2>
          <p>Mevcut projede sadece README vardı. Bu çalışma ürün mimarisi, veritabanı şeması, API sözleşmeleri ve Phase 1 demo UX temelini ekler.</p>
        </div>
        <div className="grid-3">
          <div className="feature"><span className="icon">01</span><h3>Customer marketplace</h3><p>Konum, kategori, uzmanlık, filtreler, provider kartları, canlı slotlar ve kısa booking akışı mobil öncelikli tasarlandı.</p></div>
          <div className="feature"><span className="icon">02</span><h3>Provider SaaS</h3><p>Takvim, randevu onayları, sekreter önerileri, yorumlar, bildirimler, analitik ve profil yönetimi web panelinde ayrıştırıldı.</p></div>
          <div className="feature"><span className="icon">03</span><h3>Admin & trust</h3><p>Provider doğrulama, kategori/uzmanlık yönetimi, doğrulanmış yorum ve audit log gereksinimleri veri modeline işlendi.</p></div>
        </div>
      </section>

      <section className="section" id="customer">
        <div className="section-heading"><h2>Müşteri mobil uygulaması: yemek teslimatı hissinde randevu pazaryeri.</h2><p>Home → kategori → uzmanlık → provider listesi → profil → canlı müsaitlik → randevu → bildirim → yorum.</p></div>
        <div className="experience-grid">
          <div className="surface">
            <h3>Lokasyon ve ihtiyaç</h3>
            <div className="list">{locations.slice(0, 4).map((item) => <div className="item" key={item}>📍 {item}</div>)}</div>
          </div>
          <div className="surface">
            <h3>Kategori → uzmanlık</h3>
            <div className="list">{categories.slice(0, 5).map((category) => <div className="item" key={category.name}><strong>{category.icon} {category.name}</strong><br /><small>{category.specialties.slice(0, 4).join(' • ')}</small></div>)}</div>
          </div>
          <div className="surface navy">
            <h3>Booking sonucu</h3>
            <div className="list">
              <div className="item">✅ Randevu talebiniz alındı</div>
              <div className="item">🗓️ 15 Mayıs, 15:30</div>
              <div className="item">🔔 24 saat ve 2 saat önce hatırlatma</div>
              <div className="item">⭐ Tamamlandıktan 1 saat sonra yorum isteği</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="provider">
        <div className="section-heading"><h2>Provider web dashboard: işletmenizi yöneten akıllı asistan.</h2><p>Web ana yönetim alanıdır; provider mobil companion sadece acil onay ve günlük ajanda içindir.</p></div>
        <table className="table" aria-label="Provider dashboard bölümleri">
          <thead><tr><th>Bölüm</th><th>Phase 1 kapsamı</th><th>Durum</th></tr></thead>
          <tbody>
            <tr><td>Overview</td><td>Bugünkü randevular, bekleyen talepler, doluluk, AI içgörüleri</td><td><span className="status">Tasarlı</span></td></tr>
            <tr><td>Calendar</td><td>Çalışma saatleri, bloklar, onay/red, çakışma önleme</td><td><span className="status blue">Şemalı</span></td></tr>
            <tr><td>Secretary Suggestions</td><td>Öneri kaydı, master approval, audit log</td><td><span className="status warn">Phase 2</span></td></tr>
            <tr><td>Reviews</td><td>Doğrulanmış yorum, provider reply, moderation</td><td><span className="status warn">Phase 3</span></td></tr>
          </tbody>
        </table>
      </section>

      <section className="section" id="architecture">
        <div className="section-heading"><h2>Scalable mimari: PostgreSQL + Prisma + Next.js API boundary.</h2><p>Bu repo ilk MVP için Next.js web ve API kontratlarını içerir; mobile client aynı API sözleşmelerini tüketir.</p></div>
        <div className="grid-3">
          <div className="api-card"><h3>Marketplace API</h3><p><code>GET /api/marketplace/providers</code> provider filtreleme, sıralama ve canlı slot özetini döndürür.</p></div>
          <div className="api-card"><h3>Booking API</h3><p><code>POST /api/appointments</code> timezone-safe randevu talebi, audit event ve bildirim tetikleyicisi üretir.</p></div>
          <div className="api-card"><h3>Provider/Admin API</h3><p><code>/api/provider/*</code> ve <code>/api/admin/*</code> provider yönetimi ve doğrulama sınırlarını ayırır.</p></div>
        </div>
      </section>

      <section className="section" id="pricing">
        <div className="section-heading"><h2>Feature-gated abonelik mimarisi.</h2><p>Free, Pro, Clinic ve Enterprise planları limit/özellik tablosuyla veritabanında modellenir.</p></div>
        <div className="pricing">{pricing.map((item) => <div className={`price-card ${item.plan === 'Pro' ? 'featured' : ''}`} key={item.plan}><h3>{item.plan}</h3><div className="price">{item.price}</div><p>{item.text}</p><a className="cta secondary" href="#hero">Talep oluştur</a></div>)}</div>
      </section>

      <section className="final">
        <span className="kicker">ASISTAN Phase 1</span>
        <h2 style={{ color: 'white', marginTop: 16 }}>Doğru ayrılmış üç deneyim, tek güvenilir randevu işletim sistemi.</h2>
        <p style={{ color: 'rgba(255,255,255,.76)', maxWidth: 780 }}>Müşteri mobil pazaryeri, provider web SaaS paneli ve provider mobil companion mimarisi; canlı müsaitlik, doğrulanmış yorumlar, rol bazlı izinler ve AI-ready içgörü sistemiyle büyümeye hazır.</p>
      </section>

      <footer className="footer">© 2026 ASISTAN • asistan.com.tr • asistan.online • asistan.health</footer>
    </main>
  );
}
