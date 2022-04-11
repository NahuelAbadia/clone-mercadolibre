import React from 'react'
import { Image, Text, Stack } from '@chakra-ui/react'
import benef1 from "../../../assets/benef1.png"
import benef2 from "../../../assets/benef2.jpg"
import benef3 from "../../../assets/benef3.jpg"

const BenefiosMercadoPuntos = () => {

  const images = [
    benef1, benef2, benef3
  ]

  return (
    <Stack
      w="100%"
      px={10}
      pt={8}
      pb={20}
    >
      <Text
        fontSize={"3xl"}
        color="GrayText"
        fontWeight={"light"}
      >
        Benefios de Mercado Puntos
      </Text>
      <Stack direction="row" w="1185px" spacing={4}>
        {images.map((img, index) => (
          <Stack
            w="100%"
            h="240px"
            key={index}
          >
            <Image rounded="md" src={img} h="100%" />
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default BenefiosMercadoPuntos