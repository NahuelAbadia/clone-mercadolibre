import React from 'react';
import { Icon, Image, Stack, Text } from "@chakra-ui/react";
import { GoLocation } from "react-icons/go";
import { FaMedal } from "react-icons/fa";
import infoVendedor from "../../../assets/infoVendedor.png"

const SellerInfo = ({ productInfo }) => {
  return (
    <Stack
      px={4}
      py={6}
      spacing={5}
      borderWidth="1px"
      borderRadius="lg"
    >
      <Text fontSize="lg">Información sobre el vendedor</Text>
      <Stack color="green.400" direction="row">
        <Icon as={FaMedal} />
        <Stack lineHeight="100%" spacing={1}>
          <Text fontWeight={500}>MercadoLíder Platinum</Text>
          <Text color="gray.500" fontSize="sm">
            ¡Es uno de los mejores del sitio!
          </Text>
        </Stack>
      </Stack>

      <Stack direction="row">
        <Icon as={GoLocation} />
        <Stack lineHeight="100%" spacing={1}>
          <Text>Ubicación</Text>
          <Text color="gray.500" fontSize="sm">
            {productInfo.seller_address?.city.name}, {productInfo.seller_address?.state.name}
          </Text>
        </Stack>
      </Stack>

      <Stack direction="row">
        <Image
          src={infoVendedor}
          alt="..."
          objectFit="contain"
        />
      </Stack>

      <Text color="#3483FA" fontSize="sm">
        Ver más datos de este vendedor
      </Text>
    </Stack>
  );
}

export default SellerInfo