import styled from "styled-components";
import Image from "next/image";
import Button from "../styled/Button";
import { Colors, Devices } from "../Theme";
import { ethers } from "ethers";
import {reactosNFTAddress} from '../../../config';
import ReactosMarketplaceContract from '../../../../reactos-contract/artifacts/contracts/ReactosMarketplace.sol/ReactosNFTMarketplace.json'

const BuyEl = styled.article`
    box-shadow: 0 4px 40px rgb(0 0 0 /10%);
    border: 1px solid ${Colors.Border};
    padding: 0.8rem 1rem;
    border-radius: 5px;
    display: flex;
    position: sticky;
    background-color: ${Colors.White};
    bottom: 1rem;

`;
const LeftSection = styled.div`
    display: none;
    flex: 1;
    @media ${Devices.Laptop}{
        display: flex;
    }

`;
const ThumbsEl = styled.span`
    width: 80px;
    height: 80px;

`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: cemter;

`;
const EditionEl = styled.span`
    font-weight: 500;

`;
const Title = styled.span`
    font-weight: 600;
    font-size: 1.8rem;

`;
const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.5rem;
    align-items: center;
    @media ${Devices.Laptop}{
        flex: 0.6;
    }

`;
const BuyBtn = styled(Button)`
    flex: 1;
    width: 100%;
    font-size: 1.07rem;
`;
const TextEl = styled.span`
    font-size: 0.7rem;
    color: ${Colors.Gray};
`;

const Buy = () => {

    const buyNFT = async (nft) => {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(reactosNFTAddress, ReactosMarketplaceContract.abi, signer);

        const price = ethers.utils.parseUnits(nft.price.toString(), 'ether');
        const transaction = await contract.createMarketSale(nft.tokenId, {
            value: price
        })
        await transaction.wait()
    }

    return (
        <BuyEl>
            <LeftSection>
                <ThumbsEl>
                    <Image src="/images/avatar/avatar.jpg" width="80px" height="80px" />
                </ThumbsEl>
                <Info>
                    <EditionEl>0.5 BnB</EditionEl>
                    <Title>Favourite NFT</Title>
                </Info>
            </LeftSection>
            <RightSection>
                <BuyBtn onClick={() => {}}>Buy</BuyBtn>
                <TextEl>10% royalty goes to owner</TextEl>
            </RightSection>
        </BuyEl>
    )
}

export default Buy;