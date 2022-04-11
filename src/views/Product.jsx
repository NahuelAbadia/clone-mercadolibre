import React, { useState, useEffect } from 'react'
import Recomended from "../components/views/product/Recomended"
import DetailProduct from "../components/views/product/DetailProduct"
import SellerCards from '../components/views/product/SellerCards'
import DescriptionProduct from '../components/views/product/DescriptionProduct'
import Messages from "../components/views/product/Messages"
import SellerInfo from '../components/views/product/SellerInfo';
import PaymentMethods from '../components/views/product/PaymentMethods';
import axios from 'axios'
import { useParams } from 'react-router'
import { Container, Stack, StackDivider, } from '@chakra-ui/react'
import Sidebar from '../components/views/product/Sidebar'

const Product = () => {

  let { id } = useParams()

  const [productInfo, setProductInfo] = useState([])
  const url = `https://api.mercadolibre.com/items?ids=${id}`

  useEffect(() => {
    async function productDetailById() {
      const result = await axios.get(url)
      setProductInfo(result.data[0].body)
      return result
    }
    productDetailById()
  }, [url])

  return (
    <Stack bgColor="#EBEBEB">
      <Container alignSelf="center" maxWidth="container.xl" px={10} pb={10}>
        <Recomended />
        <Stack bg="white" direction="row" border="1px" borderTopRadius="7" borderColor="gray.200">
          <Stack w="70%" divider={<StackDivider />}>
            <DetailProduct
              productInfo={productInfo}
            />
            <SellerCards />
            <DescriptionProduct
              productInfo={productInfo}
            />
            <Messages />
          </Stack>

          <Stack w="30%">
            <Stack pt={4} px={7}>
              <Sidebar
                productInfo={productInfo}
              />
              <SellerInfo
                productInfo={productInfo}
              />
              <PaymentMethods />
            </Stack>

          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Product