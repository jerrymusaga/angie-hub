import styled from "styled-components";
import { useState } from "react";
import {FiMenu} from "react-icons/fi";
import {CgSearch} from "react-icons/cg";
import {IoClose} from "react-icons/io5";
import { Colors, Devices } from "../Theme";
import Button from "../styled/Button";
import SearchBar from "./SearchBar";
import MobileSearchBar from "./MobileSearchBar";
import Link from "next/link";
import { Web3Button } from '@web3modal/react'


const HeaderEl = styled.article`
    color: ${Colors.White};
    z-index: 10;
    display: flex;
    width: 100p%;
    align-items: center;
    height:10%;
    gap: 1rem;
    padding: 1rem 1.5rem;
    top: 0;
    background-color: ${Colors.Background} ;
    position: sticky;

    svg {
        font-size: 2rem;
        cursor: pointer;
    }

`;
const Center = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    gap: 0.5rem;

`;
const LogoText = styled.a`
    font-size: 1.2rem;
    font-weight:500;
    color: #bbbbbb

`;
const Logo = styled.img`
    width: 45px;
    border-right: 1px solid ${Colors.Gray};
    padding-right: 1rem;

`;
const Nav = styled.nav`
    margin-left: auto;
    border-right: 1px solid ${Colors.Gray};
    padding-right: 1rem;
    display: none;
    ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 1rem;
    }

    @media ${Devices.Laptop}{
        display: block;

    }

`;
const NavItem = styled.a`
    font-size: 1rem;
    font-weight: 400;


`;
const SearchIcon = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${Devices.Laptop}{
        display: none;
    }

`;
const MenuIcon = styled(SearchIcon)``;
const UploadBtn = styled(NavItem)`
    font-size: 1rem;
    display: none;

    @media ${Devices.Laptop}{
        display: inherit;
    }

`;

const Header = ({mobileMenu}) => {
    const [SearchIsOpen, setSearchIsOpen] = useState(false);
    const {mobileMenuIsOpened, setMobileMenuIsOpened} = mobileMenu;


    const toggleMenu = () => {
        setMobileMenuIsOpened(!mobileMenuIsOpened);
    }
    return (
        <HeaderEl>
            <MenuIcon>
                {
                    mobileMenuIsOpened ? <IoClose style={{fontSize: "2.5rem"}} color={Colors.Primary} onClick={()=> toggleMenu()}/> : <FiMenu onClick={()=> toggleMenu()} />
                }
            </MenuIcon>
            <Center>
                <Logo src=""/>
                <Link href='/'>
                    <a>
                        <LogoText>AngieHub</LogoText>
                    </a>
                </Link>
                <SearchBar />
                <Nav>
                    <ul>
                        
                        <li>
                            <NavItem >
                                <Link href="/reactos-marketplace">
                                    Marketplace
                                </Link>
                            </NavItem>
                        </li>
                        <li>
                            <NavItem >
                                <Link href="/token">
                                    Token
                                </Link>
                            </NavItem>
                        </li>
                        <li>
                            <Web3Button />
                        </li>
                        
                    </ul>
                </Nav>
            </Center>
            {SearchIsOpen ? (
                <MobileSearchBar SearchIsOpen={SearchIsOpen} setSearchIsOpen={setSearchIsOpen} />
            ) : (
                ""
            )
            }
            <UploadBtn>
                <Button>
                    <Link href='/upload_nft'>
                        Create NFT
                    </Link>
                </Button>
            </UploadBtn>
            

            <SearchIcon>
                <CgSearch onClick={() => {setSearchIsOpen(!SearchIsOpen)}} />
            </SearchIcon>
        </HeaderEl>
    )
    
}

export default Header;