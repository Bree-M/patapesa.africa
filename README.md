# PataPesa - Financial Infrastructure Platform

## Overview

PataPesa is Africa's financial infrastructure layer - a non-custodial marketplace connecting users with licensed financial providers through AI-powered matching (Match Intelligence™) and unified payment infrastructure (PesaDirect™).

**Positioning:** "The Intelligence Layer for Your Financial Life"

**Core Value:**
- 100% non-custodial architecture (we never hold user funds)
- AI-powered matching with 95% accuracy
- Unified payment infrastructure (M-PESA, cards, banks, stablecoins)
- ODPC compliant (CF/2026/INST-01)

## Website Architecture

### Complete Site Map (17 Pages)

**Home** - 8-section homepage with hero, business tools, user journey, and institutional benefits

**Solutions (5 pages)**
- For Individuals - Personal financial concierge
- For Businesses (BIZNA HUB) - MSME financing with Financial Passport™
- Corporate & HR - Employee wellness programs
- Wellness Providers - Dashboard with client retention analytics
- For Institutions - Partnership tiers and API integration

**Technology (2 pages)**
- PesaDirect™ - Unified payment infrastructure
- Match Intelligence™ - AI recommendation engine

**Resources (5 pages)**
- Blog - 6 articles across financial education, product explainers, and industry commentary
- About - Team profiles and governance framework
- Contact - Office location and contact form
- FAQs - Comprehensive Q&A
- Insights - Provider analytics portal

**Other (4 pages)**
- Partners - 4 partnership tiers (KES 25K - 250K/month)
- How It Works - Detailed 3-step process
- Legal - Terms, privacy, compliance documentation

### Homepage Sections

1. **Hero** - Dual CTAs with business tools showcase (Bulk Payments, Paybill/Till Integration)
2. **Stats Bar** - 150+ providers, 95% accuracy, 100% non-custodial, KES 2.5M MSME capital
3. **Personal Financial Concierge** - "Get the QR, Pay the Staff, Get the Loan"
4. **Intelligence Layer** - Core technology overview (PesaDirect™, Match Intelligence™, Financial Passport™)
5. **User Segments** - 4 segments: Individuals, MSMEs, Corporate, Wellness Providers
6. **How PataPesa Works** - 5-step journey with dual perspective (users + providers)
7. **Why Institutions Choose PataPesa** - 4 benefits with metrics (70% CAC reduction, 3x conversion, KES 25K investment, 14-day deployment)
8. **Trust & Compliance** - ODPC certification and non-custodial guarantee





## Technical Stack

### Core Technologies
```json
{
  "framework": "React 18.3.1",
  "buildTool": "Vite 6.3.5",
  "styling": "Tailwind CSS 4.1.12",
  "animation": "Motion 12.23.24",
  "icons": "Lucide React 0.487.0",
  "language": "TypeScript"
}
```

### Project Structure
```
/src
├── /app
│   ├── App.tsx                    # Main app with routing
│   ├── /pages                     # 17 page components
│   │   ├── HomePage.tsx           # Enhanced with V13.0 features
│   │   ├── BlogPage.tsx           # Added in V12.0
│   │   ├── AboutPage.tsx          # Team profiles with colors
│   │   └── [14 other pages]
│   └── /components                # Reusable UI components
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       ├── StatsBar.tsx
│       ├── IntelligenceLayer.tsx
│       └── [other components]
├── /styles
│   ├── theme.css                  # Custom CSS properties
│   └── fonts.css                  # Font imports
└── package.json
```






## User Segments

### 1. Individuals (B2C)
Personal financial concierge for loans, savings, insurance. AI-powered matching to relevant products with side-by-side comparison.

### 2. Businesses (MSMEs) - BIZNA HUB
Working capital access, Financial Passport™ for creditworthiness, bulk payments, Paybill/Till integration, revenue-based financing.

