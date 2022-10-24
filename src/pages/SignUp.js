import axios from 'axios'
import styled from "styled-components"
import logo from "../assets/logo.jpg"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { ThreeDots } from 'react-loader-spinner'

export default function SignUp() {
    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [photo, setPhoto] = useState(undefined)
    const { signIn, user, loading, setLoading } = useContext(AuthContext)
    const navigate = useNavigate()

    function registerUser(e){
        e.preventDefault();
        setLoading(true)

        signIn(email, password, name, photo)

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        axios.post(URL, user)
            .then((res) => {
                navigate("/")
                setLoading(false)
            })
            .catch((err) => {
                alert(`Não foi possível finalizar seu cadastro. \n${err.response.data.message} \nTente novamente!`)
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <PageContainer>
            <img src={logo} alt="logo"/>

            <Form onSubmit={registerUser}>
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
                    name="password"
                    placeholder="senha"
                    type="password"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                    data-identifier="input-password"
                    disabled={loading ? true : false}
                />
                <input
                    name="name"
                    placeholder="nome"
                    type="text"
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                    data-identifier="input-name"
                    disabled={loading ? true : false}
                />
                <input
                    name="photo"
                    placeholder="foto"
                    type="url"
                    value={photo}
                    required
                    onChange={e => setPhoto(e.target.value)}
                    data-identifier="input-photo"
                    disabled={loading ? true : false}
                />
                <button type="submit"> {loading ? <ThreeDots height="80"
                        width="50"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}/> 
                        : <h1>Cadastrar</h1> }  
                </button>
            </Form>

            <Link to="/" data-identifier="back-to-login-action"> Já tem uma conta? Faça login! </Link>
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
    align-items: flex-start;
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