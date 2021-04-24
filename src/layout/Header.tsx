import Image from 'next/image'
import { Button, Box, Text, Flex, Link, Heading } from "@chakra-ui/react";
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function Header() {
  const { toggleColorMode } = useColorMode();
  const nameColor = useColorModeValue('#2d3748', '#fff');
  const itemMenuColor = useColorModeValue('gray.400', 'gray.200');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const isLoggedIn = false;

  return (
    <Flex 
      h="28"       
      alignItems="center"
      justifyContent="space-between"
    >
      
      <Flex alignItems="center">
        <Image src="/logo.svg" height="40px" width="40px" alt="Logo pixel coin" />
        <Heading as="h1" letterSpacing="-1.3px">
          <Text as="strong" ml="2" fontSize="36px" color={nameColor}>pixel</Text>
          <Text as="strong" fontSize="36px" color="#8440ad">co.in</Text>
        </Heading>
      </Flex>

      <Flex>
        <Flex mr="3">        
          <IconButton
            size="md"
            mr="4"
            fontSize="lg"
            aria-label={`Switch to color mode`}
            variant="ghost"
            color={itemMenuColor}
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}
          />
        </Flex>
        <Box display={{base: 'none', md: 'flex'}}>

        {
          !isLoggedIn ? 
          <Flex alignItems="center"> 
            <Link mr="8">Cadastrar</Link>       
            <Button borderColor="purple.500" color="purple.500" px="8" variant="outline">
              Entrar
            </Button>
          </Flex> :
          <Text color="gray.400" fontWeight="medium">João Vitor</Text> 
        }      
        </Box>
      </Flex> 
    </Flex>
  );
}