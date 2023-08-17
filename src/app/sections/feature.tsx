import React from 'react';
import Image from 'next/image';
import img from '../assets/feature.png';
import Link from 'next/link';

const Feature = () => {
  return (
    <section className="features-section">
      <div className="title flex justify-end px-8 py-2 bg-gradient-to-b from-white via-white to-#FBFCFF">
        <h1 className="font-bold text-5xl leading-55 text-gray-800 w-45">
          Unique and <br /> Authentic Vintage <br /> Designer Jewellery
        </h1>
      </div>

      <div className="content grid grid-cols-2 gap-4 px-8 pb-4 bg-#FBFCFF">
        <div className="left grid grid-cols-2 justify-center items-center relative">
        <div className="feature-background font-bold text-9xl text-gray-300 opacity-7 z-[-10] absolute">
  Different <br /> from <br /> others
</div>

          <div>
            <h3 className="font-semibold text-lg leading-20 text-gray-800 mb-4">Using Good Quality Materials</h3>
            <p className="font-normal text-base leading-22 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-20 text-gray-800 mb-4">100% Handmade Products</h3>
            <p className="font-normal text-base leading-22 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-20 text-gray-800 mb-4">Modern Fashion Design</h3>
            <p className="font-normal text-base leading-22 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-20 text-gray-800 mb-4">Discount for Bulk Orders</h3>
            <p className="font-normal text-base leading-22 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="right flex items-center gap-6">
          <Image src={img} width={300} height={350} alt="img" />
          <div>
            <p className="font-normal text-base leading-26 text-justify text-gray-800">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
            <Link href="/products">
  <button className="btn text-base font-semibold py-2 px-4 rounded bg-gray-500 text-white hover:bg-gray-800" type="button">
    See All Products
  </button>
</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
