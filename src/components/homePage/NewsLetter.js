import styled from "styled-components";
import Button from "../styled/Button";
import { Colors, Devices } from "../Theme";

const NewsLetterEl = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: url("/images/cover/subscribe.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 6rem 1rem;
    gap: 1rem;

    @media ${Devices.MobileL} {
        padding: 6rem 1rem;
    }
    @media ${Devices.Tablet} {
        padding: 6rem;
    }
    @media ${Devices.Laptop} {
        padding: 6rem 30%;
    }

`;
const Title = styled.h2`
    font-weight: 500;
    font-size: 4vw;

    @media ${Devices.MobileL} {
        padding: 6rem 1rem;
    }

`;
const Sub = styled.span`
    font-size: 1.12rem;


`;
const Input = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;

    > input {
        border: none;
        border-radius: 5px 0 0 5px;
        padding: 0.5rem 1rem;
        font-size: 1.05rem;
        flex: 1;
    }

`;
const Btn = styled(Button)`
    border-radius: 0 5px 5px 0;
    font-weight: 600;
    font-size: 1.01rem;

`;
const Text = styled.p`
    font-size: 0.85rem;

`;
const PL = styled.a`
    color: ${Colors.Primary};

`;
const CheckBox = styled.div`
    font-size: 0.85rem;

    input {
        margin-right: 0.5rem;
    }
`;


const NewsLetter = () => {
    return ( 
        <NewsLetterEl>
            <Title>Stay Updated With AngieHub</Title>
            <Sub>Subscribe for latest news and updates</Sub>
            <Input>
                <input type='email' placeholder='email' />
                <Btn>Subscribe</Btn>
            </Input>
            
            <Text>
                Please read the <PL>Privacy Notice</PL> before going ahead to subscribe so as to get the latest
                and special offers delivered to your email.
                You can unsubscribe at anytime
            </Text>
            <CheckBox>
                <input type='checkbox' id='NewsSub' />
                <label htmlFor="NewsSub">I agree to the above privacy notice</label>
            </CheckBox>
        </NewsLetterEl>
    )
}

export default NewsLetter;