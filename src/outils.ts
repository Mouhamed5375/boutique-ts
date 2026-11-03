type ProduitApi = { id: number; title: string; price: number };
type ReponseProduits = { products: ProduitApi[] };
async function chargerProduits(): Promise<ProduitApi[]> {
  try {
    const reponse = await fetch("https://dummyjson.com/products?limit=5");
    if (!reponse.ok) throw new Error(`Erreur HTTP ${reponse.status}`);
    const donnees = (await reponse.json()) as ReponseProduits;
    return donnees.products;
  } catch (erreur) {
    console.error("Chargement impossible :", erreur);
    return [];
  }
}