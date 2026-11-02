import jereCard from "../assets/projects/jerelajanw/card.webp";
import jereIntro from "../assets/projects/jerelajanw/intro.webp";
import jereAccueil from "../assets/projects/jerelajanw/accueil.webp";
import jereBudget from "../assets/projects/jerelajanw/budget.webp";
import jereEpargne from "../assets/projects/jerelajanw/epargne.webp";
import jereSol from "../assets/projects/jerelajanw/sol.webp";
import jereDettes from "../assets/projects/jerelajanw/dettes.webp";
import jereComptes from "../assets/projects/jerelajanw/comptes.webp";
import jereCoach from "../assets/projects/jerelajanw/coach.webp";

import raHome from "../assets/projects/raboutik/home.webp";
import raShop from "../assets/projects/raboutik/shop.webp";
import raMobile from "../assets/projects/raboutik/mobile.webp";

import fcjCard from "../assets/projects/fcj/card.webp";
import fcjClient from "../assets/projects/fcj/client.webp";
import fcjDriver from "../assets/projects/fcj/driver.webp";

import jbCard from "../assets/projects/jerebiznis/card.webp";
import jbAdmin from "../assets/projects/jerebiznis/admin.webp";

import zepolCard from "../assets/projects/zepol-card.webp";
import zepol from "../assets/projects/zepol.webp";

import dnjCard from "../assets/projects/drivenojutsu/card.webp";
import dnjInfo from "../assets/projects/drivenojutsu/info.webp";
import dnjPeman from "../assets/projects/drivenojutsu/peman.webp";
import dnjEnskripsyon from "../assets/projects/drivenojutsu/enskripsyon.webp";
import dnjLogin from "../assets/projects/drivenojutsu/login.webp";
import dnjMobile from "../assets/projects/drivenojutsu/mobile.webp";

/**
 * Chak pwoje pale tèt li: kisa li ye, ki pwoblèm li rezoud, ak ki teknoloji
 * li bati. `links` se yon lis paske gen pwoje (FCJ) ki gen plis pase yon app.
 */
