import { useEffect, useState, useMemo } from 'react';
import { 
  Container,
  Text,
  Box,
  Flex,
  Heading,
  Grid,
  GridItem, 
  useColorModeValue
} from '@chakra-ui/react';
import Head from 'next/head';
import { RiArrowRightLine } from 'react-icons/ri';

import { Header } from '../layout/Header';
import { useGetCoins } from '../hooks/useGetCoins'

import { CoinCard } from '../components/Card/CoinCard';
import { CoinList } from '../components/List/CoinList';

interface CoinItem{
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  volume: number;
  percent1h: number;
  percent24h: number;
  percent7d: number;
  chart7d: number[];
}

interface HomeProps{
  data: CoinItem[]
}

export function Home({ data }: HomeProps) {
  const gradient = useColorModeValue("linear(to-t, blue.200 0%, blue.50 40%)", "linear(to-t, purple.900 0%, gray.800 40%)");
  const text = useColorModeValue("purple.600", "purple.500");
  const subText = useColorModeValue("gray.600", "gray.300");

  const [coins, setCoins] = useState<CoinItem[]>(data);
  
  useEffect(() => {
    async function get() {
      const data = await useGetCoins();
      setCoins(data)
    }
    get();
  },[])

  const mainCards = useMemo(() => {
    return coins.slice(0, 4).map((coin, i) => {
      return (
        <GridItem display={i == 3 && { xl: "none" }}>
          <CoinCard 
            name={coin.name} 
            symbol={coin.symbol} 
            image={coin.image} 
            currentPrice={coin.currentPrice}  
            percent1h={coin.percent1h}
            percent24h={coin.percent24h}
            percent7d={coin.percent7d}
            chart7d={coin.chart7d} 
          />
        </GridItem>
      );
    })
  },[coins])

  return (
    <Box pb="20">
      <Head>
        <title>Pixelco.in</title>
      </Head>
      <Box bgGradient={gradient}>
        <Container  
          maxW="container.xl"                
        >       
          <Header />
          <Flex>
            <Flex
              w="100%"
              flexDirection="column"
              pl={{base: '10', md: '20'}}
              pt="10"
              pb="36"
            >
              <Heading size="2xl">
                A maneira mais <Text as="span" color={text}>fácil</Text> de acompanhar seus <Text as="span" color={text}>investimentos</Text>
              </Heading>
              <Heading size="md" pt="3" color={subText}>
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
          w="100%"
          gap={4}
          templateColumns={{ lg: "repeat(2, 1fr)", xl: "repeat(3, 1fr)"}}
        >
          {mainCards}
        </Grid>
        <Box mt="8">
          <CoinList items={coins} />
        </Box>
      </Container>

    </Box>
  )
}

export async function getServerSideProps() {
  const data = await useGetCoins()
  return { props: { data } }
}

export default Home;
