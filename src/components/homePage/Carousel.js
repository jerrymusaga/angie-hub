import styled from "styled-components";
import { Colors, Devices } from "../Theme";
import Button from "../styled/Button";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useState, useRef } from "react";
import Reactors from "./Reactors";

const CarouselEl = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 1rem;
    margin-top: 3rem;
    gap: 1rem;

    @media ${Devices.Tablet}{
        padding: 1rem 3rem;
    }

    @media ${Devices.Laptop}{
        padding: 1rem 5%;
    }

    @media ${Devices.LaptopL}{
        padding: 1rem 10%;
    }

`;
const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;

`;
const Controls = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 1rem;

`;
const ControlBtn = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${(p) => (p.active ? "pointer": "")}; 
    width: 3rem;
    height: 3rem;
    color: ${(p) => (p.active ? Colors.Primary : Colors.PrimaryDisable)} ;
    font-size: 1.5rem;
    background-color: ${Colors.PrimaryDark};
    border-radius: 50%;
   

`;



const Carousel = () => {
    const ItemContainerRef = useRef(null);
    // b => beginner | m => middle | e => end
    const [scrollIndicator, setscrollIndicator] = useState('b');
    return (
        <CarouselEl>
            <Button>Top Reactors</Button>
            <Title>Profile</Title>
            <Controls>
                <ControlBtn 
                    active={scrollIndicator === 'm' || scrollIndicator === 'e'}
                    onClick={() => {
                        ItemContainerRef.current.scroll({
                            left: ItemContainerRef.current.scrollLeft - 200,
                            behaviour: 'smooth'
                        })
                    }}
                >
                    <BsChevronLeft />
                </ControlBtn>
                <ControlBtn 
                    active={scrollIndicator === 'b' || scrollIndicator === 'm'}
                    onClick={() => {
                        ItemContainerRef.current.scroll({
                            left: ItemContainerRef.current.scrollLeft + 200,
                            behaviour: 'smooth'
                        })
                    }}
                >
                    <BsChevronRight />
                </ControlBtn>
            </Controls>
            <Reactors ItemContainerRef={ItemContainerRef} setscrollIndicator={setscrollIndicator} />
        </CarouselEl>
    )
}

export default Carousel;