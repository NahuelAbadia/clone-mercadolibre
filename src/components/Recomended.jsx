import React from 'react'
import { Container, Stack, Text } from '@chakra-ui/layout'

const Recomended = () => {
  return (
    <Stack pt={4}>
      <Container alignSelf="center" maxWidth="container.xl" paddingX={10}>
        <Stack fontSize="sm" >
          <Text><span style={{ fontWeight: "600" }}>También puede interesarte:</span> telefono panasonic - iphone11 pro - celulares samsung a22 - a20 - redmi note 10 pro - telefono celular basico</Text>
        </Stack>
        <Stack direction="row" fontSize="sm" pt={4} pb={1} justify="space-between">
          <Text>Volver al listado  |  <span style={{color:"#3483FA"}}>Celulares y Teléfonos  {'>'}  Celulares y Smartphones  {'>'}  XiaomiNote  {'>'}  10</span></Text>
          <Stack direction="row">
            <Text color="#3483FA">Compartir | Vender uno igual</Text>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  )
}

export default Recomended