export const projects = [
  {
    id: "raboutik",
    title: "The Ra Boutik",
    kind: "E-commerce",
    year: "2026",
    tagline: "Boutik an liy ak livrezon lakay ou, an Ayiti.",
    description:
      "Yon boutik an liy konplè ki fèt pou mache ayisyen an. Kliyan an navige nan katalòg la pa kategori — manje, bwason, ijyèn ak netwayaj, kay, bebe — li chèche yon pwodwi, li mete l nan panye l epi li peye. Pri yo an goud ak pwomosyon ki kalkile otomatikman.",
    problem:
      "Anpil ti komès pa gen mwayen vann sou entènèt. Ra Boutik ba yo yon vitrin pwofesyonèl ki mache menm lè koneksyon an fèb.",
    highlights: [
      "Katalòg ak rechèch an tan reyèl ak filt pa kategori",
      "Panye, lis favori ak kont kliyan",
      "Chwa ant livrezon lakay ou oswa retrè nan depo a",
      "Peman kach lè yo livre oswa peman an liy",
      "Suivi kòmand ak yon kòd (egz. RA-7K3M-9QX2)",
      "De lang: Kreyòl ak Français, epi li enstale sou telefòn kòm PWA",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "PWA", "E-commerce"],
    image: raHome,
    gallery: [
      { src: raHome, caption: "Paj dakèy la ak banyè a" },
      { src: raShop, caption: "Kategori, pwomosyon ak pwodwi ki pi plis vann" },
      { src: raMobile, caption: "Menm bagay la sou telefòn" },
    ],
    links: [
      {
        label: "Vizite boutik la",
        href: "https://the-ra-boutik-shop.vercel.app/",
        primary: true,
      },
    ],
  },

  {
    id: "drivenojutsu",
    title: "Drive No Jutsu",
    kind: "Otoekòl / Platfòm",
    year: "2026",
    tagline: "Yon otoekòl konplè ki mache nèt sou entènèt.",
    description:
      "Tout lavi yon otoekòl — Delmas 77 — nan yon sèl platfòm, 100% an Kreyòl. Elèv la kreye kont li gratis, li peye 1 000 Gds enskripsyon an dirèk nan sit la ak MonCash oswa NatCash, epi kou a louvri. Apre sa li rezève seyans li, li etidye leson yo, li pase egzamen teyorik la, epi li swiv konbyen li rete pou l peye.",
    problem:
      "Yon otoekòl konn jere tout bagay sou yon kaye: kiyès ki peye, kiyès ki gen seyans, kiyès ki dwe. Isit la, elèv la, pwofesè a ak biwo a wè menm enfòmasyon an nan menm moman.",
    highlights: [
      "Peman MonCash ak NatCash dirèk nan sit la — oswa kach nan biwo a ak foto resi sou WhatsApp, epi biwo a valide l",
      "Patisipasyon 10 000 Gds ou ka peye an trach, ak yon balans ki kalkile pou kont li",
      "Rezèvasyon seyans sou yon kalandriye: biwo a louvri kreno yo, elèv la chwazi dat ak lè",
      "Egzamen teyorik anndan sit la — panno, priyorite, wonpwen, mòn, lapli — ak nòt pou pase epi dwa refè l",
      "Leson kondwi ak videyo: volan, miwa, kreno, mòn ak desant, sitiyasyon difisil",
      "Espas pwofesè: disponibilite, elèv li yo, ak yon rapò apre chak seyans",
      "Panèl biwo a: elèv, pwofesè, machin, depans (gaz, antretyen, salè), elèv ki dwe, mesaj pou tout moun, ak yon jounal tras sou chak aksyon",
      "Twa fòmil orè — Entansif, Flexible, Weekend — epi li enstale sou telefòn kòm PWA",
    ],
    note: "Paj akèy la se koneksyon an. Klike 'Konnen plis sou lekòl la' pou w wè paj piblik la san kont.",
    tags: ["React", "Vite", "Firebase", "PWA", "MonCash / NatCash"],
    image: dnjCard,
    gallery: [
      { src: dnjInfo, caption: "Paj piblik la: pri, fòmil, peman ak kote lekòl la ye" },
      { src: dnjPeman, caption: "Fòmil orè yo ak mwayen peman yo" },
      { src: dnjEnskripsyon, caption: "Kreye kont — gratis, peman an vin apre" },
      { src: dnjLogin, caption: "Koneksyon elèv, pwofesè ak biwo a" },
      { src: dnjMobile, caption: "Sou telefòn — se la pifò elèv yo ye" },
    ],
    links: [
      {
        label: "Vizite sit la",
        href: "https://drive-no-jutsu-94a01.web.app/",
        primary: true,
      },
    ],
  },

  {
    id: "fcj",
    title: "FCJ XPRESS",
    kind: "Transpò / Mobilite",
    year: "2026",
    tagline: "Rezèvasyon machin ak moto-taksi — de app ki mache ansanm.",
    description:
      "Yon platfòm konplè pou rezève yon kous. Li gen de aplikasyon separe ki pale youn ak lòt: espas kliyan an kote moun mande yon kous, epi espas chofè a kote chofè a resevwa demand lan, aksepte l epi fè kous la.",
    problem:
      "Rezève yon kous an Ayiti se toujou yon apèl telefòn ak yon negosyasyon. FCJ XPRESS mete tout bagay la nan yon sèl kote, ak yon tras pou chak vwayaj.",
    highlights: [
      "De app: youn pou kliyan, youn pou chofè",
      "Konekte ak email, nimewo telefòn oswa kont Google",
      "Machin ak moto-taksi nan menm sistèm nan",
      "PWA: li enstale sou telefòn nan tankou yon vrè app",
    ],
    tags: ["React", "Vite", "Tailwind CSS", "PWA", "Auth"],
    image: fcjCard,
    gallery: [
      { src: fcjClient, caption: "Espas kliyan an — rezève yon kous" },
      { src: fcjDriver, caption: "Espas chofè a — resevwa ak jere kous yo" },
    ],
    links: [
      {
        label: "App kliyan an",
        href: "https://fcj-xpress.vercel.app/",
        primary: true,
      },
      { label: "App chofè a", href: "https://fcj-xpress-gvfn.vercel.app/" },
    ],
  },

  {
    id: "jerebiznis",
    title: "JereBiznis",
    kind: "SaaS / Jesyon",
    year: "2026",
    tagline: "Yon SaaS pou ti ak mwayen antrepriz jere biznis yo.",
    description:
      "Yon platfòm SaaS ki pèmèt chak biznis gen pwòp espas pa l pou swiv aktivite l. Anwo tout bagay la gen yon panèl Super Admin ak aksè restren, kote tout aksyon yo jounalize — se konsa yon platfòm milti-kliyan dwe bati.",
    problem:
      "Yon SaaS ki jere plizyè biznis bezwen plis pase yon bèl ekran: li bezwen separasyon done, kontwòl aksè ak yon istorik aksyon. Se sa ki mete nan sant pwoje sa a.",
    highlights: [
      "Achitekti milti-kliyan (chak biznis gen espas pa l)",
      "Panèl Super Admin ak aksè restren",
      "Tout aksyon administratè yo jounalize pou sekirite",
      "Bati sou Next.js pou vitès ak referansman",
    ],
    note: "Paj Super Admin nan mande yon aksè — se nòmal, se pati administratè a.",
    tags: ["Next.js", "React", "Tailwind CSS", "SaaS", "PWA"],
    image: jbCard,
    gallery: [{ src: jbAdmin, caption: "Koneksyon Super Admin nan" }],
    links: [
      {
        label: "Vizite platfòm nan",
        href: "https://jerebiznis-saas-oi47.vercel.app/dashboard",
        primary: true,
      },
    ],
  },

  {
    id: "jerelajanw",
    title: "Jere Lajanw",
    kind: "App mobil",
    year: "2026",
    badge: "Sou Google Play",
    tagline: "Koach finansye pa w, nan pòch ou.",
    description:
      "Yon aplikasyon mobil ki ede moun jere lajan yo chak jou — an goud, an dola oswa an euro — menm san koneksyon entènèt. Li konte depans yo, li bati bidjè, li swiv epay, sòl, dèt ak prè, epi yon koach finansye bay konsèy selon jan w ap depanse.",
    problem:
      "Anpil moun pa konnen kote lajan yo pase. Jere Lajanw montre sa klè, an bon Kreyòl, ak yon nòt sante finansye chak mwa.",
    highlights: [
      "Bidjè ak depans ak alèt lè w depase yon limit",
      "Epay ak objektif (chak objektif gen deviz pa l)",
      "Sòl ak transfè — jan moun konn fè l vre",
      "Dèt ak prè: konnen ki moun ou dwe ak ki moun ki dwe w",
      "Koach finansye ak IA",
      "Li mache menm san koneksyon",
    ],
    tags: ["Flutter", "Firebase", "Finance", "Offline"],
    image: jereCard,
    gallery: [
      { src: jereIntro, caption: "Ekran akèy la" },
      { src: jereAccueil, caption: "Tout lajan w, yon sèl kout je" },
      { src: jereBudget, caption: "Yon limit pa pòs, ak alèt" },
      { src: jereEpargne, caption: "Plizyè objektif epay" },
      { src: jereSol, caption: "Sòl ak transfè" },
      { src: jereDettes, caption: "Dèt ak prè" },
      { src: jereComptes, caption: "Kont yo" },
      { src: jereCoach, caption: "Koach finansye a" },
    ],
    links: [
      {
        label: "Telechaje sou Google Play",
        href: "https://play.google.com/store/apps/details?id=com.jerelajanw",
        primary: true,
      },
    ],
  },

  {
    id: "zepol",
    title: "Zepòl",
    kind: "Sante mantal",
    year: "2026",
    tagline: "Ou pa pou kont ou.",
    description:
      "Yon espas byennèt an bon Kreyòl kote moun ka pale ak pataje sa yo santi san yo pa pè jijman. Konfidansyèl, disponib 24/7, epi ekri nan lang moun nan pale vre.",
    problem:
      "Sante mantal se yon sijè moun pa pale de li ann Ayiti. Zepòl retire baryè lang lan ak baryè jijman an.",
    highlights: [
      "Konfidansyèl — moun nan ka pale libète l",
      "Disponib 24/7",
      "Tout bagay an Kreyòl, pa yon tradiksyon",
    ],
    tags: ["Web", "Kominote", "Byennèt"],
    image: zepolCard,
    gallery: [{ src: zepol, caption: "Paj akèy Zepòl la" }],
    links: [{ label: "Vizite Zepòl", href: "https://zepol.net", primary: true }],
  },
];
