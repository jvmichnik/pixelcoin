import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { 
  ResponsiveContainer,
  AreaChart, 
  Area
} from 'recharts';

interface CoinCardProps {
  name: string;
  symbol: string;
  value: number;
}

export function CoinCard({ symbol, name, value } : CoinCardProps){

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
    <Flex 
      bg="white"
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      borderRadius="2xl"
      justifyContent="space-between"
      py={{ base: "4", md: "6" }}
      px={{ base: "5", md: "8" }}
      mx="2"
    >
      <Box>
        <Flex alignItems="center">
          <Flex minW="45px">
            <Image src={`/coins/${symbol}.webp`} width="45px" height="45px" />
          </Flex>
          <Box pl="3" lineHeight="normal">
            <Text fontSize="1.3rem" fontWeight="medium" maxW="110px" isTruncated>{name}</Text>
            <Text color="gray.500" fontSize="medium" casing="uppercase">{symbol}</Text>
          </Box>
        </Flex>
        <Box pt="3" lineHeight="normal">
          <Text color="gray.500" fontSize="medium" fontWeight="normal">Valor</Text>
          <Text as="strong" fontSize="1.4rem">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)}</Text>
        </Box>
      </Box>
      <Box 
        w="100%" 
        pl={4}
        // maxW={{ base: "100px", sm: "200px", md: "400px", lg: "230px", xl: "150px"}}
      >
        <ResponsiveContainer width="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </Flex>
  );
}