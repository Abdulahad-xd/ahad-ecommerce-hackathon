import React from 'react';
import Image from 'next/image';
import { CgShoppingCart } from 'react-icons/cg';
import headerImg from '../assets/header.png';
import featured1 from '../assets/Featured1.png';
import featured2 from '../assets/Featured2.png';
import featured3 from '../assets/Featured3.png';
import featured4 from '../assets/Featured4.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <header className='header flex  justify-center items-center flex-row'>
      <div className='header-left-side py-8'>
        <div className='header-content mb-6'>
          <span className='text-3xl font-bold '>Sale 70%</span>
          <h1 className='text-4xl font-bold'>An Industrial Take on Streetwear</h1>
          <p className='text-lg'>
            Anyone can beat you, but no one can beat your outfit as long as you wear Dine outfits.
          </p>
          <Link href='/products'>
            <button className='btn bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4  mt-4'>
              <CgShoppingCart size={26} /> Start Shopping
            </button>
          </Link>
        </div>

        <div className='header-featured flex-row'>
          <div className='w-100 h-35 mr-2 flex flex-row'>
            <Image src={featured1} width={100} height={35} alt='img' />
            <Image src={featured2} width={100} height={35} alt='img' />
            <Image src={featured3} width={100} height={35} alt='img' />
            <Image src={featured4} width={100} height={35} alt='img' />
          </div>
        </div>
      </div>

      <div className='header-right-side'>
        <div className='header-circle  rounded-full bg-[#FFECE3] '>
          <Image className='header-img' src={headerImg} width={650} height={650} alt='header image' />
        </div>
      </div>
    </header>
  );
};

export default Hero;
