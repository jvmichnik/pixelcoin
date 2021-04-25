import { Tr, Td, Box, Flex, Text } from "@chakra-ui/react";

import { ValueVariation } from '../../../../components/Text/ValueVariation'
import { ValueChart } from '../../../../components/Chart/ValueChart'
import { formatCurrency, formatCurrencyText } from "../../../../_utils/format";

interface CoinItemProps{
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

export function CoinItem({ symbol, name, image, currentPrice, volume, percent1h, percent24h, percent7d, marketCap, chart7d = [] }: CoinItemProps){
  return (
    <Tr>
      <Td p="0">
        <Box w="40px" margin="auto">
          <img src={image} height="100%" width="100%" />
        </Box>
      </Td>
      <Td px="1">
        <Box lineHeight="normal">
          <Text as="strong" fontSize="medium" fontWeight="medium" noOfLines={1} maxWidth="100px">{name}</Text>
          <Text color="gray.500" fontSize="small" casing="uppercase">{symbol}</Text>
        </Box>
      </Td>
      <Td textAlign="right"><Text as="strong" fontSize="medium">{formatCurrency(currentPrice)}</Text></Td>
      <Td textAlign="right"><Flex justifyContent="flex-end"><ValueVariation>{percent1h}</ValueVariation></Flex></Td>
      <Td textAlign="right"><Flex justifyContent="flex-end"><ValueVariation>{percent24h}</ValueVariation></Flex></Td>
      <Td textAlign="right"><Flex justifyContent="flex-end"><ValueVariation>{percent7d}</ValueVariation></Flex></Td>
      <Td textAlign="right"><Text as="strong" fontSize="medium">{formatCurrencyText(volume)}</Text></Td>
      <Td textAlign="right"><Text as="strong" fontSize="medium">{formatCurrencyText(marketCap)}</Text></Td>
      <Td p="0" w="170px">
        <Box p="0" h="70px">
          <ValueChart data={chart7d.map(x => ({ value: x }))}/>
        </Box>
      </Td>
    </Tr>
  );
}