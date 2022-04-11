import { Stack, Text, Image } from "@chakra-ui/react";

export default function PaymentMethods() {
  return (
    <Stack borderRadius="lg" borderWidth="1px" px="4" py="6" spacing="5">
      <Text fontSize="lg">Medios de pago</Text>
      <Text>Hasta 12 cuotas sin tarjeta</Text>
      <Stack>
        <Image
          alt="Mercado Crédito"
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-consumer_credits-medium_v_04d70df495.png"
          w="90px"
        />
      </Stack>
      <Text>Tarjetas de crédito</Text>
      <Stack direction="row" spacing={8}>
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-visa-medium_v_04d70df495.png"
          w="78px"
        />
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-amex-medium_v_04d70df495.png"
          w="24px"
        />
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-master-medium_v_04d70df495.png"
          w="33px"
        />
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-naranja-medium_v_04d70df495.png"
          w="20px"
        />
      </Stack>

      <Text>Tarjetas de débito</Text>
      <Stack direction="row" spacing={8}>
        <Image
          h="22px"
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-debvisa-medium_v_04d70df495.png"
          w="87px"
        />
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-debmaster-medium_v_04d70df495.png"
          w="53px"
        />
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-debcabal-medium_v_04d70df495.png"
          w="50px"
        />
        {/* <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-maestro-medium_v_04d70df495.png"
          w="30px"
        /> */}
      </Stack>

      <Text>Efectivo</Text>
      <Stack direction="row" spacing={8}>
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-rapipago-medium_v_04d70df495.png"
          w="76px"
        />
        <Image
          src="https://http2.mlstatic.com/secure/payment-logos/v2/payment-logo-mla-pagofacil-medium_v_04d70df495.png"
          w="22px"
        />
      </Stack>
      <Text color="#3483FA" fontSize="sm">
        Conocé otros medios de pago
      </Text>
    </Stack>
  );
}