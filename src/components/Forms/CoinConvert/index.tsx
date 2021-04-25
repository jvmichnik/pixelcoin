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

  const convertValue = (valueTo, operation, fixed = null) => {

    const valueReplaced = valueTo.replace(/[^0-9,]/g, '').replace(/(\..*?)\..*/g, '$1');
    const value = Number(valueReplaced.replace(',', '.'));

    var operationValue = operation(value, coin.currentPrice);
    operationValue = fixed && !Number.isInteger(operationValue)
                      ? operationValue.toFixed(operationValue > 1000 ? 2 : fixed)
                      : String(operationValue);

    return [valueReplaced, operationValue.replace('.', ',')];
  }

  const handleCoinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const [valueText, valueConverted] = convertValue(value, (a: number, b: number) => a * b, 2);

    const coinElement = coinRef.current; 
    const currencyElement = currencyRef.current; 
    
    coinElement.value = valueText;
    currencyElement.value = valueConverted
  } 

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const [valueText, valueConverted] = convertValue(value, (a: number, b: number) => a / b, 6);
    const coinElement = coinRef.current; 
    const currencyElement = currencyRef.current; 
    
    currencyElement.value = valueText;
    coinElement.value = valueConverted
  } 

  useEffect(() => {
    const coinElement = coinRef.current; 
    const currencyElement = currencyRef.current; 

    coinElement.value = String(1);
    currencyElement.value = String(coin.currentPrice);
  },[])
  
  return (
    <Stack spacing={3} my="5">
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          children={<img src={coin.image} width="50px" />}
          mx="4"
          height="100%"
        />
        <Input pl="20" ref={coinRef} height="70" fontSize="1.8rem" onChange={handleCoinChange} />
      </InputGroup>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.300"
          fontSize="1.8rem"
          mx="4"
          children="R$"
          height="100%"
        />
        <Input pl="20" ref={currencyRef} height="70" fontSize="1.8rem" onChange={handleCurrencyChange} />
      </InputGroup>
    </Stack>
  )
}