import styled from "styled-components";
import {MdOutlineContentCopy} from 'react-icons/md';
import Image from "next/image";
import { Colors } from "../Theme";

const OwnershipEl = styled.article`
    display: flex;
    gap: 0.5rem;
    align-items: center;

`;
const AvatarEl = styled.span`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;

`;
const Info = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.25rem;

`;
const OwnerEl = styled.span`
    font-size: 0.9rem;
    color: ${Colors.Gray};

`;
const UsernameEl = styled.span`
    font-weight: 500;

`;
const AddressEl = styled.div`
    color: ${Colors.Gray};
    display: flex;
    align-items: center;
    gap: 0.5rem;

`;

const OwnershipItem = () => {
    return (
        <OwnershipEl>
            <AvatarEl>
                <Image alt="owner" src="/images/avatar/avatar3.png" width="45px" height="45px" />
            </AvatarEl>
            <Info>
                <OwnerEl>
                    Owner
                </OwnerEl>
                <UsernameEl>@favour</UsernameEl>
            </Info>
            <AddressEl>0x232238g88fkl... <MdOutlineContentCopy /></AddressEl>
        </OwnershipEl>
    )
}

export default OwnershipItem;