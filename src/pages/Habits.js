import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import icone from "../assets/trash-outline.svg"
import NewHabit from "../components/NewHabit"
import { useContext } from "react";
import { AuthContext } from "../context/auth";

export default function Habits() {
    const { showBox, setShowBox } = useContext(AuthContext)

    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowBox(true)}> + </button>
                </Title>

                {showBox ? <NewHabit /> : null}

                {/* <Habit>
                    <h1> Ler 1 capítulo de livro </h1>
                    <Days>

                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </Days>
                    <img src={icone} alt="lixeira" />
                </Habit> */}

                <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </p>
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
    padding: 0 25px;

    p {
        font-size: 18px;
        line-height: 23px;
        color: #666666;
        margin-top: 10px;
    }
`

const Title = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        font-size: 23px;
        color: #126BA5;
    }

    button {
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

const Habit = styled.div`
    width: 340px;
    height: 91px;
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

    img {
        width: 15px;
        height: 15px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`

const Days = styled.div`
    display: flex;

    div {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 20px;
        margin-right: 5px;
    }

    .off {
        background-color: white;
        color: #DBDBDB;
    }

    .on {
        background-color: #E5E5E5;
        color: white;
    }
`