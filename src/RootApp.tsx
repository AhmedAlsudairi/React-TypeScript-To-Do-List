import * as React from "react"

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import App from "./App"

export default function RootApp() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  )
}