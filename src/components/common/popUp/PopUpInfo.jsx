import React from 'react'
import {
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
} from "@chakra-ui/react"
import { AiOutlineCalendar } from "react-icons/ai"
import { BsArrowReturnLeft, BsShieldCheck } from "react-icons/bs"
import { RiMoneyDollarCircleLine } from "react-icons/ri"

const PopUpInfo = ({ modal, onClose, isOpen }) => {

  return (
    <Stack>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent
          maxWidth="840px"
          w="100%"
          h="370px"
        >
          <ModalHeader
            px={14}
            pt={14}
            fontSize={"3xl"}
          >
            {modal === true ? "Devoluciones gratis" : "Garantía"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {modal === true ?
              <Stack
                direction="row"
                spacing={6}
                pl={12}
                pt={6}
                fontSize="lg"
              >
                <Stack spacing={4}>
                  <Icon
                    as={AiOutlineCalendar}
                    h={8}
                    w={8}
                  />
                  <Icon
                    as={BsArrowReturnLeft}
                    h={8}
                    w={8}
                  />
                  <Icon
                    as={RiMoneyDollarCircleLine}
                    h={8}
                    w={8}
                  />
                </Stack>
                <Stack spacing={6} >
                  <Text>Tenés 30 días desde que te llega</Text>
                  <Text>Podés enviarlo desde tu correo más cercano.</Text>
                  <Text>Para devolverlo, el producto debe estar tal cual lo recibiste.</Text>
                </Stack>
              </Stack>
              :
              <Stack
                spacing={7}
                px={12}
                fontSize="lg"
              >
                <Stack
                  direction="row"
                  spacing={5}
                  pt={1}
                >
                  <Icon
                    as={BsShieldCheck}
                    h={8}
                    w={8}
                    mt={1}
                    color="yellow.400"
                  />
                  <Text fontSize="md"><span style={{ fontWeight: "600" }}>Tu compra está protegida.</span> Si hay algún problema o no recibís el producto tal como lo compraste, te devolvemos el dinero que pagaste.</Text>
                </Stack>
                <Stack>
                  <Text fontWeight={"bold"}>Estamos para ayudarte, siempre</Text>
                  <Text fontSize="md">Te acompañamos hasta que recibas lo que compraste y nos avises que estás conforme. Si surge algún problema, solo tenés que avisarnos.</Text>
                </Stack>
              </Stack>
            }
          </ModalBody>
        </ModalContent>
      </Modal>

    </Stack>
  )
}

export default PopUpInfo
