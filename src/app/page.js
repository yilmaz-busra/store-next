import ProductCard from "@/Components/ProductCard";
import { allProducts } from "@/api/endpoint";
import Link from "next/link";

export default async function Home() {
  const products = await allProducts();

  return (
    <main className="flex flex-col min-h-screen  ">
      <section className="relative w-full h-[650px]    ">
        <img
          src="https://audiophile-ecommerce-website.vercel.app/assets/home/desktop/image-hero.jpg"
          alt="logo"
          className="absolute min-w-full h-full object-cover"
        />
        <div className=" absolute w-full h-full  ">
          <div className="w-1/2 h-full flex flex-col justify-center px-20 ">
            <h4 className="tracking-[10px]  font-medium text-[#979797]">
              NEW PRODUCT
            </h4>
            <h2 className="text-5xl font-bold text-white">
              XX99 MARK II HEADPHONES
            </h2>
            <p className="text-white mt-4">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
        </div>
      </section>

      <section className="container px-5  mx-auto mt-12">
        <h2 className="text-center text-2xl  font-medium tracking-wider  ">
          MOST POPULAR PRODUCTS
        </h2>

        <div className="flex flex-wrap justify-center py-8">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              price={product.price}
              pname={product.title}
            />
          ))}
        </div>
      </section>

      <section className="container px-5  mx-auto mt-12">
        <h2 className="text-center text-2xl  font-medium tracking-wider  ">
          OTHER PRODUCTS{" "}
        </h2>
        <div className="flex flex-wrap justify-center py-4">
          {products.slice(8, 14).map((product) => {
            return (
              <ProductCard
                key={product.id}
                image={product.image}
                price={product.price}
                pname={product.title}
              />
            );
          })}
        </div>
      </section>
      <Link
        href={"/products"}
        className="text-center text-2xl font-medium tracking-wider mb-8"
      >
        SEE MORE PRODUCTS
      </Link>
      {/* {JSON.stringify(products)} */}
    </main>
  );
}
