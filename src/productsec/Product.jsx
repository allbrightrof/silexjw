import React from "react";

const Product = () => {
  return (
    <section className=" mx-auto px-2">
      <div className="flex flex-col md:flex-row flex-grow w-[100%]">
        <div className="bg-[#E5E5E5] max-w-3xl">
          <div class="text-center p-10 flex flex-col md:flex-row bg-white items-center">
            <img src="./necklace.png" alt="Necklaces" class="rounded-lg" />
            <div className="md:p-20 pt-20 pl-8 pr-8 pb-20">
              <h2 class="text-2xl font-semibold">Necklaces</h2>
              <p class="text-sm text-gray-600 mt-2">
                Incredibly powerful CPUs, GPUs, and an SSD with image signal
                that will inspire your PlayStation experience.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div class="justify-center items-center pl-20 pr-10 md:pr-29 flex flex-row bg-[#E5E5E5]">
              <img src="./ring.png" alt="Necklaces" class="rounded-lg" />
              <div>
                <h2 class="text-2xl font-semibold">Rings</h2>
                <p class="text-sm text-gray-600 mt-2">
                  Incredibly powerful redib CPUs powerful.
                </p>
              </div>
            </div>
            <div className="relative w-full">
              <img
                src="./bracelet.png"
                alt="Necklaces"
                class=" w-full rounded-lg"
              />
              <div className="absolute flex  items-center justify-center flex-col inset-0 ">
                <h2>Bracelet</h2>
                <p class="text-sm text-gray-600 mt-2">
                  Incredibly powerful redib CPUs powerful.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row max-w-[100%]">
          <div className="bg-[#E5E5E5] pl-20 pb-20 pt-20 pr-25 flex flex-col text-center justify-center items-center">
            <h2 class="text-3xl font-semibold">Earrings</h2>
            <p class="text-sm text-gray-600 mt-2 max-w-100">
              The new 15-inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <button class="mt-4 px-6 py-2 border border-[#4B2C7A] text-[#4B2C7A] rounded hover:bg-[#4B2C7A] hover:text-white transition">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="./image 66.png"
              alt="Necklaces"
              class=" hidden md:flex w-full h-[100%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
