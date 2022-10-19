import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import icone from "../assets/trash-outline.svg"

export default function Habits() {

    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1>Meus hábitos</h1>
                    <div> + </div>
                </Title>

                <NewHabit>
                    <input
                        name="habito"
                        type="text"
                        placeholder="nome do hábito"
                    />
                    <Days>
                        <div>D</div>
                        <div>S</div>
                        <div>T</div>
                        <div>Q</div>
                        <div>Q</div>
                        <div>S</div>
                        <div>S</div>
                    </Days>
                    <Buttons>
                        <button className="white">Cancelar</button>
                        <button className="blue">Salvar</button>
                    </Buttons>
                </NewHabit>

                <Habit>
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
                    <img src={icone} alt="lixeira"/>
                </Habit>

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

const NewHabit = styled.div`
    width: 340px;
    height: 180px;
    background-color: white;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 30px;

    input {
        width: 303px;
        height: 45px;
        font-family: 'Lexend Deca', sans-serif;
        border: 1px solid #D4D4D4;
        margin-bottom: 6px;

        ::placeholder {
            color: #DBDBDB;
            font-style: normal;
        }
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
        color: #DBDBDB;
        font-size: 20px;
        margin-right: 5px;
    }
`

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;

    button {
        width: 84px;
        height: 35px;
        margin-left: 10px;
        font-family: 'Lexend Deca', sans-serif;
        font-size: 16px;
    }

    .white {
        background-color: white;
        color: #52B6FF;
    }

    .blue {
        background-color: #52B6FF;
        color: white;
    }
`