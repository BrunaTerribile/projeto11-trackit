import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Menu() {
    
    return (
        <BottomBar>
            <StyledLink to={'/habitos'}><h1>Hábitos</h1></StyledLink>
            <div><StyledLink to={'/hoje'}>Hoje</StyledLink></div>
            <StyledLink to={'/historico'}><h1>Histórico</h1></StyledLink>
        </BottomBar>
    )
}

const BottomBar = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    z-index: 2;
    text-decoration: none;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        color: red;
        width: 91px;
        height: 91px;
        border-radius: 50px;
        position: absolute;
        bottom: 15px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    h1 {
        color: #52B6FF;
    }
`;