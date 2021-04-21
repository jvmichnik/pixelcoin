import { 
  Container,
  Text,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem 
} from '@chakra-ui/react';
import Head from 'next/head';
import { RiArrowRightLine } from 'react-icons/ri';

import { Header } from '../layout/Header';

import { CoinCard } from '../components/Card/CoinCard';
import { CoinList } from '../components/List/CoinList';

export default function Home() {
  return (
    <Box pb="20">
      <Head>
        <title>Pixel Coin</title>
      </Head>
      <Box bgGradient="linear(to-t, blue.100 0%, blue.50 15%)">
        <Container  
          maxW="container.xl"                
        >       
          <Header />
          <Flex>
            <Flex
              w="100%"
              flexDirection="column"
              pl="20"
              pt="10"
              pb="36"
            >
              <Heading size="3xl">
                A maneira mais <Text as="span" color="purple.700">fácil</Text> de acompanhar seus <Text as="span" color="purple.700">investimentos</Text>
              </Heading>
              <Heading size="md" pt="3" color="gray.600">
                Acompanhe em tempo real seus investimentos em criptomoedas
              </Heading>
              <Box mt="8">
                <Box 
                  as="button"
                  color="white"
                  bg="purple.600"
                  fontSize="1.2rem"
                  px="2rem"
                  py="10px"
                  w="100%"
                  maxW="300px"
                  borderRadius="lg"
                  _hover={{ bg: "purple.700" }}
                >
                  <Flex alignItems="center" justifyContent="space-between" w="100%">
                    Começar agora
                    <RiArrowRightLine />
                  </Flex>
                </Box>
              </Box>
            </Flex>
            <Box w="100%" ></Box>
          </Flex>
        </Container>
      </Box>
      <Container maxW="container.xl" mt="-20">
        <Grid 
          gap={4}
          templateColumns={{ lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)"}}
        >
          <GridItem>
            <CoinCard name="Bitcoin" symbol="btc" value={203093.34} />
          </GridItem>
          <GridItem>
            <CoinCard name="Ethereum" symbol="eth" value={200394.34} />
          </GridItem>
          <GridItem>
            <CoinCard name="Binance Coin" symbol="bnb" value={203094.34} />
          </GridItem>
          <GridItem display={{ xl: "none" }}>
            <CoinCard name="Tether" symbol="xrp" value={200934.34} />
          </GridItem>
        </Grid>
        <Box mt="8">
          <CoinList />
        </Box>
      </Container>

    </Box>
  )
}
