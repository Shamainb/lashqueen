// src/slices/ProductGrid/index.tsx
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";

export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

const ProductGrid = ({ slice }: ProductGridProps) => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        {slice.primary.title}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {slice.items.map((item, index) => (
          item.products && (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link href={`/products/${item.products.uid}`}>
                <div className="relative h-64">
                  <PrismicNextImage 
                    field={item.products.data.product_image} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {item.products.data.product_name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {/* Simple text display without RichText for preview */}
                    {item.products.data.description?.[0]?.text}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">
                      ${item.products.data.price}
                    </span>
                    <button 
                      className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded transition duration-300"
                      onClick={(e) => {
                        e.preventDefault();
                        // Add to cart functionality will go here
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;