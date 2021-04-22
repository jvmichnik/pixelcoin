import { extendTheme } from '@chakra-ui/react'
import { config } from './config'

export const theme = extendTheme({
  config,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: (props) => ({
      body: {
          bg: props.colorMode === "dark" ? "gray.900" : "gray.50",
          color: props.colorMode === "dark" ? "gray.100" : "gray.700"        
      }             
    })
  }
})