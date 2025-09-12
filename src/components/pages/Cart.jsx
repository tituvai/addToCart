
import { cartDecement, cartIncement } from '../../features/cart/addToCart'
import Container from '../Container'
import Flex from '../Flex'
import Hadding from '../Hadding'
import { useDispatch, useSelector } from 'react-redux'




const Cart = () => {
     const data = useSelector((state) => state.cart.value)

     let dispacesh = useDispatch()

     const hendleCartIncement = (item)=>{
        dispacesh(cartIncement(item))
     }
     const hendleCartDecement = (item)=>{
        dispacesh(cartDecement(item))
     }

  return (
    <>
        <div className="py-30 px-50">
            <Container>
                <Flex>
                    <div className="w-[40%]">
                        <Hadding className={'text-base text-black font-semibold'} text={'Product'} as={'h5'}/>
                    </div>
                    <div className="w[20%]">
                        <Hadding className={'text-base text-black font-semibold'} text={'Price'} as={'h5'}/>
                    </div>
                    <div className="w[20%]">
                        <Hadding className={'text-base text-black font-semibold'} text={'Quantity'} as={'h5'}/>
                    </div>
                    <div className="w[20%]">
                        <Hadding className={'text-base text-black font-semibold'} text={'Total'} as={'h5'}/>
                    </div>
                </Flex>
                {data.map((item)=>(
                    <Flex>
                       <div className="w-[40%]">
                         <div className=" flex items-center gap-x-3">
                            <img className='w-20' src={item.img} />
                            <Hadding text={item.title} as={'h3'}/>
                        </div>
                       </div>
                        <div className="w-[20%] text-end">
                            <Hadding text={item.price} as={'h3'}/>
                        </div>
                        <div className="w-[20%] pl-30">
                            <ul className='w-[70px]   justify-center py-1 flex gap-x-3 items-center border-1 border-gray-300'>
                                <li className='cursor-pointer' onClick={()=>hendleCartDecement(item)}>-</li>
                                <li>{item.quantity}</li>
                                <li className='cursor-pointer' onClick={()=>hendleCartIncement(item)}>+</li>
                            </ul>
                            
                        </div>
                        <div className="w-[20%] text-end">
                            <Hadding text={item.price*item.quantity} as={'h3'}/>
                        </div>
                    </Flex>
                    
                ))}
            </Container>
        </div>
    </>
  )
}

export default Cart