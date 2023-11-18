import { Product } from "@/app/models/product";
import ProductWidget from "./product-widget";

type CustomiserProps = {
  products: Product[];
};

export default function Customiser({ products }: CustomiserProps) {
  return (
    <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-full p-8 rounded-md bg-gs-white shadow-md">
      <span className="text-2xl font-semibold">Per product widgets</span>
      <div className="w-full h-[2px] bg-gs-gray my-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8">
        {products &&
          products.map((product) => (
            <ProductWidget key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
