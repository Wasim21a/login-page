import React from "react";

export default function BeforePricing() {
  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Designed for business teams like yours
                    </h2>
                    <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                    Here at Flowbite we focus on markets where technology, innovation,
                    and capital can unlock long-term value and drive economic growth.
                    </p>
                </div>
                <div className=" rounded-lg border-y-8 border-blue-900 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 ">
                    
                        <div className="w-1/2 my-1 rounded-lg border-x-8 border-rose-500 flex flex-col justify-center items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className=" mb-4 text-2xl font-semibold">PRODUCT INTEGRAION PLAN</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Billed $69 USD every 12 months
                            </p>
                            <div className="flex flex-col justify-center  my-8">
                                <p className="mr-2 text-5xl font-extrabold">$5.75</p>
                                <p className="text-gray-500 dark:text-gray-400">per month</p>
                            </div>
                            <button className=" w-32 flex flex-row justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                Buy Now
                            </button>
                            <p className="pt-6">
                                ECONOMIC
                            </p>
                            
                        </div>

                        <div className="w-1/2 my-1 rounded-lg border-x-8 border-rose-500 flex flex-col justify-center items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">AFTER SERVICES PLAN</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                Billed $69 USD every 12 months
                            </p>
                            <div className="flex flex-col justify-center  my-8">
                                <p className="mr-2 text-5xl font-extrabold">$5.75</p>
                                <p className="text-gray-500 dark:text-gray-400">per month</p>
                            </div>
                            <button className=" w-32 flex flex-row justify-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                                Buy Now
                            </button>
                            <p className="pt-6">
                                MOST POPULAR
                            </p>
                            
                        </div>
                    
                </div>
            </div>
        </section>
    </div>
  );
}
