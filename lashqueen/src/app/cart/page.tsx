// src/app/cart/page.tsx
"use client";

import { useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl mb-4">Your cart is empty</p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-6 rounded">
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Cart items would be listed here */}
              <div className="p-6 border-b">
                <p>Cart items will appear here</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-4 border-t">
                <span>Total</span>
                <span>$0.00</span>
              </div>
            </div>
            <button 
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-4 rounded transition duration-300"
              disabled
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}