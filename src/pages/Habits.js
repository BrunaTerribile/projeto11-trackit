import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import NewHabit from "../components/NewHabit"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import icone from "../assets/trash-outline.svg"
import axios from "axios"

export default function Habits() {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [counter, setCounter] = useState(0)
    const { showBox, setShowBox, userData, myHabits, setMyHabits} = useContext(AuthContext)
    const header = { headers: { 'Authorization': `Bearer ${userData.token}` } }

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'

        axios.get(URL, header)
            .then((res) => {
                let habitsArr = (res.data)
                setMyHabits(habitsArr)
                console.log("lista atualizada:", habitsArr)
            })
            .catch((err) => { console.log(err) })
    }, [counter])

    function deleteHabit(props) {
        let thisId = props
        let result = window.confirm("Tem certeza que deseja deletar esse hábito?")
        if (result === true) {
            const newList = myHabits.filter((h) => h.id !== thisId)
            setMyHabits(newList)

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${thisId}`

            axios.delete(URL, header)
                .then((res) => {
                    console.log(res.data)
                    console.log("habito excluido do servidor")
                    setCounter(counter-1)
                })
                .catch((err) => { console.log(err) })
        }
    }

    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowBox(true)} data-identifier="create-habit-btn"> + </button>
                </Title>

                {showBox && <NewHabit setCounter={setCounter} counter={counter}/>}

                {myHabits ? myHabits.map((h) => <Habit id={h.id}> <h1 data-identifier="habit-name"> {h.name} </h1>
                                <Days> {week.map((d, i) => h.days.includes(i) ? 
                                <div className="on">{d}</div>
                                :<div className="off">{d}</div>)} </Days>
                                <button onClick={() => deleteHabit(h.id)} data-identifier="delete-habit-btn"><img src={icone} alt="lixeira" /></button>
                                </Habit>)
                : <p data-identifier="no-habit-message">Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                }

            </Main>

            <Menu />
        </>
    )
}

const Main = styled.div`
    width: 100%;
    height: 100vh;
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

    button {
        width: 17px;
        height: 17px;
        background-color: white;
        position: absolute;
        right: 10px;
        top: 10px;
        img {
            width: 15px;
            height: 15px;
        }
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