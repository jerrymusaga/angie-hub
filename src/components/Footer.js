import React from 'react'
import styled from 'styled-components'
import { BsInstagram,BsMedium,BsDiscord,BsTelegram } from 'react-icons/bs'
import {GrTwitter} from 'react-icons/gr'
import { Colors, Devices } from './Theme'
import Link from 'next/link'

const FooterEl = styled.footer`
    display: flex;
    align-items: center;

    justify-content: space-between;
    flex-wrap: wrap;
    color: ${Colors.White};
    padding: 1rem 2rem;

`;
const Socials = styled.div`
    display: flex;
    font-size: 1.5rem;
    gap: 1.5rem;

`;
const CopyRight = styled.small`
    font-size: 0.9rem;


`;
const Links = styled.div`
    color: light-gray;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    @media ${Devices.Tablet}{
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
`


const Footer = () => {
  return (
    <FooterEl>
        <Socials>
            <Link href="" passHref>
                <a>
                    <GrTwitter />
                </a>
            </Link>
            <Link href="" passHref>
                <a>
                    <BsDiscord />
                </a>
            </Link>
            <Link href="" passHref>
                <a>
                    <BsInstagram />
                </a>
            </Link>
            <Link href="" passHref>
                <a>
                    <BsMedium />
                </a>
            </Link>
            <Link href="" passHref>
                <a>
                    <BsTelegram />
                </a>
            </Link>
        </Socials>
        <CopyRight>
            Copyright &copy; 2023 All Right Reserved
        </CopyRight>
        <Links>
            <Link href="" passRef>
                <a>
                    Help Center
                </a>
            </Link>
            <Link href="" passRef>
                <a>
                    T&C
                </a>
            </Link>
            <Link href="" passRef>
                <a>
                    Privacy Notice
                </a>
            </Link>
        </Links>
    </FooterEl>
  )
}

export default Footer