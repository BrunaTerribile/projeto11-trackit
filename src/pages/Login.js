import styled from "styled-components"
import logo from "../assets/logo.jpg"
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'

export default function Login() {
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const { signIn, user, setUserData, loading, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogin(e) {
        e.preventDefault();
        setLoading(true)

        signIn(email, password)

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const body = {
            email: user.email,
            password: user.password
        }

        axios.post(URL, body)
            .then((res) => {
                setUserData(res.data)
                navigate("/hoje")
                setLoading(false)
            })
            .catch((err) => {
                alert(`Algo de errado não está certo. \n${err.response.data.message} \nTente novamente!`)
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <PageContainer>
            <img src={logo} alt="logo" />

            <Form onSubmit={handleLogin}>
                <input
                    name="email"
                    placeholder="email"
                    type="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                    data-identifier="input-email"
                    disabled={loading ? true : false}
                />
                <input
                    name="senha"
                    placeholder="senha"
                    type="password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                    data-identifier="input-password"
                    disabled={loading ? true : false}
                />
                <button type="submit" data-identifier="login-btn">
                    {loading ? <ThreeDots height="80"
                        width="50"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/> 
                        : <h1>Entrar</h1> } 
                </button>
            </Form>

            <Link to="/cadastro" data-identifier="sign-up-action" > Não tem uma conta? Cadastre-se! </Link>
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
        
        :disabled{
            background-color: #F2F2F2;
        }
    }
`