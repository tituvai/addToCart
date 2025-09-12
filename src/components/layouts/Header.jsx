import React, { useState } from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '/src/assets/Exclusive.png'
import { Link } from 'react-router-dom'
import { IoIosHeart } from "react-icons/io";
import { FaUser , FaShoppingCart} from "react-icons/fa";
import Hadding from '../Hadding'
import { useSelector } from 'react-redux'
import { MdClear } from "react-icons/md";


const Header = () => {

    const productWish = useSelector((state)=> state.wish.value)

    // wish on of Button start 

    const [wishOn, setWishOn] = useState(false)

    const handleWishOn=()=>{
       setWishOn(!wishOn) 
    }
    // wish on of Button End

  return (
    <>
    <div className="py-5">
        <Container>
            <Flex>
                <div className="">
                    <Image imgSrc={logo} imgAlt={'Exclusive.png'}/>
                </div>
                <div className="">
                    <ul className='flex items-center gap-x-10'>
                        {[
                            {name:'Home', path:'/'},
                            {name:'Shop', path:'/'},
                            {name:'Service', path:'/'},
                            {name:'About', path:'/'},
                            {name:'Contact', path:'/'},
                        ].map((item)=>(
                            <li className='text-base text-stone-500 font-medium'><Link to={item.path}>{item.name}</Link></li>
                        ))
                        }
                    </ul>
                </div>
                <div className="">
                    <div className="flex items-center gap-x-10">
                    <div className="relative">
                        <IoIosHeart onClick={handleWishOn}/> 
                        {wishOn && <div className="w-[500px] p-3  absolute top-6 rounded right-0 bg-stone-200 z-10">
                            <MdClear className='pb-3 size-8 cursor-pointer' onClick={handleWishOn}/>
                            <Flex>
                                <div className="w-[300px]">
                                    <Hadding className={'text-base text-black font-medium'} text={'Product'} as={'h4'}/>
                                </div>
                                <div className="w-[200px]">
                                    <Hadding className={'text-base text-black font-medium'} text={'Price'} as={'h4'}/>
                                </div>
                            </Flex>


                           {productWish.map((item)=>(
                            <Flex className={'bg-white rounded my-2 py-2'}>
                                <div className="flex items-center gap-x-2 w-[270px]">
                                    <img className='w-10' src={item.img}/>
                                    <Hadding className={'text-sm text-black font-medium'} text={item.title} as={'h5'}/>
                                </div>
                                <div className="w-[50px]">
                                    <Hadding className={'text-sm text-black font-medium'} text={item.price} as={'h5'}/>
                                </div>
                                <div className="flex gap-x-3 items-center">
                                    <button  className='bg-black text-white px-3 py-1.5 text-xs rounded font-semibold cursor-pointer'>Add To Cart</button>
                                    <MdClear className='cursor-pointer text-gray-500 hover:text-black'/>
                                </div>
                            </Flex>
                           ))}
                        </div>}
                    </div>
                    <FaUser/>
                    <Link to={'/cart'}><FaShoppingCart/></Link>
                    </div>
                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Header