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
    operationValue = fixed && !Number.isInteger(operationValue) ? operationValue.toFixed(fixed) : String(operationValue);

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

    const [valueText, valueConverted] = convertValue(value, (a: number, b: number) => a / b, 10);
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
        <Input ref={currencyRef} onChange={handleCurrencyChange} />
      </InputGroup>
    </Stack>
  )
}