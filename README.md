# 🧾 Invoicely

A professional freelance invoice manager built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Create, manage, and export invoices — all locally in your browser.

![Invoicely Dashboard](https://placehold.co/1200x600/0D0D0D/FAFAF7?text=Invoicely+Dashboard)

## ✨ Features

- 📊 **Dashboard** — Revenue overview, stats, and recent invoices
- 🧾 **Invoice Builder** — Create invoices with multiple line items, tax, and notes
- 👥 **Client Manager** — Store and manage your client contacts
- 📄 **PDF Export** — Download professional PDFs of any invoice
- 🔖 **Status Tracking** — Draft → Sent → Paid / Overdue workflow
- 💾 **Local Storage** — Zero backend, data lives in your browser
- 🎨 **Professional Design** — DM Serif + DM Sans typography, dark sidebar, sage green accents

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/invoicely.git
cd invoicely

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you're live.

### Build for Production

```bash
npm run build
npm start
```

## 🗂️ Project Structure

```
invoicely/
├── app/
│   ├── dashboard/        # Main dashboard page
│   ├── invoices/         # Invoice list + detail + edit
│   │   └── [id]/
│   │       └── edit/
│   ├── clients/          # Client management
│   ├── new-invoice/      # New invoice form
│   └── settings/         # App settings
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── InvoiceForm.tsx   # Shared new/edit form
│   └── StatusBadge.tsx   # Status chip component
├── lib/
│   ├── types.ts          # TypeScript interfaces
│   ├── storage.ts        # LocalStorage data layer
│   └── pdf.ts            # PDF generation (jsPDF)
└── public/
```

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| [Next.js 14](https://nextjs.org) | React framework (App Router) |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Recharts](https://recharts.org) | Revenue chart |
| [jsPDF](https://github.com/parallax/jsPDF) | PDF generation |
| [Lucide React](https://lucide.dev) | Icons |
| [uuid](https://github.com/uuidjs/uuid) | ID generation |

## 📦 Deployment

Deploy instantly to [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

Or use the Vercel GitHub integration — push to `main` and it auto-deploys.

## 🔮 Roadmap

- [ ] Email delivery integration (Resend / SendGrid)
- [ ] Recurring invoices
- [ ] Multiple currencies
- [ ] Client portal (public invoice view)
- [ ] Supabase backend for persistence across devices
- [ ] Stripe payment links on invoices

## 📄 License

MIT — use it, fork it, build on it.

---

Built with ❤️ using Next.js and Tailwind CSS.
