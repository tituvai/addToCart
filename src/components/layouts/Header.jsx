import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import logo from '/src/assets/Exclusive.png'
import { Link } from 'react-router-dom'
import { IoIosHeart } from "react-icons/io";
import { FaUser , FaShoppingCart} from "react-icons/fa";


const Header = () => {

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
                    <IoIosHeart/> 
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