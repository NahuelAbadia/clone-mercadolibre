import React from "react";
import { Container, Icon, Image, Input, Stack, StackDivider, Text, } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';
import logo from "../assets/logo-mercadolibre.png"
import disney from "../assets/disney.png"

const Navbar = () => {
  return (
    <Stack paddingY={2} backgroundColor="#FFF159" borderBottom={"1px"} borderColor="gray.300">
        <Container alignSelf="center" maxWidth="container.xl" paddingX={10}>
          <Stack>
            <Stack direction="row" justify="space-between">
              <Stack direction="row" spacing={12} flex="1">
                <Image src={logo} objectFit="contain" />
                <Stack alignItems="center" direction="row" divider={<StackDivider />} maxWidth="600px" width="100%"
                  backgroundColor="white" padding={2} borderRadius="xs" boxShadow="xs">
                  <Input placeholder="Buscar productos, marcas y más..." paddingX={2} variant="unstyled" _placeholder={{color:"gray.300"}} />
                  <Icon as={AiOutlineSearch} height={5} width={5} color="gray.400" cursor="pointer"></Icon>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={3}>
                <Image src={disney} />
              </Stack>
            </Stack>

            <Stack direction="row" spacing={0}>
              <Stack direction="row" pt={1}>
                <Icon as={GoLocation} height={6} width={6} color="blackAlpha.700"></Icon>
              </Stack>
              <Stack spacing={-1} >
                <Text fontSize="xs" color="blackAlpha.600">Enviar a</Text>
                <Text fontSize="sm" fontWeight="400">Capital Federal</Text>
              </Stack>
              <Stack direction="row" maxWidth="600px" width="100%" justify="center" alignItems="flex-end"
                fontSize="sm" spacing={6} pl={14} color="blackAlpha.600">
                <Text cursor="pointer">Categorías</Text>
                <Text cursor="pointer">Ofertas</Text>
                <Text cursor="pointer">Historial</Text>
                <Text cursor="pointer">Supermercado</Text>
                <Text cursor="pointer">Moda</Text>
                <Text cursor="pointer">Vender</Text>
                <Text cursor="pointer">Ayuda</Text>
              </Stack>
              <Stack direction="row" flex={1} justify="flex-end" alignItems="flex-end" spacing={7} fontSize="sm">
                <Text cursor="pointer">Creá tu cuenta</Text>
                <Text cursor="pointer">Ingresá</Text>
                <Text cursor="pointer">Mis compras</Text>
                <Icon as={BsCart2} height={5} width={5} color="blackAlpha.600" cursor="pointer"></Icon>
              </Stack>
            </Stack>

          </Stack>
        </Container>
    </Stack>
  )
}

export default Navbar
