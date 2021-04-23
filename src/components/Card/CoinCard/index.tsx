import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import { 
  ResponsiveContainer,
  AreaChart, 
  Area
} from 'recharts';

interface CoinCardProps {
  name: string;
  symbol: string;
  currentPrice: number;
  chart7d: number[];
}

export function CoinCard({ symbol, name, currentPrice, chart7d = [] } : CoinCardProps){
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex 
      bg={bg}
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      borderRadius="2xl"
      justifyContent="space-between"
      py="6"
      px="8"
      mx="2"
    >
      <Box>
        <Flex alignItems="center">
          <Flex minW="45px">
            <Image src={`/coins/${symbol}.webp`} width="45px" height="45px" />
          </Flex>
          <Box pl="3" lineHeight="normal">
            <Text fontSize="1.2rem" fontWeight="medium" maxW="110px" isTruncated>{name}</Text>
            <Text color="gray.500" fontSize="0.9rem" casing="uppercase">{symbol}</Text>
          </Box>
        </Flex>
        <Box pt="3" lineHeight="normal">
          <Text color="gray.500" fontSize="medium" fontWeight="normal">Valor</Text>
          <Text as="strong" fontSize="1.4rem">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(currentPrice)}</Text>
        </Box>
      </Box>
      <Flex 
        w="100%" 
        maxW={{ base: 70, sm: 200, md: 460, lg: 220, xl: 150 }}
      >
        <ResponsiveContainer height="100%">
          <AreaChart data={chart7d.map(x => ({ value: x }))}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                <stop offset="100%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
}