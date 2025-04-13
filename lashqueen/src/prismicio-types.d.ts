// src/prismicio-types.d.ts
import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = HeroSlice | ProductGridSlice | RichTextSlice;

type PageDocumentData = {
  title: prismic.TitleField;
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
};

type PageDocument = prismic.PrismicDocumentWithUID<PageDocumentData, "page", "en-us">;

type ProductDocumentData = {
  uid: prismic.UIDField;
  product_name: prismic.TitleField;
  product_image: prismic.ImageField;
  price: prismic.NumberField;
  description: prismic.RichTextField;
  category: prismic.SelectField<"Classic" | "Volume" | "Hybrid" | "Mega Volume" | "Natural">;
};

type ProductDocument = prismic.PrismicDocumentWithUID<ProductDocumentData, "product", "en-us">;

type HeroSlice = prismic.Slice<"hero", {
  title: prismic.TitleField;
  description: prismic.RichTextField;
  image: prismic.ImageField;
  button_text: prismic.KeyTextField;
}>;

type ProductGridSlice = prismic.Slice<"product_grid", {
  title: prismic.TitleField;
}, {
  products: prismic.ContentRelationshipField<"product">;
}>;

type RichTextSlice = prismic.Slice<"rich_text", {
  content: prismic.RichTextField;
}>;

declare module "@prismicio/client" {
  interface CreateClient {
    (config: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
  }
}

export type {
  PageDocument,
  ProductDocument,
  HeroSlice,
  ProductGridSlice,
  RichTextSlice,
  AllDocumentTypes,
};