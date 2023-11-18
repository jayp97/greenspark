"use server";

export async function getProductsAction() {
  try {
    const products = await fetch(`${process.env.API_URL}/product-widgets`);
    return products.json();
  } catch (err) {
    console.log(err);
  }
}
