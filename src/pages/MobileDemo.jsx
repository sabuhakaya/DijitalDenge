import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronLeft, ChevronRight, Wifi, Battery, Signal, Play, Download } from 'lucide-react'

const SCREENS = [
  {
    id: 'home',
    title: 'Ana Ekran',
    description: 'Çocuğunuzun günlük özeti ve hızlı erişim menüsü',
    content: (
      <div className="p-4 bg-gradient-to-b from-emerald-50 to-white h-full">
        {/* Greeting */}
        <div className="mb-5">
          <p className="text-xs text-gray-500">Günaydın 👋</p>
          <h2 className="text-lg font-black font-display text-gray-900">Efe'nin Paneli</h2>
        </div>

        {/* Daily Summary Card */}
        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl p-4 text-white mb-4 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium opacity-80">Bugünkü Özet</span>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">12 Mayıs</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-xl font-black">32</p>
              <p className="text-[10px] opacity-80">dk ekran</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black">2</p>
              <p className="text-[10px] opacity-80">oyun</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-black">%85</p>
              <p className="text-[10px] opacity-80">skor</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <p className="text-xs font-semibold text-gray-500 mb-2">Hızlı Erişim</p>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {[
            { emoji: '🎮', label: 'Oyunlar', color: 'bg-amber-50 border-amber-200' },
            { emoji: '📋', label: 'Değerlendirme', color: 'bg-blue-50 border-blue-200' },
            { emoji: '📊', label: 'Raporlar', color: 'bg-purple-50 border-purple-200' },
            { emoji: '⏰', label: 'Ekran Süresi', color: 'bg-red-50 border-red-200' },
          ].map((item) => (
            <div key={item.label} className={`${item.color} border rounded-xl p-3 flex items-center space-x-2`}>
              <span className="text-lg">{item.emoji}</span>
              <span className="text-xs font-semibold text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Risk Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center space-x-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-black">38</div>
          <div>
            <p className="text-xs font-bold text-green-800">Risk: Düşük</p>
            <p className="text-[10px] text-green-600">Genel gelişim durumu iyi</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'games',
    title: 'Oyunlar',
    description: 'Yaşa uygun gelişim destekleyici etkileşimli oyunlar',
    content: (
      <div className="p-4 bg-white h-full">
        <h2 className="text-lg font-black font-display text-gray-900 mb-1">Oyunlar 🎮</h2>
        <p className="text-xs text-gray-500 mb-4">Yaşa uygun gelişim oyunları</p>

        {/* Age Filter */}
        <div className="flex gap-2 mb-4">
          {['2-3', '3-4', '4-6'].map((age, i) => (
            <span key={age} className={`text-[10px] px-3 py-1.5 rounded-full font-semibold ${
              i === 1 ? 'bg-emerald-500 text-white' : 'bg-gray-100 text-gray-500'
            }`}>{age} yaş</span>
          ))}
        </div>

        {/* Game Cards */}
        <div className="space-y-3">
          {[
            { emoji: '🍎', name: 'Sürükle & Bırak', skills: 'Motor • Algı', color: 'from-red-50 to-orange-50', border: 'border-red-200' },
            { emoji: '🎨', name: 'Boyama', skills: 'Yaratıcılık • Motor', color: 'from-purple-50 to-pink-50', border: 'border-purple-200' },
            { emoji: '🔍', name: 'Farklı Olanı Bul', skills: 'Dikkat • Algı', color: 'from-blue-50 to-cyan-50', border: 'border-blue-200' },
            { emoji: '🃏', name: 'Hafıza Kartları', skills: 'Hafıza • Dikkat', color: 'from-green-50 to-emerald-50', border: 'border-green-200' },
            { emoji: '🔊', name: 'Ses Tanıma', skills: 'Dil • İşitsel', color: 'from-yellow-50 to-amber-50', border: 'border-yellow-200' },
          ].map((game) => (
            <div key={game.name} className={`bg-gradient-to-r ${game.color} border ${game.border} rounded-xl p-3 flex items-center space-x-3`}>
              <span className="text-2xl">{game.emoji}</span>
              <div className="flex-1">
                <p className="text-xs font-bold text-gray-800">{game.name}</p>
                <p className="text-[10px] text-gray-500">{game.skills}</p>
              </div>
              <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm">
                <Play className="w-3 h-3 text-emerald-600 ml-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'screen-time',
    title: 'Ekran Süresi',
    description: 'Günlük ve haftalık ekran kullanım takibi',
    content: (
      <div className="p-4 bg-white h-full">
        <h2 className="text-lg font-black font-display text-gray-900 mb-1">Ekran Süresi ⏰</h2>
        <p className="text-xs text-gray-500 mb-4">Bugünkü kullanım</p>

        {/* Circle Progress */}
        <div className="flex justify-center mb-5">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 120 120" className="w-full h-full transform -rotate-90">
              <circle cx="60" cy="60" r="50" fill="none" stroke="#E5E7EB" strokeWidth="8" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="#22C55E" strokeWidth="8"
                strokeDasharray={`${(45 / 60) * 314} 314`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black font-display text-gray-900">45</span>
              <span className="text-[10px] text-gray-500">/ 60 dk</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-lg font-black text-gray-900">15 dk</p>
            <p className="text-[10px] text-gray-500">Kalan süre</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 text-center">
            <p className="text-lg font-black text-gray-900">3</p>
            <p className="text-[10px] text-gray-500">Oturum</p>
          </div>
        </div>

        {/* Usage Breakdown */}
        <p className="text-xs font-semibold text-gray-500 mb-2">Uygulama Dağılımı</p>
        <div className="space-y-2">
          {[
            { name: 'Dijital Denge', time: '20 dk', pct: 44, color: 'bg-emerald-500' },
            { name: 'YouTube Kids', time: '15 dk', pct: 33, color: 'bg-red-500' },
            { name: 'Diğer', time: '10 dk', pct: 22, color: 'bg-gray-400' },
          ].map((app) => (
            <div key={app.name}>
              <div className="flex justify-between text-[10px] mb-1">
                <span className="font-medium text-gray-700">{app.name}</span>
                <span className="text-gray-500">{app.time}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className={`${app.color} h-1.5 rounded-full`} style={{ width: `${app.pct}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly mini bar chart */}
        <p className="text-xs font-semibold text-gray-500 mt-4 mb-2">Haftalık Trend</p>
        <div className="flex items-end justify-between gap-1 h-16">
          {[
            { day: 'Pzt', h: 45 }, { day: 'Sal', h: 70 }, { day: 'Çar', h: 35 },
            { day: 'Per', h: 55 }, { day: 'Cum', h: 90 }, { day: 'Cmt', h: 60 }, { day: 'Paz', h: 45 },
          ].map((d) => (
            <div key={d.day} className="flex flex-col items-center flex-1">
              <div
                className={`w-full rounded-t-md ${d.h > 60 ? 'bg-red-400' : 'bg-emerald-400'}`}
                style={{ height: `${(d.h / 100) * 100}%` }}
              ></div>
              <span className="text-[8px] text-gray-400 mt-1">{d.day}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'assessment',
    title: 'Değerlendirme',
    description: 'Bilimsel temelli ebeveyn değerlendirme formları',
    content: (
      <div className="p-4 bg-white h-full">
        <h2 className="text-lg font-black font-display text-gray-900 mb-1">Değerlendirme 📋</h2>
        <p className="text-xs text-gray-500 mb-4">Gelişim değerlendirme formu</p>

        {/* Progress */}
        <div className="bg-emerald-50 rounded-xl p-3 mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium text-emerald-800">İlerleme</span>
            <span className="font-bold text-emerald-600">3/5 bölüm</span>
          </div>
          <div className="w-full bg-emerald-200 rounded-full h-2">
            <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Sample Question */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-800 mb-3">
            Çocuğunuz günde ne kadar ekran kullanıyor?
          </p>
          <div className="space-y-2">
            {['30 dakikadan az', '30 dk - 1 saat', '1 - 2 saat', '2 saatten fazla'].map((opt, i) => (
              <div key={opt} className={`px-3 py-2.5 rounded-xl text-[11px] flex items-center ${
                i === 1
                  ? 'bg-emerald-50 border-2 border-emerald-400 text-emerald-800 font-medium'
                  : 'bg-gray-50 border-2 border-transparent text-gray-600'
              }`}>
                <div className={`w-4 h-4 rounded-full border-2 mr-2 flex items-center justify-center ${
                  i === 1 ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'
                }`}>
                  {i === 1 && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                </div>
                {opt}
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <p className="text-xs font-semibold text-gray-500 mb-2">Bölümler</p>
        <div className="space-y-2">
          {[
            { name: 'Çocuk Bilgileri', done: true },
            { name: 'Ekran Alışkanlıkları', done: true },
            { name: 'Dikkat ve Bilişsel', done: true },
            { name: 'Dil ve İletişim', active: true },
            { name: 'Sosyal Davranış', done: false },
          ].map((sec) => (
            <div key={sec.name} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-[11px] ${
              sec.active ? 'bg-emerald-50 border border-emerald-300 font-semibold text-emerald-800' :
              sec.done ? 'bg-gray-50 text-gray-500' : 'bg-gray-50 text-gray-400'
            }`}>
              <span>{sec.done ? '✅' : sec.active ? '✏️' : '⬜'}</span>
              <span>{sec.name}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'report',
    title: 'Rapor',
    description: 'Detaylı gelişim raporu ve uzman yönlendirmeleri',
    content: (
      <div className="p-4 bg-white h-full">
        <h2 className="text-lg font-black font-display text-gray-900 mb-1">Gelişim Raporu 📊</h2>
        <p className="text-xs text-gray-500 mb-4">Efe • 42 ay • 12 Mayıs 2026</p>

        {/* Risk Score */}
        <div className="flex items-center space-x-4 mb-4 bg-green-50 rounded-xl p-3">
          <div className="relative w-14 h-14">
            <svg viewBox="0 0 60 60" className="w-full h-full transform -rotate-90">
              <circle cx="30" cy="30" r="24" fill="none" stroke="#E5E7EB" strokeWidth="5" />
              <circle cx="30" cy="30" r="24" fill="none" stroke="#22C55E" strokeWidth="5"
                strokeDasharray={`${(62 / 100) * 150} 150`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-black text-gray-900">38</span>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold text-green-800">Risk: Orta-Düşük</p>
            <p className="text-[10px] text-green-600">Genel gelişim yaşa uygun</p>
          </div>
        </div>

        {/* Development Scores */}
        <p className="text-xs font-semibold text-gray-500 mb-2">Gelişim Alanları</p>
        <div className="space-y-2 mb-4">
          {[
            { area: 'Motor Beceri', score: 88, color: 'bg-green-500' },
            { area: 'Sosyal İletişim', score: 80, color: 'bg-green-500' },
            { area: 'Davranışsal', score: 75, color: 'bg-yellow-500' },
            { area: 'Dikkat', score: 72, color: 'bg-yellow-500' },
            { area: 'Bilişsel', score: 70, color: 'bg-yellow-500' },
            { area: 'Dil Gelişimi', score: 65, color: 'bg-orange-500' },
          ].map((item) => (
            <div key={item.area}>
              <div className="flex justify-between text-[10px] mb-0.5">
                <span className="text-gray-700">{item.area}</span>
                <span className="font-bold text-gray-900">%{item.score}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className={`${item.color} h-1.5 rounded-full`} style={{ width: `${item.score}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Referrals */}
        <p className="text-xs font-semibold text-gray-500 mb-2">Uzman Önerileri</p>
        <div className="space-y-2">
          {[
            { type: '🧠 Çocuk Psikoloğu', tag: 'Önerilen', tagColor: 'bg-purple-100 text-purple-700' },
            { type: '💬 Dil Terapisti', tag: 'Takip', tagColor: 'bg-blue-100 text-blue-700' },
          ].map((expert) => (
            <div key={expert.type} className="flex items-center justify-between bg-gray-50 rounded-xl p-2.5">
              <span className="text-[11px] font-medium text-gray-700">{expert.type}</span>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${expert.tagColor}`}>{expert.tag}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'notifications',
    title: 'Bildirimler',
    description: 'Akıllı hatırlatmalar ve gelişim bildirimleri',
    content: (
      <div className="p-4 bg-white h-full">
        <h2 className="text-lg font-black font-display text-gray-900 mb-1">Bildirimler 🔔</h2>
        <p className="text-xs text-gray-500 mb-4">Bugün • 3 yeni bildirim</p>

        <div className="space-y-3">
          {[
            { icon: '⏰', title: 'Ekran süresi limiti yaklaşıyor', desc: 'Efe bugün 45/60 dk kullandı. 15 dk kaldı.', time: '5 dk önce', isNew: true, color: 'bg-amber-50 border-amber-200' },
            { icon: '🎮', title: 'Yeni oyun eklendi!', desc: 'Hafıza Kartları oyunu artık kullanılabilir.', time: '1 saat önce', isNew: true, color: 'bg-emerald-50 border-emerald-200' },
            { icon: '📊', title: 'Haftalık rapor hazır', desc: 'Bu haftaki gelişim raporunuzu inceleyin.', time: '3 saat önce', isNew: true, color: 'bg-blue-50 border-blue-200' },
            { icon: '✅', title: 'Değerlendirme hatırlatması', desc: 'Aylık gelişim formunu doldurmayı unutmayın.', time: 'Dün', isNew: false, color: 'bg-gray-50 border-gray-200' },
            { icon: '🌙', title: 'İyi geceler!', desc: 'Ekranları kapatma zamanı. Yatmadan 1 saat önce ekran yok.', time: 'Dün', isNew: false, color: 'bg-gray-50 border-gray-200' },
            { icon: '🏆', title: 'Tebrikler!', desc: 'Efe dikkat oyununda yeni rekor kırdı: 120 puan!', time: '2 gün önce', isNew: false, color: 'bg-gray-50 border-gray-200' },
          ].map((notif, i) => (
            <div key={i} className={`${notif.color} border rounded-xl p-3 relative`}>
              {notif.isNew && <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></div>}
              <div className="flex items-start space-x-2">
                <span className="text-lg">{notif.icon}</span>
                <div className="flex-1">
                  <p className="text-[11px] font-bold text-gray-800">{notif.title}</p>
                  <p className="text-[10px] text-gray-600 mt-0.5">{notif.desc}</p>
                  <p className="text-[9px] text-gray-400 mt-1">{notif.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto" style={{ width: 280 }}>
      {/* Phone outer frame */}
      <div className="bg-gray-900 rounded-[2.5rem] p-3 shadow-2xl">
        {/* Status bar */}
        <div className="bg-black rounded-t-[2rem] px-6 pt-3 pb-2 flex items-center justify-between text-white text-[10px]">
          <span className="font-medium">09:41</span>
          <div className="absolute left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full top-5"></div>
          <div className="flex items-center space-x-1">
            <Signal className="w-3 h-3" />
            <Wifi className="w-3 h-3" />
            <Battery className="w-3 h-3" />
          </div>
        </div>
        {/* Screen content */}
        <div className="bg-white overflow-hidden" style={{ height: 520 }}>
          <div className="h-full overflow-y-auto">
            {children}
          </div>
        </div>
        {/* Bottom bar */}
        <div className="bg-black rounded-b-[2rem] h-5 flex items-center justify-center">
          <div className="w-24 h-1 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default function MobileDemo() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const screen = SCREENS[currentScreen]

  const prev = () => setCurrentScreen((currentScreen - 1 + SCREENS.length) % SCREENS.length)
  const next = () => setCurrentScreen((currentScreen + 1) % SCREENS.length)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white text-sm mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Ana Sayfaya Dön
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium mb-4">
            📱 Mobil Uygulama Önizleme
          </div>
          <h1 className="text-3xl lg:text-5xl font-black font-display text-white mb-4">
            Dijital Denge{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Mobil
            </span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            iOS ve Android için geliştirilen mobil uygulama ile çocuğunuzun gelişimini
            her an takip edin. Yakında App Store ve Google Play'de.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left - Screen info */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              {SCREENS.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setCurrentScreen(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    i === currentScreen
                      ? 'bg-emerald-500/20 border border-emerald-500/30'
                      : 'hover:bg-white/5'
                  }`}
                >
                  <h3 className={`text-sm font-bold ${i === currentScreen ? 'text-emerald-400' : 'text-gray-400'}`}>
                    {s.title}
                  </h3>
                  <p className={`text-xs mt-0.5 ${i === currentScreen ? 'text-gray-300' : 'text-gray-600'}`}>
                    {s.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Center - Phone */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full scale-75"></div>

              <div className="relative">
                <PhoneFrame>{screen.content}</PhoneFrame>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition hidden lg:flex"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition hidden lg:flex"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {SCREENS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentScreen(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentScreen ? 'w-6 bg-emerald-400' : 'w-2 bg-gray-600'
                  }`}
                />
              ))}
            </div>

            {/* Mobile nav */}
            <div className="flex justify-center gap-4 mt-4 lg:hidden">
              <button onClick={prev} className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm">← Önceki</button>
              <button onClick={next} className="px-4 py-2 bg-white/10 rounded-xl text-white text-sm">Sonraki →</button>
            </div>
          </div>

          {/* Right - Features */}
          <div className="order-3">
            <h3 className="text-lg font-bold font-display text-white mb-4">Uygulama Özellikleri</h3>
            <div className="space-y-3">
              {[
                { emoji: '🔔', title: 'Akıllı Bildirimler', desc: 'Ekran süresi limitleri ve hatırlatmalar' },
                { emoji: '📵', title: 'Otomatik Kilit', desc: 'Süre dolunca ekranı otomatik kilitle' },
                { emoji: '📊', title: 'Anlık Raporlar', desc: 'Günlük ve haftalık gelişim raporları' },
                { emoji: '🎮', title: 'Çevrimdışı Oyunlar', desc: 'İnternet olmadan da oynanabilir' },
                { emoji: '👨‍👩‍👦', title: 'Çoklu Profil', desc: 'Birden fazla çocuk için ayrı profiller' },
                { emoji: '🔒', title: 'Ebeveyn Kontrolü', desc: 'PIN korumalı ebeveyn paneli' },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition">
                  <span className="text-xl">{feature.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-white">{feature.title}</p>
                    <p className="text-xs text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-black font-display text-white mb-3">Yakında Cebinizde</h3>
            <p className="text-gray-400 text-sm mb-6">
              Mobil uygulama şu anda geliştirme aşamasındadır. Erken erişim için bekleme listesine katılın.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="flex items-center space-x-3 px-6 py-3 bg-white rounded-xl hover:bg-gray-100 transition">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="black"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Yakında</p>
                  <p className="text-sm font-bold text-gray-900">App Store</p>
                </div>
              </button>
              <button className="flex items-center space-x-3 px-6 py-3 bg-white rounded-xl hover:bg-gray-100 transition">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="black"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                <div className="text-left">
                  <p className="text-[10px] text-gray-500">Yakında</p>
                  <p className="text-sm font-bold text-gray-900">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
