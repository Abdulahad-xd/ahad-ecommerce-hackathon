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

interface KidsProps {
  AllKidsProducts: Product[];
}

const Kids: NextPage<KidsProps> = ({ AllKidsProducts }) => {
  return (
    <div className='Allproducts-container'>
      {AllKidsProducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<KidsProps> = async () => {
  const query = '*[category == "Kids"]';
  const AllKidsProducts = await client.fetch<Product[]>(query);

  return {
    props: { AllKidsProducts },
  };
};

export default Kids;
