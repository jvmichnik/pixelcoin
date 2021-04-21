import { Flex, Text } from "@chakra-ui/react";
import { RiArrowDropUpFill, RiArrowDropDownFill } from 'react-icons/ri'

interface ValueVariationProps{
  children: React.ReactNode;
  positive?: boolean;
}

export function ValueVariation({ children, positive = false } : ValueVariationProps){
  return (
    <Text color={positive ? "green.500" : "red.500" } fontWeight="black">
      <Flex justifyContent="flex-end" alignItems="center">
        {positive ? <RiArrowDropUpFill size="2rem" /> : <RiArrowDropDownFill size="2rem" /> }
        {children}
      </Flex>
    </Text>
  );
}