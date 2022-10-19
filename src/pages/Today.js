import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import check from "../assets/check.png"

export default function Today() {
    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1> Segunda, 17/05 </h1>
                    <h2> 67% dos hábitos concluídos </h2>
                </Title>

                <MyHabit>
                    <h1> Ler 1 capítulo de livro </h1>
                    <h2> Sequência atual: 3 dias </h2>
                    <h2> Seu recorde: 5 dias </h2>
                    <div> <img src={check} alt="icone concluído"/> </div>
                </MyHabit>

                <MyHabit>
                    <h1> Ler 1 capítulo de livro </h1>
                    <h2> Sequência atual: 3 dias </h2>
                    <h2> Seu recorde: 5 dias </h2>
                    <div> <img src={check} alt="icone concluído" /> </div>
                </MyHabit>
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
    flex-direction: column;
    justify-content: center;
    margin-bottom: 28px;

    h1 {
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 5px;
    }

    h2 {
        font-size: 18px;
        color: #8FC549;
    }
`

const MyHabit = styled.div`
    width: 340px;
    height: 94px;
    background-color: white;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 10px;
    position: relative;

    h1 {
        margin-bottom: 10px;
        font-size: 20px;
        color: #666666;
    }
    
    h2 {
        font-size: 13px;
        color: #666666;
    }

    div {
        width: 69px;
        height: 69px;
        background-color: #8FC549;
        position: absolute;
        right: 13px;
        top: 13px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
    }

    img {
        width: 35px;
        height: 28px;
    }
`