import React from 'react';
import Link from 'next/link';

import { SanityImageObject } from '@sanity/image-url/lib/types/types';

interface ProductProps {
  allproducts: {
    image: SanityImageObject[];
    name: string;
    slug: { current: string };
    tags: string;
    price: number;
  };
}

const Allproducts: React.FC<ProductProps> = ({ allproducts }) => {
  return (
    <div>
      <Link href={`/product/${allproducts.slug.current}`}>
        <div className='Allproduct-card'>
         
          <p className='Allproduct-name'>{allproducts.name}</p>
          <p className='Allproduct-tags'>{allproducts.tags}</p>
          <p className='Allproduct-price'>${allproducts.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Allproducts;
