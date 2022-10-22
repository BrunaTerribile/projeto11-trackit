import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import icone from "../assets/trash-outline.svg"
import NewHabit from "../components/NewHabit"
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import axios from "axios"

export default function Habits() {
    const week = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { showBox, setShowBox, userData, myHabits, setMyHabits } = useContext(AuthContext)

    useEffect(() => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const token = userData.token
        
        axios.get(URL, {headers: {'Authorization': `Bearer ${token}`}})
            .then( (res) => {setMyHabits(res.data)
                            console.log(res.data)})
            .catch((err) => {console.log(err)})
    }, [])

    function ListHabits(){          
        if(myHabits.lenght === 0){
            return <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </p>
        } else {
            myHabits.map( (h) => <Habit>
                <h1> {h.name} </h1>
                <Days>
                    {h.days.map ((d) => <div>{d}</div> )}
                </Days>
                <img src={icone} alt="lixeira" />
            </Habit>)
        }
    }

    function deleteHabit(props){
        let thisId = props
        let result = window.confirm("Tem certeza que deseja deletar esse hábito?")
        if(result === true){ // caso de ok - deletar
            const newList = myHabits.filter((h) => h.id !== thisId)
            setMyHabits(newList)

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${thisId}`
            const token = userData.token

            axios.delete(URL, {headers: {'Authorization': `Bearer ${token}`}})
                .then((res) => {console.log(res.data)
                                console.log("habito excluido do servidor")})
                .catch((err) => {console.log(err)})
        }
    }

    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1>Meus hábitos</h1>
                    <button onClick={() => setShowBox(true)}> + </button>
                </Title>

                {showBox ? <NewHabit /> : null}

                {myHabits.lenght === 0 ? <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                                    : myHabits.map( (h) => <Habit id={h.id}><h1> {h.name} </h1>
                                    <Days> {week.map ((d, i) => 
                                    h.days.includes(i) ? 
                                    <div className="on">{d}</div> 
                                    : <div className="off">{d}</div> )} </Days>
                                    <button onClick={() => deleteHabit(h.id)}><img src={icone} alt="lixeira" /></button></Habit>)
                }

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