import { allProducts } from "@/api/endpoint";

export default async function Home() {
  const products = await allProducts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(products)}
    </main>
  );
}