### 3. Corporate & HR
Employee wellness programs, salary advance solutions, subsidized wellness credits, anonymized usage reports.

### 4. Wellness & Service Providers
Provider dashboard, booking + payment integration, Client Retention Analytics, corporate wellness portal management.

## Technology Platform

### PesaDirect™ - Payment Infrastructure
Unified payment orchestration across M-PESA (Paybill/Till), cards (Visa/Mastercard), bank transfers, and stablecoins. Single API integration with multi-rail routing and automatic fallback.

### Match Intelligence™ - AI Recommendation Engine
95% match accuracy through transaction intent analysis, risk-based matching, and explainable AI. Pre-qualifies users for providers, delivering 3x higher conversion vs. cold outreach.

### Financial Passport™ - Business Creditworthiness
Digital credit profile for MSMEs based on transaction history, enabling paperless credit applications and faster approval times.

## Partnership Tiers

| Tier | Price | Matched Users | Key Features |
|------|-------|---------------|--------------|
| **Explorer** | KES 25,000/mo | Up to 100 | Basic API, standard analytics |
| **Builder** | KES 75,000/mo | Up to 500 | Full API, advanced analytics, featured placement |
| **Enterprise** | KES 150,000/mo | Up to 2,000 | Unlimited API, dedicated manager, 99.9% SLA |
| **Strategic** | KES 250,000+/mo | Unlimited | Custom development, co-marketing, board reporting |

## Team

**Raphael Kirangu** - Founder & CEO (Gold avatar)  
Strategic vision and partnership development  
[LinkedIn](https://linkedin.com/in/raphaelkirangu)

**Brenda Wairimu** - Lead Backend Engineer (Blue avatar)  
Bank-grade backend architecture  
[LinkedIn](https://linkedin.com/in/brendawairimu)

**Titus Kiprono** - Lead Frontend Engineer (Gold avatar)  
Seamless user experience design  
[LinkedIn](https://linkedin.com/in/tituskiprono)

## Compliance & Security

**ODPC Registration:** CF/2026/INST-01  
**Regulatory Compliance:** Kenya Data Protection Act  
**Architecture:** 100% non-custodial (no user funds held)  
**AI Ethics:** Explainable AI with regular bias audits  
**Security:** Bank-grade systems, encrypted transmission, OAuth 2.0

## Development

### Installation
```bash
npm install
```

### Development Server
```bash
npx vite
```
Opens at `http://localhost:5173`

### Production Build
```bash
npm run build
```
Output: `/dist` directory

### Environment Requirements
- Node.js 18+
- npm or pnpm package manager
- Modern browser (Chrome, Firefox, Safari, Edge)

## Responsive Design

**Mobile (<640px)**
- Single column layouts
- Stacked CTAs and cards
- 2-column Business Tools (compact)
- Full-width process steps

**Tablet (640px-1024px)**
- 2-column layouts for hero and segments
- Maintained grid systems
- Optimized spacing

**Desktop (>1024px)**
- Multi-column layouts with max-width containers
- Enhanced hover interactions
- Full feature display



## Performance

- Component-level code splitting
- Motion animations use GPU acceleration
- `viewport={{ once: true }}` prevents re-animation
- Tree-shaking via Vite
- Individual icon imports for optimized bundle size

## Browser Support

- Chrome/Edge (Chromium) - Full support
- Firefox - Full support
- Safari - Full support
- Modern browsers with ES6+ support

## Statistics

**Platform Metrics**
- 150+ Licensed Financial Providers
- 95% AI Match Accuracy
- 100% Non-Custodial Architecture
- KES 2.5M MSME Capital (avg/month)

**Institutional Benefits**
- 70% Lower Customer Acquisition Cost
- 3x Higher Conversion Rate
- KES 25,000 Starting Investment
- 14 Days Deployment Timeline

## Contact

**Email:** contact@patapesa.africa  
**Office:** Nairobi, Kenya  

## License

© 2026 PataPesa. All rights reserved.

---


