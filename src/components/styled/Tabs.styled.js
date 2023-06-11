import styled from "styled-components";
import { useState } from "react";
import { Colors, Devices } from "../Theme";
import GridTmp from "./Grid.styled";

const TabsEl = styled.article`; 
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: ${(p) => (p.mt ? p.mt : '')};
`;
const Headers = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    padding-bottom: 2rem;


`;
const Header = styled.span`
    font-weight: 500;
    cursor: pointer;
    position: relative;

    ::after {
        content: "" ;
        position: absolute;
        transition: all 0.3s ease-in-out;
        left: 0;
        bottom: 0;
        width: ${(p) => (p.active ? "100%" : "0")};
        background: linear-gradient(to right, ${Colors.Gradients.PrimaryToSec[0]}, ${Colors.Gradients.PrimaryToSec[1]});
        height: 0.2rem;
        border-radius: 20px;
        transform: translateY(500%);
    }

`;
const Content = styled.div`
    padding: 1rem;

`;


const Tabs = ({data, mt}) => {
    const [currentTab, setCurrentTab] = useState(data[0]);
    return (
        <TabsEl>
            <Headers>
                {
                    data.map((d) => {
                        return (
                            <Header key={d.Id}
                                    onClick={() => {
                                        if (currentTab.Id !== d.Id) setCurrentTab(d);
                                    }}
                                    active={currentTab.Id === d.Id}
                            >
                                    {d.Title}
                            </Header>
                        )
                    })
                }
            </Headers>
            <Content>
                {currentTab.Content}
            </Content>
        </TabsEl>
    )
}

export default Tabs;