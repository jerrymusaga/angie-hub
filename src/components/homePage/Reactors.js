import { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Colors } from "../Theme";

const ItemContainer = styled.div`
    overflow: hidden;
    overflow-x: auto;
    width: 100%;
    display: flex;
    gap: 2rem;

    scrollbar-width: 0;
    ::-webkit-scrollbar {
        display: none;
    }

`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
    transition: background-color 0.2s ease-in;
    border-radius: 15px;
    padding: 0.8rem 1rem;
    box-shadow: 0 4px 40px rgb(0 0 0/ 10%);

    :hover {
        background-color: ${Colors.PrimaryDark};
    }

`;
const Avatar = styled.span`
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    height: 155px;
    width: 155px;

`;
const Badge = styled.span`
    position: relative;
    display: inline-block;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: ${Colors.Primary};

    ::after {
        content: ${(p) => p.number ? `'${p.number}'`: ''};
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: ${Colors.Background};
        font-size: 0.8rem;
    }

`;
const Amount = styled.span``;
const Name = styled.h4`
    font-weight: 400;

`;
const BottomSection = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;


`;

const ReactorsList = [
    {
        id: 1,
        name: "jackie",
        avatar: "/images/avatar/avatar_1.jpg",
        total_reaction_cost: 5,
    },
    {
        id: 2,
        name: "janet",
        avatar: "/images/avatar/avatar_2.avif",
        total_reaction_cost: 15,
    },
    {
        id: 3,
        name: "angel",
        avatar: "/images/avatar/avatar_3.avif",
        total_reaction_cost: 52,
    },
    {
        id: 4,
        name: "mary",
        avatar: "/images/avatar/avatar_4.avif",
        total_reaction_cost: 22,
    },
    {
        id: 5,
        name: "praise",
        avatar: "/images/avatar/avatar_5.avif",
        total_reaction_cost: 5,
    },
    {
        id: 6,
        name: "benita",
        avatar: "/images/avatar/avatar_6.avif",
        total_reaction_cost: 5.55,
    },
    {
        id: 7,
        name: "james",
        avatar: "/images/avatar/avatar_7.avif",
        total_reaction_cost: 11.4,
    },
    {
        id: 8,
        name: "love",
        avatar: "/images/avatar/avatar_8.avif",
        total_reaction_cost: 111,
    },
]

const Reactors = ({ItemContainerRef, setscrollIndicator}) => {
    const [reactors, setReactors] = useState(ReactorsList);
    return (
        <ItemContainer 
            ref={ItemContainerRef} 
            onScroll={(e) => {
                const {scrollWidth,scrollLeft,offsetWidth} = e.target;
                const SL = Math.ceil(scrollLeft + offsetWidth);
                if(scrollLeft <= 0) setscrollIndicator('b');
                if(scrollLeft > 0 && scrollLeft < scrollWidth) setscrollIndicator('m');
                if(SL >= scrollWidth) setscrollIndicator('e');
            }}
        >
            {
                reactors.map((r) => {
                    return (
                        <Link key={r.id} href="profile" passHref>
                           
                                <Item>
                                    <Avatar>
                                        <Image alt="reactor" src={r.avatar} height="250" width="250" />
                                    </Avatar>
                                    <Name>{r.name}</Name>
                                    <BottomSection>
                                        <Badge number={r.id} />
                                        <Amount>{r.total_reaction_cost} BnB</Amount>
                                    </BottomSection>
                                </Item>
                            
                        </Link>
                    )
                })
            }
        </ItemContainer>
    )
}

export default Reactors;