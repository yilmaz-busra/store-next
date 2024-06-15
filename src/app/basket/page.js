"use client";
import { useBasket } from "@/context/basketContext";

function Basket() {
  const { basket, removeItem } = useBasket();
  const total = basket.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Your Basket
            </h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                    Product
                  </th>

                  {/* <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Count
                  </th> */}
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                    Price
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td className="px-4 py-3">{item.title}</td>
                      {/* <td class="px-4 py-3">5 Mb/s</td> */}
                      <td className="px-4 py-3">{item.price}</td>
                      <td className="w-10 text-center">
                        <button
                          className="text-white bg-red-500 border-0 py-2 px-4 focus:outline-none hover:bg-red-600 rounded"
                          onClick={() => {
                            removeItem(item.id);
                          }}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Total: {total}$
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
              Buy NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Basket;
