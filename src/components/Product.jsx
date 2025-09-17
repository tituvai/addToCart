import React from 'react'
import Image from './Image'
import Hadding from './Hadding'
import { useDispatch } from 'react-redux'
import { addCart,} from '../features/cart/addToCart'
import { wishCart } from '../features/wishCart/wishSlice'
import { productDetelis } from '../features/productDetelis/productDeteliseSlice'
import { Link } from 'react-router-dom'


const Product = ({productImg, productAlt, productTitle, productPrice}) => {

  const dispatch= useDispatch()

  const handleAddToCart=()=>{
      dispatch(addCart({
        img: productImg,
        title: productTitle,
        price: productPrice,
        quantity: 1
      }))
  }

  // wish Part Start 

  const disWish = useDispatch()
  const handleWish = ()=>{
    disWish(wishCart({
       img: productImg,
        title: productTitle,
        price: productPrice,
        quantity: 1
    }))
  }

  // Product Detiles Part Start 
 const handleDetelis = ()=>{
    disWish(productDetelis({
       img: productImg,
        title: productTitle,
        price: productPrice,
        quantity: 1
    }))
  }
 
  return (
    <>
        <div className=" group bg-stone-100">
            
            <div className="relative"  onClick={handleDetelis}>
                <Link to={'/productDitels'}><Image className={'w-full h-[250px]'} imgSrc={productImg} imgAlt={productAlt}/></Link>
                <div className=" text-center absolute left-0 bottom-0  translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
                   <button onClick={handleAddToCart} className='text-base text-white w-[270px] bg-black font-semibold  py-2'>Add To Cart</button>
                   <button onClick={handleWish} className='text-base text-white w-[270px] bg-black font-semibold  py-2'>Add To wish</button>
                </div>
            </div>
            
            <div className="flex justify-between pt-3 p-2">
                    <Hadding className={'text-base text-black font-medium'} text={productTitle} as={'h3'}/>
                    <Hadding className={'text-base text-black'} text={productPrice} as={'h3'}/>
            </div>
        </div>
    </>
  )
}

export default Product