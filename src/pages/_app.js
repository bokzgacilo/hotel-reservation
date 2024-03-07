import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./lib/chakra-theme";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}
