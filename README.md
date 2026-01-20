# Vite + Pug + Tailwind 4 Ön Yüz Başlangıç Kiti

Kaynak: https://github.com/danyalll1/Vite-Pug-boilerplate/tree/main

Vite 7, Vituum (Pug yönlendirme), Tailwind CSS 4 ve üretim sonrası (postbuild) optimizasyon adımlarıyla çoklu sayfa (MPA) bir ön yüz geliştirme ortamı. İsteğe bağlı WordPress moduyla tema klasör yapısına uygun asset çıktısı üretir.

## Özellikler
- **Vite geliştirme sunucusu** ve Vituum `pages` eklentisi ile `src/pug/pages` altında çoklu sayfa desteği.
- **Tailwind CSS 4** (`@tailwindcss/postcss`) ve `src/styles/app.css` içinde tema değişkenleri.
- **Görsel optimizasyonu**: `@vheemstra/vite-plugin-imagemin` ile JPG/PNG sıkıştırma ve WebP üretimi.
- **Postbuild adımı**: `dist/` içindeki HTML’leri klasör bazlı temiz URL’lere dönüştürür ve görsel referanslarını WebP’ye çevirir.
- **WordPress modu**: `vite.config.js` içindeki ayara göre asset’leri `/wp-content/themes/<projectName>/assets/...` altına konumlandırır.

## Gereksinimler
- Node.js 18+
- npm

## Kurulum ve Çalıştırma
- **Bağımlılıkları yükle**
```bash
npm install
```

- **Geliştirme sunucusu** (http://localhost:8000)
```bash
npm run dev
```

- **Üretim derlemesi** (postbuild adımı dahil)
```bash
npm run build
```

## Proje Yapısı
- `src/pug/layouts/layout.pug` — temel layout; `/src/styles/app.css` ve `/src/scripts/app.js` dahil edilir.
- `src/pug/pages/**` — sayfa girişleri; `block variables` ile meta/veri tanımlayıp layout’u extend edin.
- `src/pug/includes | components | mixins` — ortak parçalar.
- `src/scripts/app.js` — JS giriş noktası; component modüllerini import eder.
- `src/styles/app.css` — Tailwind ve global stiller; alt klasörlerde component/sayfa bazlı CSS.
- Pug içinde asset yollarını `/src/...` olarak kullanın (örn. `/src/assets`, `/src/images`).

## Klasör Yapısı (Özet)
```
.
├─ dist/                          # Üretim çıktıları (build sonrası oluşur)
├─ src/
│  ├─ images/                     # Görseller
│  ├─ pug/
│  │  ├─ layouts/                # Ana layout(lar)
│  │  ├─ includes/               # Head, header, footer vb.
│  │  ├─ components/             # Pug componentleri
│  │  ├─ pages/                  # Sayfa girişleri (MPA)
│  │  └─ ui/                     # UI parçacıkları
│  ├─ scripts/
│  │  ├─ app.js                  # JS giriş noktası
│  │  ├─ components/             # JS componentleri
│  │  └─ test.js                 # Örnek/yardımcı script
│  └─ styles/
│     ├─ app.css                 # Tailwind + proje stilleri
│     ├─ global.css              # Global yardımcı sınıflar
│     └─ components/             # Bileşen bazlı CSS
├─ postbuild.js                   # Build sonrası URL/WEBP düzenlemeleri
├─ tailwind.config.js             # Tailwind konfigürasyonu
├─ vite.config.js                 # Vite + eklentiler + WP modu
├─ package.json                   # Komutlar ve bağımlılıklar
└─ README.md
```

## Terminal Komutları (Özet)
- **Bağımlılıkları yükle**
```bash
npm install
```

- **Geliştirme sunucusu** (http://localhost:8000)
```bash
npm run dev
```

- **Önizleme** (build edilmiş içeriği yerel sunucuda)
```bash
npm run preview
```

- **Üretim derlemesi** (postbuild adımı dahil)
```bash
npm run build
```