import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Colors, Devices } from "../Theme";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useEffect } from "react";
import Button from "../styled/Button";


const HeroEl = styled.article`
    margin: 6rem 1rem 5rem 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${Devices.Laptop}{
        margin: 3rem 4rem 5rem 4rem;
    }

    @media ${Devices.LaptopL}{
        margin: 3rem 10rem 5rem 10rem;
    }

`;
const Title = styled.h1`
    margin-bottom: 3rem;
    font-size: 1.7rem;
    font-weight: 500;

    @media ${Devices.Laptop}{
        font-size: 2.7rem;
    }

`;
const Heading = styled.span`
font-size: 1.1rem;
display: block;

`;
const Sub = styled.span`
    

`;
const Slider = styled.div`
    position: relative;
    height: 35vh;
    min-height: 230px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    box-shadow: 0px 0px 3rem ${Colors.Primary};
    border-radius: 20px;

    @media ${Devices.Tablet}{
        height: 50vh;
    }

`;
const ImgContainer = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.3);
    display: block;

`;
const InfoContainer = styled.div`
    width: 100%;
    position: relative;
    z-index:3;
    flex:1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;


`;
const MiddleSection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    & > svg {
        font-size: 2.4rem;
        cursor: pointer;
        @media ${Devices.Tablet}{
            font-size: 3.4rem;
        }
    }

`;
const Date = styled.span`
    font-weight: 500;
    font-size: 1.1rem;

`;
const STitle = styled.h2`
    font-size: 1.3rem;

`;
const Owner = styled.span`
    color: ${Colors.Primary};
    font-size: 1.1rem;
    font-weight: 500;

`;
const Arrow = styled.span``;
const Lines = styled.span`
    position: relative;
    z-index: 3;
    display: flex;
    gap: 0.5rem;

`;
const Line = styled.span`
    display: inline-block;
    width: 2rem;
    height: 0.25rem;
    border-radius: 30px;
    background-color: ${(p) => (p.active ? Colors.Primary : Colors.White )}

`;
const Img = styled.div`
    width:100%;
    height:100%;

`;

const BscLink = styled.a`
    color: ${Colors.Primary};

`


const items = [
    {
        Id: 1,
        Owner: "Explore",
        Image: "",
        ImageSRC: "/images/slider/slide0.avif",

    },
    {
        Id: 2,
        Owner: "Explore",
        Image: "",
        ImageSRC: "/images/slider/slide2.png",

    },
    {
        Id: 3,
        Owner: "Explore",
        Image: "",
        ImageSRC: "/images/slider/slide3.png",

    },
]


const Hero = () => {
    const [index, setIndex] = useState(0);
    const [slides, setSlides] = useState(items);
    const [currentSlide, setCurrentSlide] = useState(items[0]);
    return (
        <HeroEl>
            <Title>
                <Heading>The Fastest Growing Tokenized Community of Web3 Enthusiasts on  <BscLink href="https://www.angelhack.com/">AngelHack </BscLink></Heading>
                <Sub>Claim PAOPs from <BscLink href="https://www.angelhack.com/">AngelHack</BscLink> & Trade them as NFTs</Sub><br />
                <Sub>Earn through Reactions on NFTs</Sub>
            </Title>
            <Slider>
                <InfoContainer>
                    
                    <MiddleSection>
                        <BsChevronLeft 
                            onClick={() => {
                                const idx = index - 1 ;
                                if(index > 0){
                                    setIndex(idx);
                                    setCurrentSlide(slides[idx]);
                                    return;
                                }
                                setIndex(slides.length - 1);
                                setCurrentSlide(slides[slides.length - 1]);
                            }}
                        />
                        <div>
                            
                            <Link passHref href="/profile">
                                <a>
                                    <Owner>
                                        <Button>{currentSlide.Owner }</Button>
                                    </Owner>
                                </a>    
                            </Link>
                        </div>
                        <BsChevronRight 
                            onClick={() => {
                                const idx = index + 1 ;
                                if(index < slides.length - 1){
                                    setIndex(idx);
                                    setCurrentSlide(slides[idx]);
                                    return;
                                }
                                setIndex(0);
                                setCurrentSlide(slides[0]);
                            }}
                        />
                    </MiddleSection>
                    
                </InfoContainer>
                <Lines>
                    {
                        slides.map((s) => {
                            return <Line key={s.Id} active={s.Id === currentSlide.Id} />
                        })
                    }
                </Lines>
                <ImgContainer>
                    <Img>
                        <Image alt="hero" width="1440" height="810" layout="responsive" src={currentSlide.ImageSRC} />
                    </Img>
                </ImgContainer>
            </Slider>
        </HeroEl>
    )
}

export default Hero;