import React, { useEffect, useState } from 'react'
import Container from '../Container'
import Product from '../Product'
import axios from 'axios'
import Flex from '../Flex'
import { Link } from 'react-router-dom'

const Home = () => {
    const [productObj, setProductObj]= useState([])
    useEffect (()=>{ async function AllProduct (){
let data = await axios.get('https://tituvai.github.io/E-comeApi/Product/index.json');
setProductObj(data.data.data)
}
AllProduct()
})
  return (
    <>
    <div className="py-20">
        <Container>
            <Flex className={'flex-wrap gap-y-5'}>
                {productObj.map((item)=>(
                    <Link to={'/'} className='w-[23%]'><Product productImg={item.image} productTitle={item.title} productPrice={item.price} /></Link>
                ))}
            </Flex>
            
        </Container>
    </div>
    </>
  )
}

export default Home