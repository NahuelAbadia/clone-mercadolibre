import React from 'react'
import Card from './Card'
import { Container, Text, Stack } from '@chakra-ui/react'

//data
import { products } from './api/products'

const Tarjetas = () => {
  return (
    <Container maxW="container.xl">
      <Stack w="100%" px={10} pt={8} pb={20}>
        <Text fontSize={"3xl"} color="GrayText" fontWeight={"light"}>Ofertas</Text>
        <Stack direction="row" spacing={4}>
          {products.map((prod, index) => {
            return (
              <Card
                key={index}
                id={prod.id}
                precio={prod.precio}
                cuotas={prod.cuotas}
                image={prod.image}
              />
            )
          })}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Tarjetas