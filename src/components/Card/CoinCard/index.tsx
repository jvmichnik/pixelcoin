import { 
  Box, 
  Grid, 
  Flex, 
  Text, 
  useColorModeValue,
  useDisclosure
} from "@chakra-ui/react";
import { formatCurrency } from "../../../_utils/format";

import { ValueChart } from '../../Chart/ValueChart'
import { ValueVariation } from "../../Text/ValueVariation";
import { ModalBase } from '../../ModalBase'
import { CoinConvert } from "../../Forms/CoinConvert";

interface Coin {
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
  percent1h: number;
  percent24h: number;
  percent7d: number;
  chart7d: number[];
}

interface CoinCardProps {
  coin: Coin;
}

export function CoinCard({ coin } : CoinCardProps){
  const bg = useColorModeValue("white", "gray.800");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            <img src={coin.image} width="40px" height="40px" />
          </Box>
          <Box pl="3" lineHeight="normal">
            <Text fontSize="1.2rem" fontWeight="medium" maxW={'7rem'} isTruncated>{coin.name}</Text>
            <Text color="gray.500" fontSize="0.9rem" casing="uppercase">{coin.symbol}</Text>
          </Box>
        </Flex>
        <Flex as="button" onClick={onOpen} h="100%" lineHeight="1.3" flexDirection="column" justifyContent="flex-end">
          <Text color="gray.500" fontSize="medium" fontWeight="normal">Valor</Text>
          <Text as="strong" fontSize="1.4rem">{formatCurrency(coin.currentPrice)}</Text>
        </Flex>
        <ModalBase isOpen={isOpen} onClose={onClose}>
          <CoinConvert coin={coin} />
        </ModalBase>
      </Flex>
      <Box w="100%">
        <Grid autoFlow="column" gridGap="2" px="2">
          <Box>
            <Text fontSize="small" textAlign="right">1h</Text>
            <ValueVariation fontSize={0.9}>{coin.percent1h}</ValueVariation>
          </Box>
          <Box>
            <Text fontSize="small" textAlign="right">24h</Text>
            <ValueVariation fontSize={0.9}>{coin.percent24h}</ValueVariation>
          </Box>
          <Box>
            <Text fontSize="small" textAlign="right">7d</Text>
            <ValueVariation fontSize={0.9}>{coin.percent7d}</ValueVariation>
          </Box>
        </Grid>
        <Box width="100%" height="100%" maxH="70px">
          <ValueChart data={coin.chart7d ? coin.chart7d.map(x => ({ value: x })) : []}/>          
        </Box>
      </Box>
    </Flex>
  );
}