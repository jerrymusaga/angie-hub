import styled from "styled-components";
import { Colors } from "../Theme";


const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0.5rem 1.5rem;
    font-weight:500;
    width: max-content;
    cursor: pointer;
    background: linear-gradient(to right, ${Colors.Gradients.PrimaryToSec[0]}, ${Colors.Gradients.PrimaryToSec[1]});
    border-radius: ${(p) => (p.round ? "50px" : "5px")} ;
    color: ${Colors.White};

`;

export default Button