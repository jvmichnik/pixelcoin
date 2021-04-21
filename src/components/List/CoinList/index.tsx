import { Flex } from "@chakra-ui/react";
import { Box, Table, Tbody, Thead, Tr, Th } from "@chakra-ui/react";

import { CoinItem } from './CoinItem'

export function CoinList(){
  return (
    <Flex
      bg="white"
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
              <Th py="0" textAlign="right">Últimos 7 dias</Th>
            </Tr>
          </Thead>
          <Tbody>
            <CoinItem name="Bitcoin" symbol="btc" value={200934.34} volume={200934.34} />
            <CoinItem name="Ethereum" symbol="eth" value={200934.34} volume={200934.34} />
            <CoinItem name="Binance Coin" symbol="bnb" value={200934.34} volume={200934.34} />
            <CoinItem name="Tether" symbol="xrp" value={200934.34} volume={200934.34} />
          </Tbody>
        </Table>
      </Box>
    </Flex>
  );
}