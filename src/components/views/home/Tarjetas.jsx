import React from 'react'
import { Image, Stack, Text } from "@chakra-ui/react"

const Tarjetas = () => {
  return (
    <>
      <Stack
        w="100%"
        px={10}
        pt={8}
      >
        <Stack
          bg="white"
          w="1185px"
          direction="row"
          justifyContent="space-between"
          rounded="md"
          p="4"
        >
          <Stack direction="row">
            <Image
              src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
              w="48px"
            />
            <Stack justifyContent="center" lineHeight="0.9">
              <Text fontSize="18px">Tarjeta de crédito</Text>
              <Text color="blue.400" fontSize="14px">
                Ver promociones bancarias
              </Text>
            </Stack>
          </Stack>

          <Stack direction="row">
            <Image
              src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg"
              w="48px"
            />
            <Stack justifyContent="center" lineHeight="0.9">
              <Text fontSize="18px">Cuotas sin tarjeta</Text>
              <Text color="blue.400" fontSize="14px">
                Conocé Mercado Crédito
              </Text>
            </Stack>
          </Stack>

          <Stack direction="row">
            <Image
              src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg"
              w="48px"
            />
            <Stack justifyContent="center" lineHeight="0.9">
              <Text fontSize="18px">Efectivo</Text>
              <Text color="blue.400" fontSize="14px">
                Ver más
              </Text>
            </Stack>
          </Stack>

          <Stack direction="row">
            <Image
              src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg"
              w="48px"
            />
            <Stack justifyContent="center" lineHeight="0.9">
              <Text fontSize="18px">Tarjeta de crédito</Text>
              <Text color="blue.400" fontSize="14px">
                Ver promociones bancarias
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Tarjetas