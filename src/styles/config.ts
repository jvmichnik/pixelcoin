import { ColorMode } from '@chakra-ui/react'

interface ConfigProps{
  initialColorMode: ColorMode,
  useSystemColorMode: boolean
}
export const config: ConfigProps = {
  initialColorMode: "light",
  useSystemColorMode: false,
}