// src/app/products/[uid]/page.tsx
import { createClient } from "@/prismicio";
import { PrismicRichText, PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { uid: string };
}) {
  const client = createClient();
  
  try {
    const product = await client.getByUID("product", params.uid);

    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <PrismicNextImage 
              field={product.data.product_image} 
              className="w-full h-auto rounded"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product.data.product_name}
            </h1>
            <p className="text-2xl font-semibold text-pink-600 mb-6">
              ${product.data.price}
            </p>
            <div className="prose max-w-none mb-8">
              <PrismicRichText field={product.data.description} />
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border rounded">
                <button className="px-4 py-2 text-xl">-</button>
                <span className="px-4 py-2 border-x">1</span>
                <button className="px-4 py-2 text-xl">+</button>
              </div>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Add to Cart
              </button>
            </div>
            <div className="border-t pt-4">
              <p className="text-gray-600">Category: {product.data.category}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
