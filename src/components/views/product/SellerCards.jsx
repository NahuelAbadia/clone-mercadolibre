import React from 'react'
import { StackDivider, Stack, Text, Image } from "@chakra-ui/react";
import { products } from '../../../api/products';

const SellerCards = () => {

  const numeroDecimal = new Intl.NumberFormat('es-ar')

  return (
    <Stack pt={8} pb={12} pl={12} >
      <Text fontSize="24px">Publicaciones del vendedor</Text>
      <Stack direction="row" spacing={5} pt={4}>
        {products.slice(1, 4).map((product) => (
          <Stack
            w="224px"
            h="401px"
            cursor="pointer"
            border="1px"
            borderColor="gray.200"
            borderRadius="lg"
            divider={<StackDivider />}
            _hover={{ shadow: "md" }}
          >
            <Image
              src={product.image?.[0]}
              w="200px"
              h="200px"
              objectFit={"contain"}
            />
            <Stack pb={2} px={3} spacing={1}>
              <Text fontSize="22px">${numeroDecimal.format(product.precio)}</Text>
              <Text color="green.400" fontSize="sm" fontWeight="bold">
                Envio gratis
              </Text>
              <Text fontSize="sm">{product.nombre}</Text>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default SellerCards