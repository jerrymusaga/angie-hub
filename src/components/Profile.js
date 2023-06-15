import styled from "styled-components";
import Image from "next/image";
import NFTCard from "./styled/NFTCard.styled";
import { Colors, Devices } from "./Theme";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import Grid from "./styled/Grid.styled"; 
import Head from "next/head";
import Tabs from "./styled/Tabs.styled";
import Tab from "./styled/Tab.styled";
import Button from "./styled/Button";
import OwnershipItem from "./asset/OwnershipItem";

import Link from "next/link";
 

const ProfileEl = styled.article`
    background-color: ${Colors.White};
    color: ${Colors.Black};
    display: flex;
    flex-direction: column;

`;
const Cover = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 200px;

    @media ${Devices.Laptop}{
        height: 300px;
    }

`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    gap: 2rem;

    @media ${Devices.Laptop}{
        flex-direction: row;

    }

`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media ${Devices.Laptop}{
        max-width: 25vw;
        align-items: flex-start;

    }

`;
const Avatar = styled.span`
    transform: translateY(-50%);
    border: 5px solid ${Colors.White};
    border-radius: 50%;
    overflow: hidden;
    width: 150px;
    height: 150px;
    background-color: ${Colors.White};

`;
const Name = styled.h1`
    margin-top: -50px;
    margin-bottom: 0.5rem;

`;
const Username = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 2rem;

`
const Bio = styled.p`
    white-space: pre-wrap;
    font-size: 0.95rem;
    margin-bottom: 1rem;

`;
const Social = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media ${Devices.Laptop}{
        justify-content: flex-start;

    }

`;
const Stats = styled.span`
    width: 100%;
    border-top: 1px solid ${Colors.Border};
    border-bottom: 1px solid ${Colors.Border};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;

`;
const StatItem = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

`;
const StatTitle = styled.span`
    color: ${Colors.Gray};

`;
const StatValue = styled.span`
    font-weight: 500;

`;


const AllTabs = [
    {
        Id: 1,
        Title: "POAPs",
        Content: (
            <Grid>
                <OwnershipItem />
            </Grid>
        )
    },
    {
        Id: 2,
        Title: "Uploaded NFTs/PAOPs",
        Content: <Tab />
    },
    {
        Id: 3,
        Title: "Listed NFTs",
        Content: <Tab />
    },
]


const Profile = ({username='@jackie'}) => {
    return (
        <ProfileEl>
            <Head>
                <title>AngieHub || {username}</title>
            </Head>
            <Cover>
                <Image alt="profile" src="/images/nft/nft6.png" width="1990px" height="1990px" />
            </Cover>
            <Content>
                <Info>
                    <Avatar >
                        <Image alt="profile_image" src="/images/avatar/avatar_1.jpg" layout="fill" />
                    </Avatar>
                    <Name>Jackie AngelHack</Name>
                    <Username>@jackie</Username>
                    <Bio>
                        {`I love participating in web3 hackathons hosted on AngelHack`}
                    </Bio>
                    <Social>
                        <Link passHref href="https://linkedIn.com">
                            
                             <BsLinkedin />
                            
                        </Link>
                        <Link passHref href="https://twitter.com">
                           
                            <BsTwitter />
                            
                        </Link>
                        
                    </Social>
                    <Stats>
                        <StatItem>
                            <StatTitle>Reactions</StatTitle>
                            <StatValue>205</StatValue>
                        </StatItem>
                        <StatItem>
                            <StatTitle>Views</StatTitle>
                            <StatValue>15k</StatValue>
                        </StatItem>
                        <StatItem>
                            <StatTitle>Uploaded</StatTitle>
                            <StatValue>6</StatValue>
                        </StatItem>
                        
                    </Stats>
                </Info>
                {/* TABS */}
                <Tabs data={AllTabs} mt="2rem" />
            </Content>
        </ProfileEl>
    )
}

export default Profile;