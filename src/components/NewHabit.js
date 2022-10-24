import axios from "axios";
import styled from "styled-components"
import { useState } from "react"
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { ThreeDots } from 'react-loader-spinner'

export default function NewHabit({setCounter, counter}) {
    const days = ["D", "S", "T", "Q", "Q", "S", "S"]
    const [selecDay, setSelecDay] = useState([])
    const [habitName, setHabitName] = useState("")
    const { userData, setShowBox, loading, setLoading } = useContext(AuthContext)
    const header = { headers: { 'Authorization': `Bearer ${userData.token}` } }

    function selectDay(i) {
        if (!selecDay.includes(i)) { //marca o dia da semana
            const thisDay = i
            setSelecDay([...selecDay, thisDay])
        } else if (selecDay.includes(i)) { //desmarca o dia da semana
            const removeDay = selecDay.filter((d) => d !== i)
            setSelecDay(removeDay)
        }
    }

    function saveHabit() { //salva e envia o novo habito para o servidor
        setLoading(true)

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const body = {
            name: habitName,
            days: selecDay.sort()
        }
        
        axios.post(URL, body, header)
            .then((res) => {
                setShowBox(false)
                setCounter(counter+1)
                setLoading(false)
            })
            .catch((err) => { 
                alert(`Não foi possível cadastrar esse novo hábito! \n${err.response.data.message}`)
                setLoading(false)})
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
                data-identifier="input-habit-name"
                disabled={loading ? true : false}
            />
            <Days>
                {days.map((d, i) => selecDay.includes(i) ? 
                    <div className='on' 
                        key={i} 
                        onClick={() => selectDay(i)} 
                        data-identifier="week-day-btn"
                        disabled={loading ? true : false}
                    >{d}</div>
                    :<div className='off' 
                        key={i} 
                        onClick={() => selectDay(i)} 
                        data-identifier="week-day-btn"
                        disabled={loading ? true : false}
                    >{d}</div>)}
            </Days>
            <Buttons>
                <button className="white" onClick={() => setShowBox(false)} data-identifier="cancel-habit-create-btn">Cancelar</button>
                <button className="blue" type="submit" onClick={saveHabit} data-identifier="save-habit-create-btn">
                {loading ? <ThreeDots height="80"
                        width="40"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/> 
                        : <h1>Salvar</h1>} 
                </button>
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

        :disabled {
            background-color: #F2F2F2;
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

