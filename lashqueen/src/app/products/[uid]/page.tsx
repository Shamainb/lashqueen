// src/app/products/[uid]/page.tsx
"use client";

import { createClient } from "@/prismicio";
import { PrismicRichText, PrismicNextImage } from "@prismicio/next";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductPage({
  params,
}: {
  params: { uid: string };
}) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const client = createClient();
  
  try {
    const product = await client.getByUID("product", params.uid);

    const handleAddToCart = () => {
      addToCart({
        id: product.id,
        uid: product.uid,
        name: product.data.product_name,
        price: product.data.price,
        image: product.data.product_image.url,
        quantity: quantity
      });
    };

    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* ... existing product display code ... */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border rounded">
              <button 
                className="px-4 py-2 text-xl"
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button 
                className="px-4 py-2 text-xl"
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
            <button 
              className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
          {/* ... rest of the product page ... */}
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}