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
  const coinRef = useRef<HTMLInputElement>();
  const currencyRef = useRef<HTMLInputElement>();

  const handleCoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const valueConverted = Number(value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1'));

    const coinElement = coinRef.current; 
    const currencyElement = coinRef.current; 
    coinElement.value = String(valueConverted);
    currencyElement.value = String(valueConverted * coin.currentPrice);
  } 

  useEffect(() => {
    const coinElement = coinRef.current; 
    const currencyElement = coinRef.current; 

    coinElement.value = String(1);
    currencyElement.value = String(coin.currentPrice);

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