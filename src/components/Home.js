import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';

const Home = () => {
    const { products,productState:{sort,searchQuery}} = CartState();

    const transformProducts = () =>{
      let sortedProducts = products

      if(sort){
        sortedProducts = sortedProducts.sort((a,b) =>{
          return sort === 'lowToHigh' ? a.price - b.price : b.price - a.price
        })
      }
      return sortedProducts;
    }
    
  return (
    <div className='home'>
         <Filters />
        <div className="productContainer">
            {transformProducts().map((item) =>(
                <SingleProduct  item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default Home