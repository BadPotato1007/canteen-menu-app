import '../App.css'
import {useNavigate} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import { Box,useDisclosure } from '@chakra-ui/react'
import { Text, Flex , HStack, Center, VStack} from '@chakra-ui/react'



export default function Success(){
  return (
    <ChakraProvider ><Center><Box bg='green.300' w="100%">
        <Box bg='green.300' pl={"25%"} align="center" alignSelf={"center"} textAlign={'center'} h='calc(100vh)' w='calc(200vh)'>
        <Flex minHeight="100vh"  minWidth="100%">
        <HStack spacing={2}>
            <Text  align='center' fontSize='6xl'>Placed Order Successfully!</Text>
        </HStack>
        </Flex>
        </Box> </Box></Center>
    </ChakraProvider>
  )
};
