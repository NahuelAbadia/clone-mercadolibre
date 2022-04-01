import React, { useState } from 'react'
import { Box, Button, Container, Image, Stack, Text, Icon } from '@chakra-ui/react'
import { BsHeart, BsHeartFill, BsStarHalf, BsStarFill, BsTruck, BsArrowReturnLeft, BsShieldCheck, BsTrophy } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go';
import { BiMedal } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import PopUpPago from './PopUpPago';
import note10 from '../assets/note10.png'
import note102 from '../assets/note10-2.png'
import note103 from '../assets/note10-3.png'
import Swal from 'sweetalert2';

const images = [{
  id: 1,
  image: note10,
},
{
  id: 2,
  image: note102,
},
{
  id: 3,
  image: note103,
}
]

const DetailProduct = () => {

  const [isFill, setFill] = useState(false);
  const [image, setImage] = useState(images[0])

  const handleClick = () => {
    setFill(!isFill)
  }

  const handleEnter = (index) => {
    setImage(images[index])
  }

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  return (
    <Container alignSelf="center" maxWidth="container.xl" paddingX={10}>
      <Stack
        direction="row"
        alignSelf="center"
        justify="space-around"
        pt={2}
        maxWidth="1200px"
        w="100%"
        h="950px"
        bgColor="#FFFFFF"
        borderRadius="5"
        boxShadow="xs"
      >
        <Stack direction="row">
          <Stack direction="row">
            <Stack boxShadow="sm" pt={2} spacing={2}>
              {images?.map((item, index) => {
                return <Image
                  key={item.id}
                  src={item.image}
                  alt={item.id}
                  height={50}
                  width={50}
                  cursor="pointer"
                  objectFit="contain"
                  border="1px"
                  borderRadius="5px"
                  borderColor="gray.300"
                  _hover={{ border: "2px", borderColor: "blue.500" }}
                  onMouseEnter={() => handleEnter(index)}
                />
              })}
            </Stack>

            <Stack
              w="390px"
              h="100%"
              pt={12}
              pl={4}
              pb={12}
            >
              <Image
                src={image.image}
                w="375px"
                h="450px"
                objectFit="contain"
                position={"sticky"}
                top="60px"
              />
            </Stack>
          </Stack>

          <Stack w="370px" h="100%" bg="#FFFFFF" pr={4} pt={6} pl={3}>
            <Stack spacing={0}>
              <Stack direction="row" justify="space-between" align="center" >
                <Text color="#737373" fontSize="sm">Nuevo | 246 vendidos</Text>
                <Icon
                  as={isFill ? BsHeartFill : BsHeart}
                  color="#3483FA"
                  height={5}
                  width={5}
                  cursor="pointer"
                  onClick={handleClick}
                />
              </Stack>
              <Stack spacing={-1}>
                <Text fontSize="21.5" fontWeight="semibold">Xiaomi Redmi Note 10 Dual SIM</Text>
                <Text fontSize="21.5" fontWeight="semibold">128 GB gris ónix 6 GB RAM</Text>
                {/* REVISAR COMO PUEDO HACER UN SOLO TEXTO, Buscar propiedades para achicar el espacio entre renglones */}
              </Stack>
            </Stack>

            <Stack spacing={0}>
              <Stack direction="row">
                <Stack direction="row" color="#3483FA" spacing={1}>
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarHalf} fontSize="16px" />
                </Stack>
                <Text color="#737373" fontSize="sm"> 56 opiniones</Text>
              </Stack>

              <Stack spacing={-1}>
                <Text fontSize="4xl">$ 69.999</Text>
                <Stack direction="row">
                  <Text fontSize="1xl">en </Text>
                  <Text fontSize="1xl">12x $ 9.926</Text>
                </Stack>
              </Stack>

              <Text fontSize="sm" color="#3483FA">Ver los medios de pago</Text>

            </Stack>

            <Stack>
              <Stack pt={3}>
                <Text>Memoria interna: {<b>128 GB</b>}</Text>
                <Stack direction="row">
                  <Button colorScheme="black" size="sm" variant="outline" borderColor="#3483FA" >64 GB</Button>
                  <Button colorScheme="black" size="sm" variant="outline" borderColor="#3483FA" >128 GB</Button>
                </Stack>
              </Stack>

              <Stack pt={1}>
                <Text>Memoria RAM: {<b>6 GB</b>}</Text>
                <Stack direction="row">
                  <Button colorScheme="black" size="sm" variant="outline" borderColor="#3483FA">4 GB</Button>
                  <Button colorScheme="black" size="sm" variant="outline" borderColor="#3483FA">6 GB</Button>
                </Stack>
              </Stack>
            </Stack>

            <Stack pt={1}>
              <Text>Color: {<b>Gris ónix</b>}</Text>
              <Stack direction="row">
                <Box>
                  <Image src={note10} height={50} width={50} cursor="pointer" objectFit="contain" />
                </Box>
              </Stack>
            </Stack>

            <Stack pt={5} fontSize="sm" lineHeight="6">
              <Text fontWeight="semibold">Lo que tenés que saber de este producto</Text>
              <Stack lineHeight="8" pl={4}>
                <ul>
                  <li><Text lineHeight="5">Dispositivo liberado para que elijas la compañía telefónica que prefieras.</Text></li>
                  <li><Text lineHeight="5">Pantalla AMOLED de 6.43".</Text></li>
                  <li><Text lineHeight="5">Tiene 4 cámaras traseras de 48Mpx/8Mpx/2Mpx/2Mpx.</Text></li>
                  <li><Text lineHeight="5">Cámara delantera de 13Mpx.</Text></li>
                  <li><Text lineHeight="5">Procesador Snapdragon 678 Octa-Core de 2.2GHz con 4GB de RAM.</Text></li>
                  <li><Text lineHeight="5">Batería de 5000mAh.</Text></li>
                  <li><Text lineHeight="5">Memoria interna de 64GB.</Text></li>
                  <li><Text lineHeight="5">Resistente al agua.</Text></li>
                  <li><Text lineHeight="5">Con reconocimiento facial y sensor de huella dactilar.</Text></li>
                  <li><Text lineHeight="5">Resistente al polvo.</Text></li>
                </ul>
                <Link to="/">Ver características</Link>
              </Stack>
            </Stack>

          </Stack>
        </Stack>

        <Stack
          w="304px"
          h="72%"
          boxShadow="sm"
          borderRadius="10"
          border="1px"
          borderColor="gray.200"
        >
          <Stack pt={6} spacing={1}>

            <Stack direction="row" pt={1} pl={4}>
              <Icon as={BsTruck} color="#00AA67" height={5} width={5} />
              <Text fontSize="md" color="#00AA67">Envío gratis a todo el país</Text>
            </Stack>

            <Stack pl={12} lineHeight="3">
              <Text fontSize="sm" color="gray.500">Conocé los tiempos y las formas de </Text>
              <Text fontSize="sm" color="gray.500">envío.</Text>
            </Stack>

            <Stack direction="row" pl={12} spacing={1}>
              <Icon as={GoLocation} color="#3483FA" w={4} h={4}></Icon>
              <Text fontSize="sm" color="#3483FA">Calcular cuando llega</Text>
            </Stack>

            <Stack pt={6} pl={5} spacing={0}>
              <Text fontSize="sm">Vendido por <span style={{ color: "#3483FA", textDecoration: "none" }}>ELECTRO-WORLD GROUP</span></Text>
              <Text fontSize="sm">MercadoLíder | 46.010 ventas</Text>
              <Text fontSize="xs" color="gray.500">Hace Factura A</Text>
            </Stack>

            <Stack pt={4} pl={5} spacing={5}>
              <Text fontWeight="semibold">Stock disponible</Text>
              <Text>Cantidad: <span style={{ fontWeight: "600" }}>1 unidad</span></Text>
            </Stack>

            <Stack pt={7} alignItems="center">
              <PopUpPago />
              <Button
                w="275px"
                h="48px"
                colorScheme="blue"
                variant="outline"
                bgColor="blue.50"
                color="#3483FA"
                onClick={() =>{
                  Toast.fire({
                    icon: 'success',
                    title: 'Agregado al carrito',
                  })
                }}
              >
                Agregar al carrito
              </Button>
            </Stack>

            <Stack pt={6} pl={4} pr={2} spacing={4}>
              <Stack direction="row">
                <Stack>
                  <Icon as={BsArrowReturnLeft} w={4} h={4} color="gray.600"></Icon>
                </Stack>
                <Stack>
                  <Text fontSize="sm" color="#3483FA">Devolución gratis. <span style={{ color: "#718096" }}>Tenés 30 días desde que lo recibís.</span></Text>
                </Stack>
              </Stack>

              <Stack direction="row">
                <Stack>
                  <Icon as={BsShieldCheck} w={4} h={4}></Icon>
                </Stack>
                <Stack>
                  <Text fontSize="sm" color="#3483FA">Compra Protegida, <span style={{ color: "#718096" }}>recibí el producto que esperabas o te devolvemos tu dinero</span></Text>
                </Stack>
              </Stack>

              <Stack direction="row">
                <Stack>
                  <Icon as={BsTrophy} w={4} h={4}></Icon>
                </Stack>
                <Stack>
                  <Text fontSize="sm" color="#3483FA">Mercado Puntos. <span style={{ color: "#718096" }}>Sumás 638 puntos.</span></Text>
                </Stack>
              </Stack>

              <Stack direction="row">
                <Stack>
                  <Icon as={BiMedal} w={4} h={4}></Icon>
                </Stack>
                <Stack>
                  <Text fontSize="sm" color="#718096">6 meses de garantía de fábrica.</Text>
                </Stack>
              </Stack>

            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
      <Text>AAAA</Text>
    </Container>
  )
}

export default DetailProduct