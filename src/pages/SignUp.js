import { Link } from "react-router-dom";
import styled from "styled-components"
import logo from "../assets/logo.jpg"

export default function SignUp() {

    return (
        <PageContainer>
            <img src={logo} alt="logo"/>

            <Form>
                <input
                    name="email"
                    placeholder="email"
                    type="email"
                />
                <input
                    name="email"
                    placeholder="senha"
                    type="email"
                />
                <input
                    name="name"
                    placeholder="nome"
                    type="text"
                />
                <input
                    name="photo"
                    placeholder="foto"
                    type="url"
                />
                <button type="submit"> Cadastrar </button>
            </Form>

            <Link to="/"> Já tem uma conta? Faça login! </Link>
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
    }
`