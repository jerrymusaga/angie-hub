import Head from "next/head";
import styled from "styled-components";
import { Colors } from "./Theme";
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
        <title>AngieHub || Tokenized community for talented individuals</title>
        <meta
          name="description"
          content="Community of angel hack bounty hunters"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Hero />
      <Carousel />
      <NewsLetter />
    </HomeEl>
  );
}
