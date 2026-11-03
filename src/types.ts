export type Categorie = "vetements" | "chaussures" | "accessoires" | "maison";

export type Produit = {
  readonly id: number;
  nom: string;
  prix: number;
  stock: number;
  categorie: Categorie;
};

export type LignePanier = {
  produit: Produit;
  quantite: number;
};

