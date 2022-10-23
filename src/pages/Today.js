import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import check from "../assets/check.png"
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import axios from "axios"

export default function Today() {
    const [todayHabits, setTodayHabits] = useState([])
    const [done, setDone] = useState([])
    const { userData } = useContext(AuthContext)
    const header = { headers: { 'Authorization': `Bearer ${userData.token}` } }

    dayjs.locale(ptBr)
    var now = dayjs().format('dddd, DD/MM')

    useEffect(() => {

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today'

        axios.get(URL, header) //buscar meus habitos
            .then ((res) => {
                console.log(res.data)
                setTodayHabits(res.data)
            })
            .catch((err) => console.log(err))

    }, [])

    function checkHabit(h){ //selecionar ou deselecionar um habito
        
        let selecId = (h.id)
        const URLcheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${selecId}/check`
        const URLuncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${selecId}/uncheck`

        if(!done.includes(selecId)){
            console.log("selecionou", selecId);
            setDone([...done, selecId])
            
            axios.post(URLcheck, null, header)
                .then ((res) => {
                    console.log("deu certo", res.data)
                })
                .catch((err) => console.log(err))
        } else {
            console.log("dessssselecionou", selecId);
            const newDone = done.filter( (d) => d !== selecId)
            setDone(newDone)
            
            axios.post(URLuncheck, null, header)
            .then ((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))
        }   
    }

    console.log(done)


    return (
        <>
            <Header />

            <Main>
                <Title>
                    <h1> {now} </h1>
                    <h2> 67% dos hábitos concluídos </h2>
                </Title>

                {todayHabits.map( (h) => <MyHabit>
                    <h1> {h.name} </h1>
                    <h2> Sequência atual: {h.currentSequence} dias </h2>
                    <h2> Seu recorde: {h.highestSequence} dias </h2>
                    <div onClick={() => checkHabit(h)} className={done.includes(h.id) ? 'true' : 'false'}> <img src={check} alt="icone concluído" /> </div>
                </MyHabit>)}
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

    .false {
        background-color: #EBEBEB;
    }

    .true {
        background-color: #8FC549;
    }
`