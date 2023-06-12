import { Colors,Devices } from "../Theme";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Grid from "../styled/Grid.styled";
import NFTCard from "../styled/NFTCard.styled";


const Reactants = [
    {
        Id: 1,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar.jpg",
        Edition: 1,
        Stock: 1,
        Title: "Favorite NFT",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "0x122851EB3915cc769dECBf95a566e7fC8aAc2125".slice(0,7),
        Reactions: "1.1k",
    },
    {
        Id: 2,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/new.jpg",
        Edition: 23,
        Stock: 12,
        Title: "Newest NFT",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "0xe9794AEd70Bbf4B068f1EDBfefF8fBe820D20021".slice(0,7),
        Reactions: "1.1k",
    },
    {
        Id: 3,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar5.png",
        Edition: 23,
        Stock: 12,
        Title: "Greatest NFT",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "0xcD8AA0D5C1459BF71cc2d03f6E3C394831630CCC".slice(0,7),
        Reactions: "1.1k",
    },
    {
        Id: 4,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar1.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 5,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 6,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 7,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 8,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 9,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 10,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
    {
        Id: 11,
        Views: "Views: 1.7k",
        ImageURL: "/images/avatar/avatar3.png",
        Edition: 23,
        Stock: 12,
        Title: "Favorite Avatar",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar1.png",
        Owner: "eunice.eth",
        Reactions: "1.1k",
    },
]


const TopReactantsEl = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem;

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
    font-weight: 400;

`;
const TopSection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

`;
const Sort = styled.div`
    border-radius: 30px;
    border: 1px solid ${Colors.Primary};
    padding: 0.4rem 1rem;
    cursor: pointer;

`;
const Date = styled.div`
    background: linear-gradient(to right, ${Colors.Gradients.PrimaryToSec[0]}, ${Colors.Gradients.PrimaryToSec[1]});
    border-radius: 30px;
    padding: 0.4rem 2.5rem;

`;
const ShowMore = styled.div`
    margin-top: 1rem;
    cursor: pointer;
    border: 1px solid ${Colors.Primary};
    padding: 1rem 2rem;
    color: ${Colors.Primary};
    background-color: transparent;
    border-radius: 5px;
    font-size: 1rem;

`;


const TopReactants = ({nfts, react}) => {
    return (
        <TopReactantsEl>
            <Title>Top Gallery</Title>
            <TopSection>
                <Sort>Category</Sort>
                <Date>Today</Date>
            </TopSection>
            <Grid>
                {
                    Reactants.map((nfts, i) => {
                        return (
                            
                                <a key={nfts.Id}>
                                    <NFTCard nfts= {nfts} react={react}  />
                                </a>
                           
                           
                        )
                    })

                                   
                }
            </Grid>
            <ShowMore>Show More...</ShowMore>
        </TopReactantsEl>
    )
}

export default TopReactants;