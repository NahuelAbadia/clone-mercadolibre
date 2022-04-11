import React, { useState } from 'react'
import { Box, Button, Icon, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import PopUpInfo from '../../common/popUp/PopUpInfo';
import "../../../index.css"

const Messages = () => {

  const [tweets, setTweets] = useState([])

  const [tweet, setTweet] = useState({ texto: "" })

  const handleChange = e => {
    setTweet({
      ...tweet,
      [e.target.name]: e.target.value,
    })
  }

  const handleTweets = () => (setTweets((tweets) => tweets.concat(tweet)))

  const handleClick = () => {
    handleTweets()
    setTweet({ texto: "" })
  }

  const { isOpen, onOpen, onClose } = useDisclosure()

  const [modal, setModal] = useState(false)

  const devolucion = () => {
    setModal(true)
    onOpen()
  }

  const garantia = () => {
    setModal(false)
    onOpen()
  }

  const productDetail = useSelector(state => state.productDetail)

  return (
    <>
      <Stack pt={8} pb={12} px={12} bgColor="white">
        <Text fontSize="2xl" id="preguntas">Preguntas y respuestas</Text>
        <Stack spacing={6} pt={6}>
          <Text fontSize="lg" fontWeight={"semibold"}>¿Qué querés saber?</Text>
          <Stack direction="row">
            <Button
              variant="outline"
              colorScheme={"blue"}
              bgColor="blue.50"
              color="#3483FA"
              border="none"
              size="sm"
              onClick={devolucion}
            >
              Devolucion gratis
            </Button>

            <Button
              variant="outline"
              colorScheme={"blue"}
              bgColor="blue.50"
              color="#3483FA"
              border="none"
              size="sm"
              onClick={garantia}
            >
              Garantía
            </Button>

            <PopUpInfo
              modal={modal}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Stack>
        </Stack>
        <Stack direction="row" spacing={-1} pt={6} alignItems="center">
          <textarea
            className='textarea'
            name="texto"
            value={tweet.texto}
            onChange={handleChange}
          />
          <Box
            as="button"
            cursor="pointer"
            alignItems="center"
            borderRightRadius={"10px"}
            borderLeftColor="transparent"
            borderWidth={1}
            bgColor="#2968C8"
            display="flex"
            justifyContent="center"
            h={14}
            w={16}
            onClick={handleClick}
          >
            <Icon
              as={AiOutlineSearch}
              height={7}
              width={7}
              color="white"
            />
          </Box>
        </Stack>

        <Stack pt={6} w="100%" >
          <Text fontSize="lg" fontWeight={"semibold"}>Ultimas realizadas</Text>
          <AnimatePresence>
            {tweets.map((id) => (
              <Stack
                key={id}
                as={motion.div}
                layoutId={id}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                initial={{ scale: 0 }}
                py={2}
                pl={4}
                maxW={780}
                spacing={4}
                w="100%"
                direction="row"
              >
                <Stack spacing={0} w="100%" >
                  <Text fontWeight={"semibold"}>Nahuel Abadía</Text>
                  <Stack
                    w="100%"
                    direction="row"
                    alingItems="center"
                    justifyContent="space-between"
                  >
                    <Text pt={2} >{id.texto}</Text>
                    <Button
                      colorScheme={"red"}
                      variant="outline"
                      onClick={() => setTweets((tweets) => tweets.filter(tweet => tweet !== id))}
                    >
                      X
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </AnimatePresence>

          {productDetail.comentarios?.map((comentarios, index) => {
            return <Stack
              w="100%"
              pl={4}
              py={4}
              spacing={1}
              key={index}
            >
              <Text>{comentarios}</Text>
            </Stack>
          })}

          <Stack w="40%" py={4}>
            <Button
              as="a"
              href="#preguntas"
              colorScheme={"blue"}
              variant="outline"
              bgColor="blue.50"
              color="#3483FA"
              border="none"
              size="md"
              leftIcon={<AiOutlineQuestionCircle />}
            >
              ¿Como le pregunto al vendedor?
            </Button>
          </Stack>

        </Stack>
      </Stack>
    </>
  )
}

export default Messages