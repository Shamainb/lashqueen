// src/app/page.tsx
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import Hero from '@/slices/Hero'

export default async function Home() {
  const client = createClient();
  const page = await client.getByUID("page", "home");

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}