import '../App.css'
import {useNavigate} from 'react-router-dom';
import { ChakraProvider, calc } from '@chakra-ui/react'
import { Box,useDisclosure } from '@chakra-ui/react'
import { Text, Flex , HStack, Center, VStack} from '@chakra-ui/react'



export default function Success(){
  return (
    <ChakraProvider ><Center><Box bg='green.300' w="100%">
        <Box bg='green.300' pl={"25%"} align="center" alignSelf={"center"} textAlign={'center'} h='calc(95vh)' w='calc(200vh)'>
        <Flex minHeight="100vh"  minWidth="100%">
          <img height ="80%" src="https://i.ibb.co/L6sycG2/upi-1701140754335.png"></img>
        <HStack spacing={2}>
            
            <Text  align='center' fontSize='6xl'>Placed Order Successfully!</Text>
        </HStack>
        </Flex>
        </Box> </Box></Center>
        <Box position={"absolute"} h="calc('5vh')" w="100%" zIndex={10}>For more information, contact us at +91 9591062626</Box>
    </ChakraProvider>
  )
};
