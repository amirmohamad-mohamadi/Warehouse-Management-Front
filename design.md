src/
├── assets/ ← تصاویر، آیکون‌ها، فونت‌ها
│ └── logo.svg
│
├── components/ ← کامپوننت‌های عمومی و قابل استفاده مجدد
│ ├── Button/
│ │ ├── Button.tsx
│ │ ├── Button.types.ts
│ │ ├── Button.test.tsx
│ │ └── index.ts
│ ├── Modal/
│ ├── Table/
│ └── Input/
│
├── features/ ← هر بخش از پروژه به صورت ماژولار
│ ├── categories/
│ │
│ │ ├── pages/
│ │ │ └── CategoriesPage.tsx
│ │ ├── api.ts ← ارتباط با بک‌اند
│ │ ├── store.ts ← وضعیت محلی مربوط به دسته‌ها
│ │ ├── types.ts ← تایپ‌های مربوط به دسته‌ها
│ │ └── index.ts ← ورود مرکزی برای این فیچر
│
├── router/ ← مسیرها و layout اصلی
│ ├── index.tsx ← تعریف مسیرها با React Router
│ └── Layout.tsx ← سایدبار، هدر، Outlet
│
├── store/ ← وضعیت‌های عمومی پروژه (مثلاً UI)
│ └── uiStore.ts
│
├── services/ ← توابع عمومی برای ارتباط با API
│ └── httpClient.ts ← تنظیم axios یا fetch
│
├── hooks/ ← هوک‌های سفارشی
│ ├── useModal.ts
│ └── useToast.ts
│
├── types/ ← تایپ‌های عمومی پروژه
│ └── index.ts
│
├── utils/ ← توابع کمکی مثل cn(), formatDate()
│ └── cn.ts
│
├── styles/ ← استایل‌های کلی پروژه
│ └── tailwind.css
│
├── i18n/ ← ترجمه‌ها برای چندزبانه کردن
│ ├── fa.json
│ └── en.json
│
├── App.tsx ← نقطه ورود اصلی اپلیکیشن
└── main.tsx ← رندر کردن اپ در DOM

login
src/
├── pages/
│ ├── auth/
│ │ ├── Login.tsx
│ │ ├── Signup.tsx
│ │ └── index.ts
├── components/
│ ├── forms/
│ │ ├── LoginForm.tsx
│ │ └── SignupForm.tsx
├── hooks/
│ └── useAuth.ts
├── services/
│ └── auth.ts
├── types/
│ └── auth.ts
├── store/
├── routes/
