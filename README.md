# Pòtfolyo — Karl Ernerson Jean Laurent (Pikatcho509)

Pòtfolyo pèsonèl bati ak React + Vite + Tailwind CSS, deplwaye sou Vercel.

## Lanse l lokalman

```bash
npm install
npm run dev        # sèvè devlopman
npm run build      # bati pou pwodiksyon nan dist/
npm run preview    # gade rezilta build la
npm run lint
```

## Kote pou chanje bagay

| Sa w vle chanje | Fichye |
| --- | --- |
| Nimewo WhatsApp, email, GitHub | `src/data/site.js` |
| Pwoje yo (tèks, lyen, imaj) | `src/data/projects.js` |
| Sèvis ak etap travay yo | `src/components/Services.jsx` |
| Antèt la ak meni an | `src/components/Header.jsx` |
| Koulè, polis ak fon an | `src/index.css` |
| Tèks "Sou mwen" ak chif yo | `src/components/About.jsx` ak `src/components/Hero.jsx` |
| Konpetans yo | `src/components/Skills.jsx` |
| Tit, deskripsyon ak imaj pataj (SEO) | `index.html` + `public/og.jpg` |

Tout kontak yo soti nan `src/data/site.js` — chanje nimewo a yon sèl kote epi
tout sit la chanje (bouton flotan an, kontak, footer, chak kat pwoje).

## Imaj

Imaj pwoje yo se `.webp` nan `src/assets/projects/`. Lè w ap ajoute yon nouvo
imaj, konvèti l an WebP epi limite lajè a (1100px pou yon ekran òdinatè, 720px
pou yon ekran telefòn) — se sa ki kenbe sit la rapid sou koneksyon mobil.


## Desing

Fon fonse (slate-900), aksan ble (blue-400/500), tit ak Plus Jakarta Sans,
kò tèks ak Inter. Koulè yo soti nan palèt Tailwind la — pa gen konfigirasyon
koulè pèsonalize pou kenbe.

## Deplwaman

```bash
vercel --prod
```
