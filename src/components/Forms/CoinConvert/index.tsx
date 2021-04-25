import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

interface Coin{
  name: string;
  symbol: string;
  image: string;
  currentPrice: number;
}

interface CoinConvertProps{
  coin: Coin;
}

export function CoinConvert({ coin }: CoinConvertProps){
  const coinRef = useRef();
  const currencyRef = useRef();

  const handleCoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valueConverted = Number(value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));
    coinRef.current.value = valueConverted;
    currencyRef.current.value = valueConverted * coin.currentPrice;
  } 

  useEffect(() => {
    coinRef.current.value = 1;
    currencyRef.current.value = coin.currentPrice;

    console.log(coinRef)
  },[])
  
  return (
    <Stack spacing={3} my="5">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.2em"
          children={<img src={coin.image} width="20px" />}
        />
        <Input ref={coinRef} onChange={handleCoinChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="0.9rem"
          children="R$"
        />
        <Input ref={currencyRef} />
      </InputGroup>
    </Stack>
  )
}