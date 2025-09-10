import React from 'react'
import Image from './Image'
import Hadding from './Hadding'
import { useDispatch } from 'react-redux'
import { addtocart } from '../features/cart/addToCart'

const Product = ({productImg, productAlt, productTitle, productPrice}) => {

  const dispace= useDispatch()

  const handleAddToCart=()=>{
      dispace(addtocart({
        img: productImg,
        title: productTitle,
        price: productPrice,
        qunatity: 1
      }))
  }
  return (
    <>
        <div className=" group bg-stone-100">
            <div className="relative">
                <Image className={'w-full h-[250px]'} imgSrc={productImg} imgAlt={productAlt}/>
                <div className=" text-center absolute left-0 bottom-0  translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
                   <button onClick={handleAddToCart} className='text-base text-white w-[270px] bg-black font-semibold  py-2'>Add To Cart</button>
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