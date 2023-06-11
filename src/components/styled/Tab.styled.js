import styled from "styled-components";
import { Colors,Devices } from "../Theme";

const TabEl = styled.article`
    border-radius: 10px;
    background-color: ${Colors.GrayBG};
    border: 1px solid ${Colors.Border};
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray};
    padding: 50px;
`;


const Tab = ({children}) => {
    if (children){
        return (
            <>
                {children}
            </>
        )
    }else {
        return (
            <TabEl>Nothing To Display Yet</TabEl>
        )
        
    }

    
}

export default Tab;
