import Image from "next/image";
import { Tr, Td, Box, Flex, Text } from "@chakra-ui/react";
import { ValueVariation } from '../../../../components/Text/ValueVariation'
import { 
  AreaChart, 
  Area
} from 'recharts';

interface CoinItemProps{
  name: string;
  symbol: string;
  value: number;
  volume: number;
}

export function CoinItem({ symbol, name, value, volume }: CoinItemProps){
  
  const data = [
    {
      name: 'Page A',
      uv: 1
    },
    {
      name: 'Page B',
      uv: 2
    },
    {
      name: 'Page C',
      uv: 3
    },
    {
      name: 'Page D',
      uv: 2
    },
    {
      name: 'Page E',
      uv: 6
    },
    {
      name: 'Page F',
      uv: 7
    },
    {
      name: 'Page G',
      uv: 10
    },
  ];

  return (
    <Tr>
      <Td p="0">
        <Flex w="40px" margin="auto">
          <Image src={`/coins/${symbol}.webp`} height="100%" width="100%" />
        </Flex>
      </Td>
      <Td px="1">
        <Box lineHeight="normal">
          <Text as="strong" fontSize="medium" fontWeight="medium" noOfLines={1} maxWidth="100px">{name}</Text>
          <Text color="gray.500" fontSize="small" casing="uppercase">{symbol}</Text>
        </Box>
      </Td>
      <Td textAlign="right"><Text as="strong" fontSize="medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}</Text></Td>
      <Td textAlign="right"><Text fontWeight="medium"><ValueVariation positive>1,5%</ValueVariation></Text></Td>
      <Td textAlign="right"><Text fontWeight="medium"><ValueVariation>1,5%</ValueVariation></Text></Td>
      <Td textAlign="right"><Text fontWeight="medium"><ValueVariation>1,5%</ValueVariation></Text></Td>
      <Td textAlign="right"><Text as="strong" fontSize="medium">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(volume)}</Text></Td>
      <Td p="0" textAlign="right">
        <Flex justifyContent="flex-end">
          <AreaChart width={150} height={70} data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </Flex>
      </Td>
    </Tr>
  );
}