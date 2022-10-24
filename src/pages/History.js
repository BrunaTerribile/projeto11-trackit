import styled from "styled-components"
import Header from "../components/Header"
import Menu from "../components/Menu"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import axios from "axios";

export default function History() {
    const { userData } = useContext(AuthContext)
    const { hist, setHist } = useState([])
    const header = { headers: { 'Authorization': `Bearer ${userData.token}` } }

    useEffect( () => {
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily'
        axios.get(URL, {}, header)
            .then( (res) => {
                console.log(res.data)
                setHist(res.data)
            })
            .catch((err) => console.log(err))
    }, [])
    
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
    height: 100vh;
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