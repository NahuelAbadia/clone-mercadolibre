import React from 'react'
import Card from '../../../views/home/ofertas/Card'
import { Text, Stack } from '@chakra-ui/react'

//data
import { products } from '../../../../api/products'

const Ofertas = () => {
  return (
    <Stack
      w="100%"
      px={10}
      pt={8}
      pb={20}
    >
      <Text
        color="GrayText"
        fontSize={"3xl"}
        fontWeight={"light"}
      >
        Ofertas
      </Text>
      <Stack
        direction="row"
        spacing={4}
      >
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
  )
}

export default Ofertas