import { allProducts } from "@/api/endpoint";

export default async function Home() {
  const products = await allProducts();
  return (
    <main className="flex flex-col min-h-screen  ">
      <section className="relative w-full h-[650px] mb-12   ">
        <img
          src="https://audiophile-ecommerce-website.vercel.app/assets/home/desktop/image-hero.jpg"
          alt="logo"
          className="absolute min-w-full h-full object-cover"
        />
        <div className=" absolute w-full h-full text-white ">
          <div className="w-1/2 h-full flex flex-col justify-center px-20 ">
            <h1>NEW PRODUCT</h1>
            <p>Experience our new product that are already loved by others</p>
          </div>
        </div>
      </section>
      {/* {JSON.stringify(products)} */}
    </main>
  );
}
