import React, { useState } from "react";
import { Box, Container, Icon, Image, Input, Stack, StackDivider, Text, } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from 'react-icons/go';
import { BsCart2 } from 'react-icons/bs';
import { searchProduct } from "../../redux/actions/action";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-mercadolibre.png"
import disney from "../../assets/disney.png"

const Navbar = () => {

  const carrito = useSelector(state => state.carrito)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [search, setSearch] = useState({ title: "" })
  const { title } = search

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = e => {
    e.preventDefault()
    dispatch(searchProduct(title))
    navigate(`/search/${title}`)
  }

  return (
    <Stack
      pt={2}
      pb={3}
      backgroundColor="#FFF159"
      borderBottom={"1px"}
      borderColor="gray.300"
      h="11vh"
    >
      <Container
        maxWidth="container.xl"
        alignSelf="center"
        paddingX={10}
      >
        <Stack>
          <Stack
            direction="row"
            justify="space-between"
          >
            <Stack
              direction="row"
              spacing={12}
              flex="1"
            >
              <Image
                src={logo}
                objectFit="contain"
                cursor={"pointer"}
                onClick={() => {
                  navigate("/")
                }}
              />
              <Stack
                alignItems="center"
                direction="row"
                divider={<StackDivider />}
                maxWidth="600px"
                width="100%"
                padding={2}
                backgroundColor="white"
                borderRadius="xs"
                boxShadow="xs"
              >
                <form
                  onSubmit={handleClick}
                  style={{ width: "100%" }}
                >
                  <Stack direction="row">
                    <Input
                      paddingX={2}
                      variant="unstyled"
                      placeholder="Buscar productos, marcas y más..."
                      _placeholder={{ color: "gray.300" }}
                      name="title"
                      onChange={handleChange}
                    />
                    <Box
                      as="button"
                    >
                      <Icon
                        as={AiOutlineSearch}
                        height={5}
                        width={5}
                        color="gray.400"
                        cursor="pointer"
                      />
                    </Box>
                  </Stack>
                </form>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              spacing={3}
            >
              <Image
                src={disney}
                alt="Suscribite al nivel 6"
              />
            </Stack>
          </Stack>

          <Stack
            direction="row"
            spacing={0}
          >
            <Stack
              direction="row"
              pt={1}
            >
              <Icon
                as={GoLocation}
                height={6}
                width={6}
                color="blackAlpha.700"
              />
            </Stack>
            <Stack spacing={-1}>
              <Text fontSize="xs" color="blackAlpha.600">Enviar a</Text>
              <Text fontSize="sm" fontWeight="400">Capital Federal</Text>
            </Stack>
            <Stack
              direction="row"
              maxWidth="600px"
              width="100%"
              justify="center"
              alignItems="flex-end"
              color="blackAlpha.600"
              fontSize="sm"
              pl={14}
              spacing={6}
            >
              <Text cursor="pointer">Categorías</Text>
              <Text cursor="pointer">Ofertas</Text>
              <Text cursor="pointer">Historial</Text>
              <Text cursor="pointer">Supermercado</Text>
              <Text cursor="pointer">Moda</Text>
              <Text cursor="pointer">Vender</Text>
              <Text cursor="pointer">Ayuda</Text>
            </Stack>
            <Stack
              direction="row"
              justify="flex-end"
              alignItems="flex-end"
              fontSize="sm"
              flex={1}
              spacing={7}
            >
              <Text cursor="pointer">Creá tu cuenta</Text>
              <Text cursor="pointer">Ingresá</Text>
              <Text cursor="pointer">Mis compras</Text>
              <Box
                color="blackAlpha.600"
                cursor={"pointer"}
                className="position-relative"
                onClick={() => {
                  navigate("/cart")
                }}
              >
                <BsCart2 size="20px" />
                {/* {carrito.length !== 0 ?
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {carrito.length}
                  </span>
                  :
                  <span className="visually-hidden"></span>
                } */}
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Navbar
