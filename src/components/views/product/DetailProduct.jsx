import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { verDetalles } from '../../../redux/actions/action';
import { Image, Icon, Text, Stack, useDisclosure } from '@chakra-ui/react'
import {
  BsHeart,
  BsHeartFill,
  BsStarHalf,
  BsStarFill,
} from 'react-icons/bs'
import PopUpFoto from '../../common/popUp/PopUpFoto';
import Swal from 'sweetalert2';

const DetailProduct = ({ productInfo, setProductInfo }) => {

  const dispatch = useDispatch()

  const [isFill, setFill] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const handleClickFavorito = () => {
    setFill(!isFill)
    Toast.fire({
      icon: 'success',
      title: 'Agregado a favoritos',
    })
  }

  const handleClickEliminar = () => {
    setFill(!isFill)
    Toast.fire({
      icon: 'error',
      title: 'Eliminado de favoritos',
    })
  }

  let { id } = useParams()

  useEffect(() => {
    dispatch(verDetalles(id))
  }, [dispatch, id])

  const { isOpen, onOpen, onClose } = useDisclosure()

  console.log(productInfo)

  //función que toma el número y devuelve una cadena separada por comas
  const numeroDecimal = new Intl.NumberFormat('es-ar')

  const [activeImage, setActiveImage] = useState(productInfo.pictures?.[0].url || null);

  useEffect(() => {
    setActiveImage(productInfo.pictures?.[0].url);
  }, [productInfo.pictures]);

  return (
    <>
      <Stack
        direction="row"
        pt={2}
        pl={4}
        w="100%"
        h="855px"
      >
        <Stack direction="row">
          <Stack direction="row">
            <Stack boxShadow="sm" pt={2} spacing={2} h={"35%"} >
              {productInfo.pictures?.map((img, index) => {
                return <Image
                  key={index}
                  src={img.url}
                  alt={img.id}
                  height={50}
                  width={50}
                  cursor="pointer"
                  objectFit="contain"
                  border="1px"
                  borderRadius="5px"
                  borderColor="gray.300"
                  _hover={{ border: "2px", borderColor: "blue.500" }}
                  onMouseEnter={() => setActiveImage(img.url)}
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
                src={activeImage}
                w="375px"
                h="450px"
                objectFit="contain"
                position={"sticky"}
                top="60px"
                cursor={"pointer"}
                onClick={onOpen}
              />
              <PopUpFoto
                image={activeImage}
                isOpen={isOpen}
                onClose={onClose}
              />
            </Stack>
          </Stack>

          <Stack
            w="370px"
            h="100%"
            pr={4}
            pt={6}
            pl={3}
          >
            <Stack spacing={0}>
              <Stack
                direction="row"
                justify="space-between"
                align="center"
              >
                <Text color="#737373" fontSize="sm">
                  {productInfo.condition === "new" ? "Nuevo" : "Usado"} | {productInfo.sold_quantity} vendidos
                </Text>
                <Icon
                  as={isFill ? BsHeartFill : BsHeart}
                  color="#3483FA"
                  height={5}
                  width={5}
                  cursor="pointer"
                  onClick={isFill ? handleClickEliminar : handleClickFavorito}
                />
              </Stack>
              <Stack spacing={-1} pt={2} pr={2}>
                <Text fontSize="21.5" fontWeight="semibold" lineHeight="7">{productInfo.title}</Text>
              </Stack>
            </Stack>

            <Stack spacing={0}>
              <Stack direction="row">
                <Stack
                  direction="row"
                  color="#3483FA"
                  spacing={1}
                  alignItems="center"
                >
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarFill} fontSize="16px" />
                  <Icon as={BsStarHalf} fontSize="16px" />
                </Stack>
                <Stack>
                  <Text color="#737373" fontSize="sm">
                    13 opiniones
                  </Text>
                </Stack>
              </Stack>

              <Stack spacing={-1}>
                <Text fontSize="4xl" pt={1}>${numeroDecimal.format(productInfo.price)}</Text>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Text fontSize="lg">en</Text>
                  <Text fontSize="lg" color="#00AA67">12 x {numeroDecimal.format(((productInfo.price * 1.7) / 12).toFixed(2))}</Text>
                </Stack>
              </Stack>

              <Text fontSize="sm" color="#3483FA" pt={1}>Ver los medios de pago</Text>

            </Stack>

            <Stack
              pt={5}
              fontSize="sm"
              lineHeight="6"
            >
              <Text fontWeight="semibold">Lo que tenés que saber de este producto</Text>
              <Stack lineHeight="8" pl={4}>
                {productInfo.attributes?.slice(0, 8)?.map(desc => {
                  return <ul>
                    <li><Text lineHeight="5">{desc.name} {desc.values[0].name}</Text></li>
                  </ul>
                })}
                <Text color="#3483FA">Ver características</Text>
              </Stack>
            </Stack>
          </Stack>

        </Stack>
      </Stack>
    </>
  )
}

export default DetailProduct