import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';
import TopReactants from "../src/components/homePage/Reactants";

import { ethers } from "ethers";

const NoItems = styled.h1`
    padding: 20px 10px;
    font-size: 3rem;

`;

const Marketplace = () => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState('not-loaded');

    const [react, setReact] = useState();

    const reactToken = async () => {
        const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545");
        const amount = ethers.utils.parseEther(2000);
        const data = await contract.transfer("0x122851EB3915cc769dECBf95a566e7fC8aAc2125", amount)
        setReact(data)
    }

    // if (loading === 'Loaded' && !nfts.length) return (<NoItems className="px-20 py-10 text-3xl">No items in Reactos marketplace</NoItems>)
    return (
        <TopReactants nfts={nfts} react={reactToken}  />
    )
}

export default Marketplace;