import React from 'react'
import { Box, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, precio, cuotas, image }) => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <Box onClick={handleClick} cursor="pointer">
      <Stack
        h="330px"
        py={6}
        align="center"
        direction="column"
        boxShadow={"lg"}
        bgColor="white"
        divider={<StackDivider borderColor='gray.200' pt={7} />}
        m={{ base: "auto" }}
        w={{ base: "100%", sm: "100%", md: "100%", lg: "225px" }}
      >
        <Stack h={{ base: "35%", sm: "40%", md: "40%", lg: "60%" }}  >
          <Image
            src={image[1]}
            w="100%"
            h="200px"
            objectFit={"contain"}
          />
        </Stack>

        <Stack
          h={"40%"}
          w={"100%"}
          pl={4}
          spacing={{ base: -1, sm: -1, md: -1, lg: 0 }}
          justifyContent={"center"}
        >
          <Text
            fontSize={{ base: "18px", sm: "20px", md: "20px", lg: "26px" }}
          >
            {precio}
          </Text>

          <Stack spacing={-1} fontSize={"sm"}>
            <Text >
              {cuotas}
            </Text>

            <Text color="#00a650" fontWeight={"semibold"}>
              Envío gratis
            </Text>
          </Stack>
        </Stack>

      </Stack>
    </Box>
  )
}

export default Card