import Customiser from "@/components/product-widgets/customiser";
import { getProductsAction } from "../_actions/product";

export default async function HomePage() {
  const products = await getProductsAction();
  return (
    <div className="flex items-center justify-center">
      <Customiser products={products} />
    </div>
  );
}
