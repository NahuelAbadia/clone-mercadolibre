import React from "react";
import { Stack, Table, Tbody, Tr, Td, Text, } from "@chakra-ui/react";

const DescriptionProduct = ({ productInfo }) => {
  return (
    <Stack pt={8} pb={12} px={12}>
      <Text pb={6} fontSize="24px">Características principales</Text>
      <Stack>
        <Table borderRadius="md" overflow="hidden" >
          <Tbody  >
            {productInfo.attributes?.slice(8, 20)?.map(desc => (
              <Tr
                key={desc.id}
                css={{
                  "&:nth-of-type(2n+1) :first-of-type": {
                    backgroundColor: "#ebebeb",
                  },
                  "&:nth-of-type(2n) :first-of-type": {
                    backgroundColor: "#f5f5f5",
                  },
                  "&:nth-of-type(2n+1) :nth-of-type(2)": {
                    backgroundColor: "#f5f5f5",
                  },
                }}
              >
                <Td>{desc.name}</Td>
                <Td textAlign="left" w="550px">
                  {desc.values[0].name}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Stack>
    </Stack>
  );
}

export default DescriptionProduct