import React from 'react'
import { Button, Icon, Text, Stack, Select } from '@chakra-ui/react'
import {
  BsTruck,
  BsArrowReturnLeft,
  BsShieldCheck,
  BsTrophy
} from 'react-icons/bs'
import { GoLocation } from 'react-icons/go';
import { BiMedal } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { agregarProductos } from '../../../redux/actions/action';
// import Swal from 'sweetalert2';

const Sidebar = ({ productInfo }) => {

  const productDetail = useSelector(state => state.productDetail)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const Toast = Swal.mixin({
  //   toast: true,
  //   position: 'top-end',
  //   showConfirmButton: false,
  //   timer: 1500,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer)
  //     toast.addEventListener('mouseleave', Swal.resumeTimer)
  //   }
  // })

  // const agregarCarrito = () => {
  //   dispatch(agregarProductos(productDetail))
  //   Toast.fire({
  //     icon: 'success',
  //     title: 'Agregado al carrito',
  //   })
  // }

  const comprarProducto = () => {
    dispatch(agregarProductos(productDetail))
    navigate("/buying")
  }

  return (
    <Stack
      w="304px"
      h="78%"
      boxShadow="sm"
      borderRadius="10"
      border="1px"
      borderColor="gray.200"
    >
      <Stack py={6} spacing={1}>

        <Stack direction="row" pt={1} pl={4}>
          <Icon
            as={BsTruck}
            color="#00AA67"
            height={5}
            width={5}
          />
          <Text fontSize="md" color="#00AA67">{productInfo.shipping?.free_shipping ? "Envío gratis a todo el país" : ""} </Text>
        </Stack>

        <Stack pl={12} lineHeight="3">
          <Text fontSize="sm" color="gray.500">Conocé los tiempos y las formas de </Text>
          <Text fontSize="sm" color="gray.500">envío.</Text>
        </Stack>

        <Stack direction="row" pt={1} pl={12} spacing={1}>
          <Icon as={GoLocation} color="#3483FA" w={4} h={4}></Icon>
          <Text fontSize="sm" color="#3483FA">Calcular cuando llega</Text>
        </Stack>

        <Stack pt={5} pl={4} spacing={0}>
          <Text fontSize="sm">MercadoLíder | {productInfo.sold_quantity} ventas</Text>
          <Text fontSize="xs" color="gray.500">Hace Factura A</Text>
        </Stack>

        <Stack pt={4} pl={4} spacing={2}>
          <Text fontWeight="semibold">Stock disponible</Text>
          <Stack direction="row" alignItems="center" spacing={-3}>
            <Text>Cantidad:</Text>
            <Select
              placeholder='1 unidad'
              variant="ghost"
              w="45%"
              size={"md"}
              bgColor="transparent"
              fontWeight="semibold"
            >
              <option value='option1'>2 unidades</option>
              <option value='option2'>3 unidades</option>
              <option value='option3'>4 unidades</option>
              <option value='option3'>5 unidades</option>
              <option value='option3'>Más de 5 unidades</option>
            </Select>
            <Text fontSize="sm" color="gray.400">({productInfo.available_quantity} disponibles)</Text>
          </Stack>
        </Stack>

        <Stack pt={7} alignItems="center">
          <Button
            w="275px"
            h="48px"
            colorScheme="blue"
            onClick={comprarProducto}
          >
            Comprar ahora
          </Button>

          <Button
            w="275px"
            h="48px"
            colorScheme="blue"
            variant="outline"
            bgColor="blue.50"
            color="#3483FA"
            // onClick={agregarCarrito}
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
  )
}

export default Sidebar