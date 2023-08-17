import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { client } from '../../../sanity/lib/client';
import  AllProducts  from '../sections/AllProducts';

interface Product {
  _id: string;
  image: any; // Adjust the type accordingly
  name: string;
  slug: { current: string };
  tags: string;
  price: number;
}

interface ProductsProps {
  Allproducts: Product[];
}

const Products: NextPage<ProductsProps> = ({ Allproducts }) => {
  return (
    <div className='Allproducts-container'>
      {Allproducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<ProductsProps> = async () => {
  const query = '*[_type == "product"]';
  const Allproducts = await client.fetch<Product[]>(query);

  return {
    props: { Allproducts },
  };
};

export default Products;
