import React from 'react'
import Carrousel from '../Carrousel'
import Ofertas from '../Ofertas'
import Suscribite from '../Suscribite'
import BenefiosMercadoPuntos from '../BenefiosMercadoPuntos'
import { Stack } from '@chakra-ui/react'

const Home = () => {
  return (
    <Stack justifyContent={"center"} alignItems="center" bgColor="#EBEBEB">
      <Carrousel />
      <Ofertas />
      <Suscribite />
      <BenefiosMercadoPuntos />
    </Stack>
  )
}

export default Home