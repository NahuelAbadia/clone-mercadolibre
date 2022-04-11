import React from 'react'
import { Button, Image, Stack, Text } from '@chakra-ui/react'
import { eliminarProductos } from '../../../redux/actions/action';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import Spinner from '../../common/spinner/Spinner';

const CardCarrito = ({ id, nombre, precio, image }) => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  const eliminarCarrito = (id) => {
    dispatch(eliminarProductos(id))
  }

  const navigate = useNavigate()

  return (
    <>
      {loading === false ?
        <Stack
          direction={"row"}
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            onClick={() => {
              navigate(`/product/${id}`)
            }}
          >
            <Image
              src={image[0]}
              alt={nombre}
              w={16}
              objectFit="contain"
              cursor="pointer"
            />
            <Text
              fontSize="xl"
              fontWeight={"semibold"}
              cursor="pointer"
            >
              {nombre}
            </Text>
          </Stack>
          <Stack direction="row" w="25%" justifyContent={"space-between"}>
            <Text fontSize="2xl" fontWeight={"semibold"}>{precio}</Text>
            <Button
              colorScheme="red"
              variant="outline"
              onClick={() => {
                eliminarCarrito(id)
              }}
            >
              Eliminar
            </Button>
            <Button
              colorScheme="blue"
              variant="outline"
              onClick={() => {
                navigate("/buying")
              }}
            >
              Comprar
            </Button>
          </Stack>
        </Stack>
        : <Spinner />}
    </>
  )
}

export default CardCarrito