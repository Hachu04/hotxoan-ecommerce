import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { motion as M } from 'framer-motion';

const ProductItem = ({id,image,name,price}) => {

    const { currency } = useContext(ShopContext);

  return (
    <M.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
      </Link>
    </M.div>
    
  )
}

export default ProductItem