// src/components/ProductCard.tsx
import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { useCart } from "@/context/CartContext";
import "./ProductCard.css";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card group">
      <PrismicLink document={product} className="product-link">
        <div className="product-image-container">
          <PrismicNextImage
            field={product.data.product_image}
            className="product-image"
            fallbackAlt={product.data.product_name || "Product image"}
          />
          <div className="product-overlay">
            <button 
              className="add-to-cart-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
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
        
        <div className="product-info">
          <h3 className="product-title">{product.data.product_name}</h3>
          <div className="product-price">
            <span>${product.data.price.toFixed(2)}</span>
          </div>
        </div>
      </PrismicLink>
    </div>
  );
};

export default ProductCard;