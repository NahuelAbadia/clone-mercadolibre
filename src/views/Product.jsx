import React, { useState, useEffect } from 'react'
import Recomended from "../components/views/product/Recomended"
import DetailProduct from "../components/views/product/DetailProduct"
import SellerCards from '../components/views/product/SellerCards'
import DescriptionProduct from '../components/views/product/DescriptionProduct'
import Messages from "../components/views/product/Messages"
import Sidebar from '../components/views/product/Sidebar'
import SellerInfo from '../components/views/product/SellerInfo';
import PaymentMethods from '../components/views/product/PaymentMethods';
import Spinner from '../components/common/spinner/Spinner'
import axios from 'axios'
import { useParams } from 'react-router'
import { useSelector } from "react-redux"
import { Container, Stack, StackDivider, } from '@chakra-ui/react'

const Product = () => {

  const loading = useSelector(state => state.loading)

  let { id } = useParams()

  const [productInfo, setProductInfo] = useState([])
  const url = `https://api.mercadolibre.com/items?ids=${id}`

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    setTimeout(() => window.scrollTo(0, 0), 5);
    setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 5);
    async function productDetailById() {
      const result = await axios.get(url)
      setProductInfo(result.data[0].body)
      return result
    }
    productDetailById()
  }, [url])

  return (
    <>
      {loading === false ?
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
        : <Spinner />}
    </>
  )
}

export default Product