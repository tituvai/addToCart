
import Container from '../Container'
import Flex from '../Flex'
import Hadding from '../Hadding'
import { useSelector } from 'react-redux'



const Cart = () => {
     const data = useSelector((state) => state.cart.value)

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
                        <div className="w-[20%] text-end">
                            <Hadding text={item.qunatity} as={'h3'}/>
                        </div>
                        <div className="w-[20%] text-end">
                            <Hadding text={item.price*item.qunatity} as={'h3'}/>
                        </div>
                    </Flex>
                ))}
            </Container>
        </div>
    </>
  )
}

export default Cart