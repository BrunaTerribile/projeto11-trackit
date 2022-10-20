import styled from "styled-components"
import logo from "../assets/logo.jpg"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)

    const { signIn, user, setUserData } = useContext(AuthContext)
    
    const navigate = useNavigate()

    function handleLogin(e){
        e.preventDefault();

        signIn(email, password)
        console.log("dados armazenados");

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const body = {
            email: user.email,
            password: user.password
        }

        axios.post(URL, body)
            .then((res) => {
                console.log(res.data)
                setUserData(res.data)
                alert("Seja bem-vindo!")
                navigate("/hoje")
            })
            .catch((err) => {
                alert(`Algo de errado não está certo. ${err.response.data.message}
                Tente novamente!`)
                console.log(err)
            })
    }

    return (
        <PageContainer>
            <img src={logo} alt="logo"/>

            <Form>
                <input
                    name="email"
                    placeholder="email"
                    type="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    name="senha"
                    placeholder="senha"
                    type="password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit" onClick={handleLogin}> Entrar </button>
            </Form>

            <Link to="/cadastro"> Não tem uma conta? Cadastre-se! </Link>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    padding-top: 70px;

    a {
        color: #52B6FF;
    }
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    border-radius: 6px;

    button {
        width: 303px;
        height: 45px;
        align-self: center;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        color: white;
    }

    input {
        width: 303px;
        height: 45px;
        font-family: 'Lexend Deca', sans-serif;
        border: 1px solid #D4D4D4;
        margin: 6px;

        ::placeholder{
                color: #DBDBDB;
                font-style: normal;
            }
    }
`