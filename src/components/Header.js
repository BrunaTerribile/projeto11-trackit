import styled from "styled-components"
import { useContext } from "react";
import { AuthContext } from "../context/auth";
import photo from "../assets/userback.png"

export default function Header() {
    const { userData } = useContext(AuthContext)

    return (
        <Head>
            <h1>TrackIt</h1>
            {userData.image !== '' ? 
            (<img src={userData.image} alt="foto do usuário" data-identifier="avatar"/>) 
            :(<img src={photo} alt="foto do usuário" data-identifier="avatar"/>)}
        </Head>
    )
}

const Head = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    background-color: #126BA5;
    padding-right: 18px;
    padding-left: 18px;
    z-index: 2;

    h1 {
        font-size: 39px;
        font-family: 'Playball', cursive;
        color: white;
    }

    img {
        border-radius: 50px;
        width: 51px;
        height: 51px;
    }
`