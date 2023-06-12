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

import { getSession, signOut } from "next-auth/react";
 

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
        Title: "My Gallery",
        Content: (
            <Grid>
                Minted NFTs
            </Grid>
        )
    },
    {
        Id: 2,
        Title: "My Minted Gallery",
        Content: <Tab />
    },
    {
        Id: 3,
        Title: "My Listed Gallery",
        Content: <Tab />
    },
]


const Profile = ({username='@Favour'}) => {
    return (
        <ProfileEl>
            <Head>
                <title>Reactos || {username}</title>
            </Head>
            <Cover>
                <Image alt="profile" src="/images/cover/cover.png" layout="fill" />
            </Cover>
            <Content>
                <Info>
                    <Avatar >
                        <Image alt="profile_image" src="/images/avatar/avatar8.png" layout="fill" />
                    </Avatar>
                    <Name>Favor Theo</Name>
                    <Username>@Favor</Username>
                    <Bio>
                        {`I love sports and music`}
                    </Bio>
                    <Social>
                        <a href="#">
                            <BsLinkedin />
                        </a>
                        <a href="#">
                            <BsTwitter />
                        </a>
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
                            <StatTitle>Minted</StatTitle>
                            <StatValue>240</StatValue>
                        </StatItem>
                        <StatItem>
                            <StatTitle>Listed</StatTitle>
                            <StatValue>205</StatValue>
                        </StatItem>
                    </Stats>
                </Info>
                {/* TABS */}
                <Tabs data={AllTabs} mt="2rem" />
            </Content>
            <Button onClick={() => signOut({ redirect: "/" })}>Sign out</Button>
        </ProfileEl>
    )
}

export default Profile;