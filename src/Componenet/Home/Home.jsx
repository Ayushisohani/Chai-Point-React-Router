import React from 'react'

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        Sip, savor, repeat 
                            <span className="hidden sm:block text-4xl text-">Teatime is a chance to slow down, pull back, and appreciate our surroundings.
                            </span>
                        </h2>
                       
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96" src="https://cdni.iconscout.com/illustration/free/thumb/free-tea-stall-2266170-1903826.png?f=webp" alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://gulabjichaiwale.com/wp-content/uploads/2023/01/stock-vector-garma-garam-kadak-chai-indian-tea-glass-with-tea-pot-pouring-vector-illustration-of-popular-1988260520-transformed-removebg-preview.png" alt="image2" />
            </div>

            
        </div>
    );
}