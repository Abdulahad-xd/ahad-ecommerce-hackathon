import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { client } from '../../../sanity/lib/client';
import AllProducts from '../sections/AllProducts';

interface Product {
  _id: string;
  image: any; // Adjust the type accordingly
  name: string;
  slug: { current: string };
  tags: string;
  price: number;
}

interface FemaleProps {
  AllFemaleProducts: Product[];
}

const Female: NextPage<FemaleProps> = ({ AllFemaleProducts }) => {
  return (
    <div className='Allproducts-container'>
      {AllFemaleProducts?.map((prod) => (
        <AllProducts key={prod._id} allproducts={prod} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<FemaleProps> = async () => {
  const query = '*[category == "Female"]';
  const AllFemaleProducts = await client.fetch<Product[]>(query);

  return {
    props: { AllFemaleProducts },
  };
};

export default Female;
