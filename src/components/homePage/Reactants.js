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
        ImageURL: "/images/nft/nft1.gif",
        Edition: 1,
        Stock: 1,
        Title: "BitRefill Claire",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar_1.jpg",
        Owner: "0x122851EB3915cc769dECBf95a566e7fC8aAc2125".slice(0,7) ,
        Reactions: "55",
    },
    {
        Id: 2,
        Views: "Views: 1.7k",
        ImageURL: "/images/nft/nft2.png",
        Edition: 23,
        Stock: 12,
        Title: "The FangOut",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar_2.avif",
        Owner: "0xe9794AEd70Bbf4B068f1EDBfefF8fBe820D20021".slice(0,7),
        Reactions: "25",
    },
    {
        Id: 3,
        Views: "Views: 1.7k",
        ImageURL: "/images/nft/nft3.gif",
        Edition: 23,
        Stock: 12,
        Title: "M.O.K Art",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar_3.avif",
        Owner: "0xcD8AA0D5C1459BF71cc2d03f6E3C394831630CCC".slice(0,7),
        Reactions: "10",
    },
    {
        Id: 4,
        Views: "Views: 1.7k",
        ImageURL: "/images/nft/nft4.png",
        Edition: 23,
        Stock: 12,
        Title: "Tearing Spaces",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar_4.avif",
        Owner: "eunice",
        Reactions: "4",
    },
    {
        Id: 5,
        Views: "Views: 1.7k",
        ImageURL: "/images/nft/nft5.gif",
        Edition: 23,
        Stock: 12,
        Title: "Boiler Room",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar_5.avif",
        Owner: "eunice",
        Reactions: "11",
    },
    {
        Id: 6,
        Views: "Views: 1.7k",
        ImageURL: "/images/nft/nft6.png",
        Edition: 23,
        Stock: 12,
        Title: "Kairos",
        Price: "0.7 BnB",
        Avatar: "/images/avatar/avatar_6.avif",
        Owner: "eunice",
        Reactions: "23",
    },
    
]


const TopReactantsEl = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    color: ${Colors.White}

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
    color: ${Colors.White}

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
            <Title>Display of POAP & NFTs</Title>
            
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