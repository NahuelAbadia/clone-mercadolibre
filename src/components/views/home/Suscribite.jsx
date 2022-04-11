import React from 'react'
import { Button, Image, Stack, Text } from '@chakra-ui/react'
import disneyLogo from '../../../assets/disneyLogo.png'
import starLogo from '../../../assets/starLogo.png'
import camionEnvios from '../../../assets/camionEnvios.png'

const Suscribite = () => {
  return (
    <Stack px={10} pb={10}>
      <Stack
        w="1185px"
        h="300px"
        spacing={0}
      >
        <Stack
          w="100%"
          direction="row"
          color="white"
          bgColor="#a90f90"
          borderTopRadius={"7px"}
        >
          <Stack w="88%" pl={6} justify="center">
            <Text fontWeight={"semibold"} fontSize="2xl">Suscribite al nivel 6</Text>
          </Stack>
          <Stack
            pl={2}
            py={3}
            spacing={-2}
            fontSize="sm"
            fontWeight={"semibold"}
          >
            <Text
              pl={2}
              borderLeft={"2px"}
              borderColor="white"
            >
              Desde
            </Text>
            <Text
              pl={2}
              borderLeft={"2px"}
              borderColor="white"
            >
              <span style={{ fontSize: "26px" }}>$599</span>/mes
            </Text>
            <Text
              pl={2}
              borderLeft={"2px"}
              borderColor="white"
            >
              Según tu nivel
            </Text>
          </Stack>
        </Stack>

        <Stack
          bgColor="white"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Text fontSize={"lg"} pt={6} pl={6}>Conseguí los mejores beneficios en Mercado Libre y Mercado Pago</Text>
          <Stack direction="row" justifyContent={"space-between"} pl={4}>
            <Image
              src={disneyLogo}
              alt="Logo de Disney"
              w="250px"
              objectFit="contain"
            />
            <Image
              src={starLogo}
              alt="Logo de Star+"
              w="250px"
              objectFit="contain"
            />
            <Image
              src={camionEnvios}
              alt="Camion de envios"
              w="380px"
              objectFit="contain"
            />
          </Stack>
        </Stack>

        <Stack
          alignItems="end"
          bgColor="white"
          borderBottomRadius={"7px"}
          pr={5}
          py={4}
          w="100%"
        >
          <Button colorScheme="blue" size="md" p="25px">Suscribite</Button>
        </Stack>

      </Stack>
    </Stack>
  )
}

export default Suscribite