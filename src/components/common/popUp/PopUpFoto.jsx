import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  Image,
} from "@chakra-ui/react"

const PopUpFoto = ({ image, isOpen, onClose, }) => {

  return (
    <Stack>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth="1160px" w="100%" h="765px" >
          <Image
            maxWidth="1160px"
            w="100%"
            h="765px"
            src={image}
            alt="..."
            objectFit={"contain"}
          />
        </ModalContent>
      </Modal>

    </Stack>
  )
}

export default PopUpFoto
