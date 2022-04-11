import React from 'react'
import { Box, Container, Icon, Image, Stack, Text, Radio, RadioGroup, Button, StackDivider } from "@chakra-ui/react";
import { GoLocation } from 'react-icons/go';
import { BsTrophy } from "react-icons/bs"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo-mercadolibre.png"
import Swal from 'sweetalert2';

const BuyProduct = () => {

  const carrito = useSelector(state => state.carrito)
  const navigate = useNavigate()

  const [value, setValue] = React.useState('1')

  const compraRealizada = async () => {
    animateBuy()
  }

  const animateBuy = () => {
    let timerInterval
    Swal.fire({
      title: 'Procesando compra...',
      html: 'Por favor aguarde unos segundos...',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })

    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra!',
        confirmButtonText: 'Siguiente',
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/")
        }
      })
    }, 3000);
  }

  return (
    <>
      <Stack
        py={4}
        backgroundColor="#FFF159"
        borderBottom={"1px"}
        borderColor="gray.300"
        h="7vh"
      >
        <Container
          maxWidth="container.xl"
          alignSelf="center"
          paddingX={10}
        >
          <Stack
            direction="row"
            flex="1"
            alignItems="center"
            justifyContent="space-between"
          >
            <Image
              src={logo}
              objectFit="contain"
              cursor={"pointer"}
              onClick={() => {
                navigate("/")
              }}
            />
            <Text fontSize="sm">Ayuda</Text>
          </Stack>
        </Container>
      </Stack>

      <Stack bgColor="#EBEBEB" h="93vh">
        <Container
          maxWidth="container.xl"
          alignSelf="center"
          paddingX={10}
        >
          <Stack direction="row">
            <Stack w="65%">
              <Text pt={10} fontSize="2xl" fontWeight={"semibold"}>¿Cómo querés recibir o retirar tu compra?</Text>
              <Stack>
                <Text fontSize="md" pt={7} fontWeight="semibold">Domicilio</Text>
                <Stack
                  direction="row"
                  borderRadius="5px"
                  bgColor="#F5F5F5"
                  w="752px"
                  h="97px"
                  spacing={0}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    w="13%"
                  >
                    <Box
                      as="button"
                      cursor="pointer"
                      alignItems="center"
                      borderRadius="50%"
                      bgColor="white"
                      display="flex"
                      justifyContent="center"
                      h={12}
                      w={12}
                    >
                      <Icon
                        as={GoLocation}
                        color="#3483FA"
                        h={6}
                        w={6}
                      />
                    </Box>
                  </Stack>
                  <Stack spacing={0} justifyContent="center">
                    <Text fontSize="md">Av. Rivadavia 1234</Text>
                    <Text fontSize="sm" color="#737373">C.P. 1429 - CABA, Buenos Aires</Text>
                    <Text fontSize="sm" color="#737373">Abadia Nahuel Tomas</Text>
                  </Stack>
                </Stack>

                <RadioGroup onChange={setValue} value={value}>
                  <Stack>
                    <Stack pt={7}>
                      <Text fontWeight="semibold" pb={1}>Recibir compra</Text>
                      <Stack
                        direction="row"
                        borderRadius="5px"
                        bgColor="white"
                        w="752px"
                        h="80px"
                        pl={7}
                        spacing={0}
                        alignItems="center"
                        justifyContent="space-between"
                        boxShadow={"md"}
                      >
                        <Stack direction="row">
                          <Radio value='1'></Radio>
                          <Text fontSize="lg" pl={4}>Llega mañana</Text>
                        </Stack>
                        <Stack>
                          <Text fontSize="xl" color="#39b54a" pr={7}>Gratis</Text>
                        </Stack>
                      </Stack>
                    </Stack>

                    <Stack spacing={0} pt={7}>
                      <Text fontWeight="semibold" pb={3}>Retirar compra</Text>
                      <Stack
                        direction="row"
                        borderRadius="5px"
                        borderBottomRadius="none"
                        bgColor="white"
                        w="752px"
                        h="90px"
                        pl={7}
                        spacing={0}
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Stack direction="row">
                          <Radio value='2'></Radio>
                          <Text fontSize="lg" pl={4}>Retiro en correo y otros puntos</Text>
                        </Stack>
                        <Stack>
                          <Text fontSize="xl" color="#39b54a" pr={7}>Gratis</Text>
                        </Stack>
                      </Stack>

                      <Stack
                        direction="row"
                        borderRadius="5px"
                        borderTopRadius="none"
                        borderTop="1px"
                        borderColor="gray.300"
                        bgColor="white"
                        w="752px"
                        h="75px"
                        pl={7}
                        spacing={0}
                        alignItems="center"
                        justifyContent="space-between"
                        boxShadow="md"
                      >
                        <Stack direction="row">
                          <Radio value='3'></Radio>
                          <Text fontSize="lg" pl={4}>El local del vendedor</Text>
                        </Stack>
                        <Stack>
                          <Text fontSize="xl" color="#39b54a" pr={7}>Gratis</Text>
                        </Stack>
                      </Stack>
                    </Stack>

                  </Stack>
                </RadioGroup>

                <Stack direction="row" pt={6}>
                  <Icon as={BsTrophy} w={4} h={4} />
                  <Text fontSize="sm" color="#718096">Beneficio Mercado Puntos</Text>
                </Stack>

                <Stack
                  w="100%"
                  pt={6}
                  pr={7}
                  alignItems={"flex-end"}
                >
                  <Button
                    colorScheme="blue"
                    w="140px"
                    h="48px"
                    onClick={compraRealizada}
                  >
                    Continuar
                  </Button>
                </Stack>

              </Stack>
            </Stack>

            <Stack w="35%" bgColor="#F5F5F5">
              <Stack
                w="100%"
                direction={"column"}
                justifyContent="space-between"
                alignItems="center"
                divider={<StackDivider w="330px" alignSelf="center" />}
              >
                <Stack
                  direction="column"
                  spacing={3}
                  alignItems="center"
                  justifyContent="center"
                  pt={12}
                >
                  <Image
                    src={carrito[0].image?.length ? carrito[0].image[0] : null}
                    alt={carrito[0].nombre}
                    w={16}
                    objectFit="contain"
                    borderRadius={"50%"}
                  />
                  <Stack spacing={1}>
                    <Text
                      fontSize="md"
                      textAlign="center"
                      px={24}
                    >
                      {carrito[0].nombre}
                    </Text>
                    <Text fontSize="sm" textAlign="center" color="#737373" pb={3}>Cantidad: 1</Text>
                  </Stack>
                </Stack>

                <Stack direction="row" w="100%" justifyContent={"space-between"} py={2} px={12}>
                  <Text fontSize="md">Producto</Text>
                  <Text fontSize="md">{carrito[0].precio}</Text>
                </Stack>

                <Stack direction="row" w="100%" justifyContent={"space-between"} pt={2} px={12}>
                  <Text fontSize="xl">Pagás</Text>
                  <Text fontSize="xl">{carrito[0].precio}</Text>
                </Stack>

              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}

export default BuyProduct