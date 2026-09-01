# RUNWAL REALTY — Luxury Real Estate Web Platform

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Demo-brightgreen?logo=github)](https://hashmi273.github.io/Runwal-Realty/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![HTML5 / CSS3 / Vanilla JS](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20JS-orange)](#)

> **Live Website URL:** [https://hashmi273.github.io/Runwal-Realty/](https://hashmi273.github.io/Runwal-Realty/)

A luxury, responsive real estate web application replicating the design language of **RUNWAL REALTY**, fully engineered for GitHub Pages static hosting and transparent business verification (Meta / Facebook Business Verification).

---

## 🏛️ Legal Entity & Business Information

This website strictly maintains the following business identity across all public-facing pages, headers, footers, legal pages, forms, and structured schema:

| Attribute | Specification |
| :--- | :--- |
| **Customer-Facing Brand** | **RUNWAL REALTY** |
| **Operating Statement** | *Runwal Realty is a brand operated by EVENTRIC.* |
| **Operating / Trade Name** | **EVENTRIC** |
| **Legal Entity Name** | **WASIM HASHMI** |
| **Business Constitution** | **Proprietorship** |
| **GSTIN** | **27AOGPH6435N2ZI** |
| **Principal Place of Business / Registered Office** | **Shop No. 18, 1st Floor, Evershine Mall Co-op Society Ltd, Link Road, Near Chincholi Bunder Signal, Malad West, Mumbai, Maharashtra – 400064.** |

---

## 🚀 How to Enable GitHub Pages (Live Deployment)

This repository is pre-configured with `.nojekyll`, `404.html`, and a GitHub Actions workflow for zero-config deployment.

### Option A: Standard Branch Deployment (Recommended)
1. Go to your GitHub repository: [https://github.com/Hashmi273/Runwal-Realty](https://github.com/Hashmi273/Runwal-Realty)
2. Click on **Settings** (top navigation tab).
3. In the left sidebar, click on **Pages**.
4. Under **Build and deployment** &rarr; **Source**, select **Deploy from a branch**.
5. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
6. Within 60 seconds, your site will be live at:  
   👉 **`https://hashmi273.github.io/Runwal-Realty/`**

### Option B: GitHub Actions Workflow
- A pre-configured workflow is included at `.github/workflows/deploy.yml`. In **Settings** &rarr; **Pages**, select **GitHub Actions** as the source for automatic builds on every commit.

---

## 📁 Repository Structure

```text
Runwal-Realty/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── .gitignore                    # Git ignore rules
├── .nojekyll                     # Bypasses Jekyll processing on GitHub Pages
├── 404.html                      # Luxury branded 404 error page
├── index.html                    # Main landing page with full sections & JSON-LD schema
├── terms-conditions.html         # Dedicated Terms & Conditions with Business Identification
├── privacy-policy.html           # Dedicated Privacy Policy identifying EVENTRIC / WASIM HASHMI
├── styles.css                    # Luxury CSS3 design system (Gold #AA8A4B, Navy #0A2342)
├── script.js                     # Interactive carousel, tabs, modals, and counter animations
├── server.js                     # Optional lightweight Node.js local preview server
├── package.json                  # NPM project manifest
└── README.md                     # Documentation & GitHub Pages guide
```

---

## 💻 Local Development

Clone the repository and run locally:

```bash
# Clone repository
git clone https://github.com/Hashmi273/Runwal-Realty.git
cd Runwal-Realty

# Run with Node.js
npm start
# Server runs at http://localhost:3000
```

Alternatively, open `index.html` directly in any web browser.

---

## ⚖️ Legal & Meta Verification Trust Signals

- **No false ownership claims**: Uses strictly *"Runwal Realty is a brand operated by EVENTRIC."*
- **Accurate GST Record**: GST registration details match the official GSTIN `27AOGPH6435N2ZI` under legal name `WASIM HASHMI` and trade name `EVENTRIC`.
- **JSON-LD Schema**: Machine-readable `RealEstateAgent` schema embedded in `<head>` for automated verification bots.

---

&copy; 2026 RUNWAL REALTY. All Rights Reserved.  
*Runwal Realty is a brand operated by EVENTRIC.*
