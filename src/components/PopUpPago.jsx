import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react"

const PopUpPago = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Stack>
      <Button
        w="275px"
        h="48px"
        colorScheme="blue"
        onClick={onOpen}
      >
        Comprar ahora
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="700px" w="100%" h="40rem" >
          <ModalHeader pt={5} fontSize={"2xl"}>Realizá tu compra</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack pt={2} spacing={10}>
              <Text align="center" fontSize="3xl">Compra tu producto con solo un <span style={{ color: 'blue' }}><b>CLICK</b></span></Text>
              <Text align="center" fontSize="2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, assumenda commodi quibusdam earum voluptate ullam dolorum magni aliquam officiis debitis!</Text>
              <Text align="center" fontSize="xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, fuga consequatur at quae eos ab accusamus maxime quos repellendus libero nostrum eveniet sed provident quod nemo vero perferendis, possimus nobis necessitatibus accusantium quam quis adipisci.</Text>
              <Text align="center" fontSize="2xl" color="yellow.400"> Lorem ipsum dolor sit amet.</Text>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant="ghost">Aceptar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      
    </Stack>
  )
}

export default PopUpPago
