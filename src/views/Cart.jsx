import React from 'react'
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import { useSelector } from 'react-redux'
import CardCarrito from '../components/views/carrito/CardCarrito';

const Cart = () => {

  const carrito = useSelector(state => state.carrito)

  return (
    <Stack alignItems="center" bgColor="#EBEBEB" minH="89vh" pt={8}>
      <Container
        maxWidth="container.xl"
        paddingX={10}
      >
        <Stack
          w="100%"
          h="750px"
          px={12}
          py={12}
          bgColor="#FFFFFF"
          borderRadius="5"
          boxShadow="xs"
        >
          <Text fontWeight={"semibold"} w="150px" textAlign={"center"}>Carrito ({carrito.length})</Text>
          <Box borderBottom="2px" borderColor="black" w="150px"></Box>
          {carrito?.map((prod, index) => {
            return <Stack direction="row" pt={8} pl={8}>
              <CardCarrito
                key={index}
                id={prod.id}
                nombre={prod.nombre}
                precio={prod.precio}
                image={prod.image}
              />
            </Stack>
          })}
        </Stack>
      </Container>
    </Stack>
  )
}

export default Cart