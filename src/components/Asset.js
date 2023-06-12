import styled from "styled-components";
import Image from "next/image";
import { Colors, Devices } from "./Theme";
import {HiOutlineExternalLink} from 'react-icons/hi' ;
import {AiFillCaretLeft} from 'react-icons/ai';
import {IoMdShare} from 'react-icons/io'
import { BsHeart, BsFillEyeFill, BsThreeDots } from "react-icons/bs";
import Tab from "./styled/Tab.styled";
import Tabs from "./styled/Tabs.styled";
import Head from "next/head";
import OwnershipItem from "./asset/OwnershipItem";
import Buy from "./asset/Buy";
import Link from "next/link";




const AssetEl = styled.article`
    background-color: ${Colors.White};
    color: ${Colors.Black};
    padding: 1rem;
    display: flex;
    flex-direction: column;

    @media ${Devices.Laptop}{
        padding: 1rem 15%;

    }
`;
const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2;

    @media ${Devices.Laptop}{
        flex-direction: row;
    }

`;
const LeftSection = styled.div`
    display: flex;
    flex: 0.7rem;
    flex-direction: column;
    gap: 1rem;

`;
const ImageEl = styled.div`
    border-radius: 30px;
    overflow: hidden;

`;
const ChainLink = styled.a`
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 500;
    align-items: center;
    border: 1px solid ${Colors.Border};
    padding: 1.5rem 1rem;

`;
const RightSection = styled.span`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex: 0.95;


`;
const BackBtn = styled.div`
    color: ${Colors.Primary};
    display: flex;
    width: max-content;
    cursor: pointer;
    align-items: center;


`;
const TopBtns = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    svg{
        font-size: 1.5rem;
    }

`;
const ReactionBtn = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

`;
const ViewsEl = styled(ReactionBtn)``;
const ShareBtn = styled(ReactionBtn)``;
const MoreBtn = styled(ReactionBtn)`
    margin-left: auto;

`;
const AuthorContainer = styled.div`
    display: flex;
    gap: 5rem;
    span{
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
    }

`;
const AvatarEl = styled.div`
    border-radius: 50%;
    overflow: hidden;
    width: 50px;
    height: 50px;


`;
const CreatorLabel = styled.label`
    color: ${Colors.Gray};
    font-size: 0.9rem;

`;
const UsernameEl = styled.span``;
const EditionEl = styled.span`
    font-weight: 500;


`;
const Title = styled.h1`
    font-size: 1.7rem;
    display: inline-block;
    margin-right: 1rem;


`;
const MarketPlace = styled.span`
    border: 1px solid ${Colors.Gray};
    border-radius: 50%;
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: ${Colors.Gray};


`;
const AcOfferLabel = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    color: ${Colors.Gray};

`;
const Description = styled.p`
    white-space: pre-wrap;


`;
const TagContainer = styled.div`
    display: flex;
    gap: 0.5rem;

`;
const Tag = styled.span`
    border: 1px solid ${Colors.Black};
    border-radius: 5px;
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;

`;

const AllTabs = [
    {Id: 1, Title:"Ownership", Content: <OwnershipItem />},
    {Id: 2, Title:"Transactions", Content: <Tab />},
    {Id: 3, Title:"Bids", Content: <Tab />},
    {Id: 4, Title:"Offer", Content: <Tab />},
]

const Asset = () => {
    return (<AssetEl>
        <Head>NFT Item</Head>
        <SectionContainer>
            <LeftSection>
                <ImageEl>
                    <Image src="/images/avatar/avatar.jpg" layout="responsive" width="1000px" height="1000px" />
                </ImageEl>
                <ChainLink>AngieHub chain details <HiOutlineExternalLink /> </ChainLink>
            </LeftSection>
            <RightSection>
                <BackBtn>
                    <Link href="/">
                        <AiFillCaretLeft /> Back
                    </Link>
                    
                </BackBtn>
                <TopBtns>
                    <ReactionBtn>
                        <BsHeart /> 1
                    </ReactionBtn>
                    <ViewsEl>
                        <BsFillEyeFill /> 1
                    </ViewsEl>
                    <ShareBtn>
                        <IoMdShare />
                    </ShareBtn>
                    <MoreBtn>
                        <BsThreeDots />
                    </MoreBtn>
                </TopBtns>
                <AuthorContainer>
                    <AvatarEl>
                        <Image src="/images/avatar/avatar2.png"  width="50" height="50" />
                    </AvatarEl>
                    <span>
                        <CreatorLabel>
                            Creator 
                        </CreatorLabel>
                        <UsernameEl>@favour</UsernameEl>
                    </span>
                </AuthorContainer>
                <EditionEl>
                   1 Copy Minted
                </EditionEl>
                <span>
                    <Title>Favorite NFT</Title>
                    <MarketPlace>Reactos MarketPlace</MarketPlace>
                </span>
                <AcOfferLabel>
                    Accepting Offers
                </AcOfferLabel>
                <Description>
                    In the world of Ozzy there is a small village that has a Chameleon citizen and their  have unique stylistic traits such as colours, costume, hybrid, powers and lots of categories! Join the Ozzy Society  ! Very unique styles of Ozzy chameleon!!
                </Description>
                <TagContainer>
                    <Tag>nft</Tag>
                </TagContainer>
                <Tabs mt='1rem' data={AllTabs}></Tabs>
            </RightSection>
        </SectionContainer>
        <Buy />
    </AssetEl>)
}

export default Asset;