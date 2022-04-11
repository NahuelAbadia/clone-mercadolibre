import React from 'react'
import { Box, Image, Stack, StackDivider, Text } from '@chakra-ui/react'

const Card = ({ precio, cuotas, image }) => {

  //función que toma el número y devuelve una cadena separada por comas
  const numeroDecimal = new Intl.NumberFormat('es-ar')

  return (
    <Box cursor="pointer" w="100%" >
      <Stack
        h="330px"
        py={6}
        align="center"
        direction="column"
        boxShadow="md"
        bgColor="white"
        divider={<StackDivider borderColor='gray.200' pt={7} />}
        w="220px"
        _hover={{ shadow: "lg" }}
      >
        <Stack h={"60%"}>
          <Image
            src={image[0]}
            w="100%"
            h="200px"
            objectFit={"contain"}
          />
        </Stack>

        <Stack
          h="40%"
          w="100%"
          pl={4}
          spacing={0}
          justifyContent={"center"}
        >
          <Text
            fontSize={"26px" }
          >
            ${numeroDecimal.format(precio)}
          </Text>

          <Stack spacing={-1} fontSize={"sm"}>
            <Text >
              {cuotas}
            </Text>
            <Text color="#00a650" fontWeight={"semibold"}>
              Envío gratis
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Card