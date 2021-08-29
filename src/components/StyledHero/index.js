import React from 'react'
import styled, { keyframes } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const Overlay = styled.div `
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,1) 5%, rgba(255,255,255,0.6460959383753502) 25%, rgba(0,212,255,0) 50%);
`

const StyledHero = ({img, className, children, home}) => {
    return (
        <BackgroundImage className={className} fluid={img} home={home} >
            {children}
            <Overlay>
                
            </Overlay>
        </BackgroundImage>
    )
}

export default styled(StyledHero)`
    // min-height: ${props => props.home ? 'calc(100vh - 62px)' : '50vh'};
    height: 70vh;
    background: ${props => props.home ? 'none':'none'};
    background-position:  50% 20%;
    background-size: cover;
    opacity: 1!important;
    display: flex;
    justify-content: center;
    align-items: center;
`
