import styled,{ createGlobalStyle } from "styled-components";
import { Colors } from "../src/components/Theme";
import { useState } from "react";
import Header from "../src/components/header/Header";
import Button from "../src/components/styled/Button";
import Page from "../src/components/styled/Page.styled";
import Link from "next/link";

import '../styles/global.css'



import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bscTestnet, mainnet, bsc} from 'wagmi/chains'
import { Web3Button } from '@web3modal/react'
import Footer from "../src/components/Footer";

const chains = [bscTestnet, mainnet, bsc]
const projectId = '7235d1bda94622aeca866d5ada9263ba'

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  publicClient
})
const ethereumClient = new EthereumClient(wagmiConfig, chains)


const GlobalStyle = createGlobalStyle`

  html,
  body {
    background-color: ${Colors.Background};
    font-family: "Poppins", sans-serif;
  }

  p,a,h1,h2,h3,h5,h6,div,span{
    // color:${Colors.White};
    color: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    transition all .3s;
  }

  /* width */
  body::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  body::-webkit-scrollbar-track {
    background: #ffffff;
  }

  /* Handle */
  body::-webkit-scrollbar-thumb {
    background: #212121;
    border-radius: 20px;
  }

  /* Handle on hover */
  body::-webkit-scrollbar-thumb:hover {
    background: rgb(43, 43, 43);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
`;

const MobileMenu = styled.div`
  background-color: ${Colors.Background};
  color: ${Colors.White};
  z-index: ${p => p.open ? "9":"-1"};
  position: absolute;
  padding: 2rem 1rem 1rem 1.2rem;
  left: 0;
  display: flex;
  width: ${p => p.open ? "100%" : "0"};
  height: 100%;
  ul {
    opacity: ${p => p.open ? "1":"0"};
    transition: all 0.1s ease-out;
    text-decoration: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

  }

`;
const NavItem = styled.a`
  font-size: 1.2rem;
  font-weight: 400;
  height="120" width="120"
`;


function MyApp({ Component, pageProps }) {
  const [mobileMenuIsOpened, setMobileMenuIsOpened] = useState(false);

  return (
    <>

      <GlobalStyle />
      <WagmiConfig config={wagmiConfig}>
      <Main>
        <Header mobileMenu={{mobileMenuIsOpened, setMobileMenuIsOpened}} />
        
        <Page>
          <MobileMenu open={mobileMenuIsOpened}>
            <ul>
              
              <li>
                <NavItem href="#">
                  <Link href='/marketplace'>
                    MarketPlace
                  </Link>
                  </NavItem>
              </li>
              
              <li>
                <Web3Button />
              </li>
              <hr color={Colors.Primary} size="1" />
              <li>
                <NavItem href="#">
                  <Button>
                  <Link href='/upload_nft'>
                    Upload Nft
                  </Link>
                  </Button>
                  </NavItem>
              </li>
            </ul>
          </MobileMenu>
          <Component {...pageProps} />
        </Page>
        <Footer />
      </Main>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      
    </>
  );
}

export default MyApp;
