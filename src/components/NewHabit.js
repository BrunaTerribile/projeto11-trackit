import styled from "styled-components"
import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import axios from "axios";

export default function NewHabit() {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [selecDay, setSelecDay] = useState([])
    const [habitName, setHabitName] = useState("")
    const { userData, setShowBox, myHabits, setMyHabits } = useContext(AuthContext)

    function selectDay(i) {
        console.log(i)

        if (!selecDay.includes(i)) { //seleciona o dia da semana
            const thisDay = i
            setSelecDay([...selecDay, thisDay])
            console.log(selecDay)
        } else if (selecDay.includes(i)) { //des-seleciona o dia
            const removeDay = selecDay.filter((d) => d !== i)
            setSelecDay(removeDay)
        }
    }

    function saveHabit() {

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const body = {
            name: habitName,
            days: selecDay.sort()
        }
        const token = userData.token
        
        axios.post(URL, body, {headers: {'Authorization': `Bearer ${token}`}})
            .then((res) => {
                console.log("hábito registrado com sucesso!")
                console.log(res.data)
               // let lastHabit = (res.data)
                //setMyHabits(...myHabits, lastHabit )
            })
            .catch((err) => {console.log(err)})
    }


    return (
        <New>
            <input
                name="habito"
                type="text"
                placeholder="nome do hábito"
                value={habitName}
                required
                onChange={(e) => setHabitName(e.target.value)}
            />
            <Days>
                {days.map((d, i) => selecDay.includes(i) ? <div className='on' key={i} onClick={() => selectDay(i)} >{d}</div>
                    : <div className='off' key={i} onClick={() => selectDay(i)} >{d}</div>)}
            </Days>
            <Buttons>
                <button className="white" onClick={() => setShowBox(false)}>Cancelar</button>
                <button className="blue" type="submit" onClick={saveHabit}>Salvar</button>
            </Buttons>
        </New>
    )
}

const New = styled.div`
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

