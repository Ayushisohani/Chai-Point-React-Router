import React from 'react'

export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-socializing-clipart-group-of-friends-drinking-coffee-together-with-friends-flat-png-image_11092315.png"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                      Where there is tea, there is hope
                      </h2>
                      <p className="mt-6 text-gray-600">
                      Chai tea is an aromatic beverage that blends black tea with various herbs and spices. The most common spices used in chai are cinnamon, cardamom, ginger, clove, black pepper, and star anise. Specialized variations of chai tea can include ingredients like ashwagandha or mushrooms.
                      </p>
                      <p className="mt-4 text-gray-600">
                      Dive into the depths of flavor where every sip tells a story. Chai isn’t just a drink, it's a tradition, wrapped in warmth and served with love
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}