import { Box, Grid, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { formatCurrency } from "../../../_utils/format";

import { ValueChart } from '../../Chart/ValueChart'
import { ValueVariation } from "../../Text/ValueVariation";

interface CoinCardProps {
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  percent1h: number;
  percent24h: number;
  percent7d: number;
  chart7d: number[];
}

export function CoinCard({ symbol, name, image, currentPrice, percent1h, percent24h, percent7d, chart7d = [] } : CoinCardProps){
  const bg = useColorModeValue("white", "gray.800");

  return (
    <Flex  
      bg={bg}
      shadow="0 0 20px rgba(0, 0, 0, 0.05)"
      borderRadius="2xl"
      py="5"
      px="8"
      mx="1"     
    >
      <Flex flexDirection="column">
        <Flex alignItems="center" minW={'10rem'}>
          <Box minW="40px">
            <img src={image} width="40px" height="40px" />
          </Box>
          <Box pl="3" lineHeight="normal">
            <Text fontSize="1.2rem" fontWeight="medium" maxW={'7rem'} isTruncated>{name}</Text>
            <Text color="gray.500" fontSize="0.9rem" casing="uppercase">{symbol}</Text>
          </Box>
        </Flex>
        <Flex h="100%" lineHeight="1.3" flexDirection="column" justifyContent="flex-end">
          <Text color="gray.500" fontSize="medium" fontWeight="normal">Valor</Text>
          <Text as="strong" fontSize="1.4rem">{formatCurrency(currentPrice)}</Text>
        </Flex>
      </Flex>
      <Box w="100%">
        <Grid autoFlow="column" gridGap="2" px="2">
          <Box>
            <Text fontSize="small" textAlign="right">1h</Text>
            <ValueVariation fontSize={0.9}>{percent1h}</ValueVariation>
          </Box>
          <Box>
            <Text fontSize="small" textAlign="right">24h</Text>
            <ValueVariation fontSize={0.9}>{percent24h}</ValueVariation>
          </Box>
          <Box>
            <Text fontSize="small" textAlign="right">7d</Text>
            <ValueVariation fontSize={0.9}>{percent7d}</ValueVariation>
          </Box>
        </Grid>
        <Box width="100%" height="100%" maxH="70px">
          <ValueChart data={chart7d.map(x => ({ value: x }))}/>          
        </Box>
      </Box>
    </Flex>
  );
}