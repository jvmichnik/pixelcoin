import { Flex, Text } from "@chakra-ui/react";
import { FaSortDown, FaSortUp } from 'react-icons/fa'

interface ValueVariationProps{
  children: number;
  fontSize?: number;
}

export function ValueVariation({ children, fontSize = 1 } : ValueVariationProps){
  const positive = children >= 0;

  return (
    <Flex alignItems="center" fontSize={`${fontSize}rem`} justifyContent="flex-end" fontWeight="bold" color={positive ? "green.500" : "red.500" }>
        {positive ? <FaSortUp style={{marginTop: 4}} /> : <FaSortDown style={{marginBottom: 7}}  /> }
        {children.toFixed(1)}
    </Flex>
  );
}