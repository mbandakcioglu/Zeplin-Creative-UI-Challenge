
# 🎯 Zeplin Creative UI Challenge

Bu proje, Zeplin Creative UI Challenge kapsamında hazırlanmış bir frontend uygulamasıdır. Amaç; Zeplin üzerinden sağlanan tasarımları modern bir geliştirme altyapısı kullanarak, gerçek dünya senaryolarına uygun, temiz, sürdürülebilir ve ölçeklenebilir bir yapıya dönüştürmektir.

Çalışma boyunca:
	•	Tasarıma sadık kalınarak bileşen bazlı bir yapı kuruldu.
	•	Tekrar kullanılabilir Pug mixin’leri ve component’ler üretildi.
	•	Tailwind CSS ile okunabilir, sürdürülebilir ve responsive bir stil sistemi oluşturuldu.
	•	Gerçek müşteri teslimi senaryosu düşünülerek hem WordPress entegrasyonuna hem de statik HTML çıktısına uygun bir yapı hedeflendi.

Bu proje, sadece bir tasarım çevirisi değil; aynı zamanda gerçek hayatta karşılaşılabilecek build, deploy ve bakım süreçlerini de kapsayan bütüncül bir frontend çözümü olarak ele alındı.



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