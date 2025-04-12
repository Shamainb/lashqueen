import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink } from "@prismicio/react";
import { useContext } from "react";
import { CartContext } from "@/context/CartContext";
import "./ProductCard.css";

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useContext(CartContext);

  // Extract product data
  const { data } = product;
  const { name, price, sale_price, main_image, uid } = data;
  
  const productPrice = sale_price || price;
  const isOnSale = sale_price && sale_price < price;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      uid,
      name,
      price: productPrice,
      image: main_image.url,
      quantity: 1
    });
  };

  return (
    <div className="product-card group">
      <PrismicLink document={product} className="product-link">
        <div className="product-image-container">
          <PrismicNextImage
            field={main_image}
            className="product-image"
            fallbackAlt={name || "Product image"}
          />
          <div className="product-overlay">
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        
        <div className="product-info">
          <h3 className="product-title">{name}</h3>
          <div className="product-price">
            {isOnSale ? (
              <>
                <span className="sale-price">${sale_price.toFixed(2)}</span>
                <span className="original-price">${price.toFixed(2)}</span>
              </>
            ) : (
              <span>${price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </PrismicLink>
    </div>
  );
};

export default ProductCard;