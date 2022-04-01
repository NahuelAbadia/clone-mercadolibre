import React from 'react'
import Recomended from "../Recomended"
import DetailProduct from "../DetailProduct"
import { Stack } from '@chakra-ui/react'

const Product = () => {
  return (
    <Stack bgColor="#EBEBEB">
      <Recomended />
      <DetailProduct />
    </Stack>
  )
}

export default Product