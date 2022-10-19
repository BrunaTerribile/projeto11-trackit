import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"

export default function History() {
    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1> Histórico </h1>
                </Title>

                <p> Em breve você poderá ver o histórico dos seus hábitos aqui! </p>
            </Main>

            <Menu />
        </>
    )
}

const Main = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #E5E5E5;
    padding: 0 18px;

    p {
        font-size: 18px;
        line-height: 23px;
        color: #666666;
        margin-top: 10px;
    }
`

const Title =  styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }

    div {
        width: 40px;
        height: 40px;
        border-radius: 5px;
        background-color: #52B6FF;
        color: white;
        font-size: 27px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`