import styled from "styled-components";
import { Colors } from "../Theme";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import Link from "next/link";

const NFTCardEl = styled.article`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const Card = styled.div`
    border-radius: 15px;
    overflow: hidden;
    z-index: 2;
    background-color: ${Colors.White};
    color: ${Colors.Black};
    position: relative;
    display: flex;
    flex-direction: column;box-shadow: 0 4px 40px rgb(0 0 0/10%);

`;
const BadgeEl = styled.span`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 3;
    background: linear-gradient(to right, ${Colors.Gradients.PrimaryToSec[0]}, ${Colors.Gradients.PrimaryToSec[1]});
    padding: 0.5rem 1rem;
    border-radius: 30px;
    font-weight: 500;
    color: ${Colors.White};

`;
const ItemImage = styled.div``;
const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 1.5rem;
    flex: 1;
    gap: 0.5rem;

`;
const TSection = styled.div`
    display: flex;
    justify-content: space-between;

`;
const EditionEl = styled.span`
    font-weight: 500;

`;
const StockEl = styled.span`
    font-weight: 600;
    color: ${Colors.Primary};

`;
const ItemTitle = styled.h2`
    font-size: 1.4rem;

`;
const PriceSection = styled.div``;
const BottomSection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 1rem;

`;
const AvatarEl = styled.span`
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    height: 50px;
    width: 50px;
    margin-right: 0.5rem;

`;
const OwnerEl = styled.span``;
const ReactionEl = styled.span`
    margin-left: auto;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 0.5rem;

    > svg {
        cursor: pointer;
    }

`;
const Bar1 = styled.span`
    width: 93%;
    height: 0.7rem;
    background-color: ${Colors.White};
    border-radius: 0 0 50px 50px;
    box-shadow: inset 0 4px 5px rgb(0 0 0/10%);
    z-index: 1;
    transform: translateY(-30%);
    filter: brightness(0.6);

`;
const Bar2 = styled(Bar1)`
    width: 88%;
    transform: translateY(-60%);
    z-index: 0;
    filter: brightness(0.3);
`;



const NFTCard = ({nfts, react}) => {
    const {Id, ImageURL, Title, price, Avatar, Owner} = nfts;
    return (
        <NFTCardEl>
            <Card>
                {/* <BadgeEl>{Views}</BadgeEl> */}
                <ItemImage>
                    <Image alt="img" src={ImageURL} width="500" height="501" />
                </ItemImage>
                <InfoSection>
                    <TSection>
                        {/* <EditionEl>{Edition} {Edition > 1 ? "Copies Minted" : "Copy Minted"}</EditionEl>
                        <StockEl>{Stock} {Stock <= 1 ? "Copy for Sale" : "Copies for Sale"}</StockEl> */}
                    </TSection>
                    <ItemTitle>
                        <Link href='/asset'>
                        {Title}
                        </Link>
                    </ItemTitle>
                    <PriceSection>{price}</PriceSection>
                    <BottomSection>
                        <AvatarEl>
                            <Image src={Avatar} width='50' height='50' />
                        </AvatarEl>
                        <OwnerEl>{Owner}</OwnerEl>
                        <ReactionEl>
                            <BsHeart onClick={()=>react} /> 0
                        </ReactionEl>
                    </BottomSection>
                </InfoSection>
            </Card>
            <Bar1 />
            <Bar2 />
        </NFTCardEl>
    )
}

export default NFTCard;