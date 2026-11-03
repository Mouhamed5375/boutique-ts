import './style.css'
import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Get started</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img class="button-icon" src="${typescriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)



const bouton = document.querySelector<HTMLButtonElement>("#ajouter");

if (!bouton) {
  throw new Error("Bouton #ajouter introuvable : vérifiez l'id dans index.html");
}

bouton.addEventListener("click", () => {
  console.log("Le bouton a été cliqué !");
});


const champQuantite = document.querySelector<HTMLInputElement>("#quantite");

if (!champQuantite) {
  throw new Error("Champ #quantite introuvable : vérifiez l'id dans index.html");
}

bouton.addEventListener("click", (evenement) => {
  console.log(`Clic à ${evenement.clientX} px du bord gauche, ${evenement.clientY} px du haut`);
});

const quantite: number = Number(champQuantite.value);
console.log(`Quantité : ${quantite}`);

// formulaire
const formulaire = document.querySelector<HTMLFormElement>("#commande");

if (!formulaire) {
  throw new Error("Formulaire #commande introuvable : vérifiez l'id dans index.html");
}

formulaire.addEventListener("submit", (evenement) => {
  evenement.preventDefault(); // empêche le rechargement de la page
  const donnees = new FormData(formulaire);
  const quantite = Number(donnees.get("quantite")); // FormData renvoie du texte : on convertit
  console.log(`Commande validée : ${quantite} article(s)`);
});

const bouton2 = document.createElement("button");
bouton2.textContent = "Bouton créé en TypeScript";
bouton2.disabled = true;

type Produit = { id: number; nom: string; prix: number; stock: number };

const boubou: Produit = { id: 1, nom: "Boubou brodé", prix: 25000, stock: 8 };

const catalogue = document.querySelector<HTMLDivElement>("#catalogue");

if (!catalogue) {
  throw new Error("#catalogue introuvable : vérifiez l'id dans index.html");
}

const carte = document.createElement("article");
carte.className = "carte";

const titre = document.createElement("h3");
titre.textContent = boubou.nom;

const prix = document.createElement("p");
prix.textContent = `${boubou.prix} F CFA`;

const ajouter = document.createElement("button");
ajouter.textContent = "Ajouter au panier";

carte.append(titre, prix, ajouter);
catalogue.append(carte);

// fonction piege

// 

function trouver<T extends HTMLElement>(selecteur: string): T {
  const element = document.querySelector<T>(selecteur);
  if (!element) {
    throw new Error(`Élément ${selecteur} introuvable : vérifiez index.html`);
  }
  return element;
}

const zone = trouver<HTMLDivElement>("#catalogue");

zone.textContent = "OK";

// function afficher(): void {
//   zone.textContent = "...";
// }

// type LignePanier = {
//   produit: Produit;
//   quantite: number;
// };
// const listePanier = trouver<HTMLUListElement>("#panier");
// const totalPanier = trouver<HTMLElement>("#total");

// let panier: LignePanier[] = [];

// function ajouterAuPanier(produit: Produit): void {
//   const existante = panier.find((l) => l.produit.id === produit.id);

//   if (existante) {
//     // déjà dans le panier : copie avec quantité + 1
//     panier = panier.map((l) =>
//       l.produit.id === produit.id ? { ...l, quantite: l.quantite + 1 } : l
//     );
//   } else {
//     // nouveau : copie du panier + une nouvelle ligne
//     panier = [...panier, { produit, quantite: 1 }];
//   }

//   afficherPanier();
// }

// function afficherPanier(): void {
//   listePanier.replaceChildren(
//     ...panier.map((l) => {
//       const li = document.createElement("li");
//       li.textContent = `${l.produit.nom} x ${l.quantite}`;
//       return li;
//     })
//   );
// }

// ajouter.addEventListener("click", () => ajouterAuPanier(produit));

// function totalDuPanier(): number {
//   return panier.reduce((total, l) => total + l.produit.prix * l.quantite, 0);
// }