import { Flex, useColorModeValue } from "@chakra-ui/react";
import { Box, Table, Tbody, Thead, Tr, Th } from "@chakra-ui/react";

import { CoinItem } from './CoinItem'

interface CoinItem{
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  volume: number;
  percent1h: number;
  percent24h: number;
  percent7d: number;
  marketCap: number;
  chart7d: number[];
}

interface CoinListProps{
  items: CoinItem[]
}

export function CoinList({ items = [] } :CoinListProps){
  const bg = useColorModeValue("white", "gray.800");
  
  return (
    <Flex
      bg={bg}
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      borderRadius="2xl"
      mx="2"
      px="10"
      py="8"
      
    >
      <Box width="100%" overflowX="auto">      
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th textAlign="right"></Th>
              <Th py="0" textAlign="right"></Th>
              <Th py="0" textAlign="right">Valor</Th>
              <Th py="0" textAlign="right">1h</Th>
              <Th py="0" textAlign="right">24h</Th>
              <Th py="0" textAlign="right">7d</Th>
              <Th py="0" textAlign="right">Volume 24h</Th>
              <Th py="0" textAlign="right">Cap. Mercado</Th>
              <Th py="0" textAlign="right">Últimos 7 dias</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              items.map(coin => <CoinItem 
                  key={coin.symbol}
                  name={coin.name} 
                  symbol={coin.symbol}
                  image={coin.image}
                  currentPrice={coin.currentPrice}
                  volume={coin.volume}
                  percent1h={coin.percent1h}
                  percent24h={coin.percent24h}
                  percent7d={coin.percent7d}
                  marketCap={coin.marketCap}
                  chart7d={coin.chart7d}
                />)
            }
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}