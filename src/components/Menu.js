import styled from "styled-components"


export default function Menu() {
    return (
        <BottomBar>
            <h1>Hábitos</h1>
            <div>Hoje</div>
            <h1>Histórico</h1>
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

    h1 {
        color: #52B6FF;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        color: white;
        width: 91px;
        height: 91px;
        border-radius: 50px;
        position: absolute;
        bottom: 15px;
    }
`