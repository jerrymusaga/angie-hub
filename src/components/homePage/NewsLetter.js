import styled from "styled-components";
import Button from "../styled/Button";
import { Colors, Devices } from "../Theme";

const NewsLetterEl = styled.article``;
const Title = styled.h2``;
const Sub = styled.span``;
const Input = styled.div``;
const Btn = styled(Button)``;
const Text = styled.p``;
const PL = styled.a``;
const CheckBox = styled.div``;


const NewsLetter = () => {
    return ( 
        <NewsLetterEl>
            <Title>Stay Updated With Reactos</Title>
            <Sub>Subscribe for newest releases</Sub>
            <Input>
                <input type='email' placeholder='email' />
            </Input>
            <Btn>Subscribe</Btn>
            <Text>
                Please read the <PL>Privacy Notice</PL> before going ahead to subscribe so as get the latest
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