import products from "../data/products.jason";

export function addProduct(newProduct) {
  const maxId = Math.max(...products.map((p) => p.id));
  const productWithId = { id: maxId + 1, ...newProduct };
  products.push(productWithId);
  return productWithId;
}

export default function NewProductsTester() {
  console.log("محصولات فعلی:", products);
  return null;
}
