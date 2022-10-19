import styled from "styled-components"
import photo from "../assets/user.png"

export default function Header() {

    return (
        <Head>
            <h1>TrackIt</h1>
            <img src={photo} alt="foto do usuário"/>
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
    }
`