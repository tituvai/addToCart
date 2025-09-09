import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Hadding from '../Hadding'
import Image from '../Image'


const Cart = () => {
  return (
    <>
        <div className="py-30 px-50">
            <Container>
                <Flex>
                    <div className="">
                        <Hadding className={'text-base text-black font-semibold'} text={'Product'} as={'h5'}/>
                    </div>
                    <div className="">
                        <Hadding className={'text-base text-black font-semibold'} text={'Price'} as={'h5'}/>
                    </div>
                    <div className="">
                        <Hadding className={'text-base text-black font-semibold'} text={'Quantity'} as={'h5'}/>
                    </div>
                    <div className="">
                        <Hadding className={'text-base text-black font-semibold'} text={'Total'} as={'h5'}/>
                    </div>
                </Flex>
            </Container>
        </div>
    </>
  )
}

export default Cart