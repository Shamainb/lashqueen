// src/slices/Hero/index.tsx
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps) => {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      {slice.primary.image.url && (
        <img 
          src={slice.primary.image.url} 
          alt={slice.primary.image.alt || ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          {slice.primary.title}
        </h1>
        <div className="prose prose-invert max-w-none mb-8">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          {slice.primary.button_text || "Shop Now"}
        </button>
      </div>
    </section>
  );
};

export default Hero;