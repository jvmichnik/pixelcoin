import { Tr, Td, Box, Flex, Text } from "@chakra-ui/react";
import { ValueVariation } from '../../../../components/Text/ValueVariation'
import { 
  AreaChart, 
  Area
} from 'recharts';

interface CoinItemProps{
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

export function CoinItem({ symbol, name, image, currentPrice, volume, percent1h, percent24h, percent7d, chart7d = [] }: CoinItemProps){
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
      <Td textAlign="right"><Text as="strong" fontSize="medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentPrice)}</Text></Td>
      <Td textAlign="right"><Flex justifyContent="flex-end"><ValueVariation>{percent1h}</ValueVariation></Flex></Td>
      <Td textAlign="right"><Flex justifyContent="flex-end"><ValueVariation>{percent24h}</ValueVariation></Flex></Td>
      <Td textAlign="right"><Flex justifyContent="flex-end"><ValueVariation>{percent7d}</ValueVariation></Flex></Td>
      <Td textAlign="right"><Text as="strong" fontSize="medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(volume)}</Text></Td>
      <Td p="0" textAlign="right">
        <Flex justifyContent="flex-end">
          <AreaChart width={150} height={70} data={chart7d.map(x => ({ value: x }))}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </Flex>
      </Td>
    </Tr>
  );
}