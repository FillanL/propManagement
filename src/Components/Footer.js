import React from 'react'
import styled from 'styled-components'
import { ComponentContainer } from '../Shared/SharedStyledComponents'

function Footer({theme}) {
    return (
        <ComponentContainer height={"auto"} theme={theme} padding={"3rem"}>
            <FootHolder>
                <FootColumn>
                    <FootItem>
                        abc
                    </FootItem>
                    <FootItem>
                        abc
                    </FootItem>
                    <FootItem>
                        abc
                    </FootItem>
                </FootColumn>
                <FootColumn>
                    <FootItem>
                        abc
                    </FootItem>
                    <FootItem>
                        abc
                    </FootItem>
                    <FootItem>
                        abc
                    </FootItem>
                </FootColumn>
                <FootColumn>
                    <FootItem>
                        abc
                    </FootItem>
                    <FootItem>
                        abc
                    </FootItem>
                    <FootItem>
                        abc
                    </FootItem>
                </FootColumn>
            </FootHolder>
        </ComponentContainer>
    )
}

export default Footer

const FootHolder = styled.div`
    display:grid;
    grid-template-columns: 30% 30% 30%;
`
const FootColumn = styled.div`
    display:grid;
    grid-template-rows: 1fr;
`
const FootItem = styled.li`
    
`
