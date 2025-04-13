// src/app/products/page.tsx
import { createClient } from "@/prismicio";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default async function ProductsPage() {
  const client = createClient();
  const products = await client.getAllByType("product");

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-12 text-center">Our Lash Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link href={`/products/${product.uid}`}>
              <div className="relative h-64">
                <PrismicNextImage 
                  field={product.data.product_image} 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {product.data.product_name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.data.description?.[0]?.text}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">
                    ${product.data.price}
                  </span>
                  <button 
                    className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      addToCart({
                        id: product.id,
                        uid: product.uid,
                        name: product.data.product_name,
                        price: product.data.price,
                        image: product.data.product_image.url,
                        quantity: 1
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}