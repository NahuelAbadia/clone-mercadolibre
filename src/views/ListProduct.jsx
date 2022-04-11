import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Icon, Image, Stack, Text, StackDivider, Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { BsHeart } from 'react-icons/bs'

const ListProduct = () => {

  const productState = useSelector(state => state.searchProduct)
  console.log(productState)

  const navigate = useNavigate()

  const numeroDecimal = new Intl.NumberFormat('es-ar')

  return (
    <>
      <Stack bgColor="#EBEBEB">
        <Container maxW="container.xl">
          <Stack
            direction={"row"}
            w="100%"
            // h="89vh"
            pb={10}
          >
            <Stack
              w="25%"
              pt={8}
              pl={5}
            >
              <Stack spacing={-1}>
                <Text fontSize="2xl" fontWeight={"semibold"} textTransform={"capitalize"} >{productState.query}</Text>
                <Text color="gray.600" fontSize="sm">
                  {numeroDecimal.format(productState.paging?.total)} resultados
                </Text>
              </Stack>

              <Stack spacing={7} pt={5}>
                {productState?.available_filters?.map(filtros => (
                  <Box key={filtros.id}>
                    <Text color="gray.800" fontSize="16px" fontWeight="medium">
                      {filtros.name}
                    </Text>
                    <Stack mt={2} spacing={2}>
                      {filtros?.values?.map((value) => (
                        <Text key={value.id} color="gray.600" fontSize="14px">
                          {value.name} ({value.results})
                        </Text>
                      ))}
                    </Stack>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Stack w="75%">
              <Stack
                pt={20}
                pr={6}
                spacing={0}
                divider={<StackDivider borderColor="gray.200" />}
              >
                {productState.results?.map((prod, index) => {
                  return <Stack
                    key={index}
                    p={5}
                    bg="white"
                    direction="row"
                    borderRadius="5px"
                    spacing={5}
                  >
                    <Stack>
                      <Image
                        h="160px"
                        w="160px"
                        objectFit="contain"
                        cursor={"pointer"}
                        src={`https://http2.mlstatic.com/D_NQ_NP_${prod.thumbnail_id}-V.webp`}
                        alt={prod.title}
                        onClick={() => {
                          window.scrollTo(0, 0)
                          navigate(`/product/${prod.id}`)
                        }}
                      />
                    </Stack>
                    <Stack spacing={1}>
                      <Stack
                        w="700px"
                        direction="row"
                        justifyContent="space-between"
                      >
                        <Text fontSize="xl" cursor={"pointer"}>{prod.title}</Text>
                        <Icon
                          as={BsHeart}
                          color="#3483FA"
                          height={5}
                          width={5}
                          cursor="pointer"
                        />
                      </Stack>
                      <Text fontSize="2xl" fontWeight={"semibold"} cursor={"pointer"}>$ {numeroDecimal.format(prod.price)}</Text>
                      <Text fontSize="sm" color="green.500">{prod.shipping.free_shipping ? "Envio gratis" : ""}</Text>
                    </Stack>
                  </Stack>
                })}
              </Stack>

            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}

export default ListProduct