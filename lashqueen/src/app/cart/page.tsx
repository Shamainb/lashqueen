// src/app/cart/page.tsx
"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

export default function CartPage() {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    totalItems,
    totalPrice 
  } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <Link 
            href="/" 
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {cartItems.map((item) => (
                <div key={item.id} className="p-6 border-b flex gap-6">
                  <div className="w-24 h-24 flex-shrink-0">
                    <PrismicNextImage 
                      field={{ url: item.image }} 
                      className="w-full h-full object-cover rounded"
                      alt={item.name}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-pink-600 font-bold">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border rounded">
                        <button 
                          className="px-3 py-1"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="px-3 py-1 border-x">{item.quantity}</span>
                        <button 
                          className="px-3 py-1"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button 
                        className="text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal ({totalItems} items)</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded transition duration-300"
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}