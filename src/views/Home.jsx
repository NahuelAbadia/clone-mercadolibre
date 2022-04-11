import React, { useEffect } from 'react'
import Carrousel from '../components/views/home/Carrousel'
import Tarjetas from '../components/views/home/Tarjetas'
import Ofertas from '../components/views/home/ofertas/Ofertas'
import Suscribite from '../components/views/home/Suscribite'
import BenefiosMercadoPuntos from '../components/views/home/BenefiosMercadoPuntos'
import { Container, Stack } from '@chakra-ui/react'

const Home = () => {

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    setTimeout(() => window.scrollTo(0, 0), 5);
    setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 5);
  }, [])

  return (
    <Stack justifyContent={"center"} alignItems="center" bgColor="#EBEBEB">
      <Carrousel />
      <Container maxW="container.xl">
        <Tarjetas />
        <Ofertas />
        <Suscribite />
        <BenefiosMercadoPuntos />
      </Container>
    </Stack>
  )
}

export default Home