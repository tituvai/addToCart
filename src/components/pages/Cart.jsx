
import { cartDecement, cartIncement, removeBtn } from '../../features/cart/addToCart'
import Container from '../Container'
import Flex from '../Flex'
import Hadding from '../Hadding'
import { useDispatch, useSelector } from 'react-redux'
import { MdClear } from "react-icons/md";



const Cart = () => {
     const data = useSelector((state) => state.cart.value)

     let dispatch = useDispatch()

    // total Price 

    const totalPrice = data.reduce((total, item) => total + item.price * item.quantity, 0);

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
                                <li className='cursor-pointer' onClick={()=>{dispatch(cartDecement(item))}}>-</li>
                                <li>{item.quantity}</li>
                                <li className='cursor-pointer' onClick={()=>{dispatch(cartIncement(item))}}>+</li>
                            </ul>
                            
                        </div>
                        <div className="w-[20%] text-end relative">
                        <Hadding text={item.price*item.quantity} as={'h3'}/>
                        <MdClear onClick={()=>{dispatch(removeBtn(item.title))}} className='absolute top-1/2 -translate-y-1/2 -right-10 cursor-pointer'/>
                        </div>
                    </Flex>
                    
                ))}

                {data.length > 0 && (
            <Flex className="justify-end mt-5 border-t-1 border-stone-200">
              <Hadding
                className={'text-base text-black font-medium'}
                text={`Total: ৳${totalPrice}`}
                as={'h3'}
              />
            </Flex>
          )}
            </Container>
        </div>
    </>
  )
}

export default Cart