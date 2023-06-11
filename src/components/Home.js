import Head from "next/head";
import styled from "styled-components";
import { Colors, Devices } from "./Theme";
import { BsGithub, BsGlobe } from "react-icons/bs";
import Link from "next/link";
import Button from "./styled/Button";
import Hero from "./homePage/Hero";
import NewsLetter from "./homePage/NewsLetter";
import Carousel from "./homePage/Carousel";



const HomeEl = styled.article`
  color: ${Colors.White};
 
`;


export default function Home() {
  return (
    
    <HomeEl>
      <Head>
        <title>AngieHub || Tokenized community for bounty hunt</title>
        <meta
          name="description"
          content="Community of angel hack bounty hunters"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Carousel />
      
    </HomeEl>
  );
}
