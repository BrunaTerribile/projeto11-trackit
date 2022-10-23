import styled from "styled-components"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Menu(props) {
    const navigate = useNavigate()
    const percentage = 66;

    return (
        <BottomBar>
            <StyledLink to={'/habitos'}><h1>Hábitos</h1></StyledLink>
                
            <div onClick={() => navigate('/hoje')} className="progress" >
                <CircularProgressbar value={percentage} text={`Hoje`} 
                    styles={buildStyles({pathColor: `white`, 
                                        textColor: `white`,
                                        width: `100px`,
                                        heigth: `100px`,
                                        backgroundColor: "#52B6FF",
                                        pathColor: "#fff",
                                        trailColor: "transparent"})}
                                        background
                                        backgroundPadding={6}
                /> </div>

            <StyledLink to={'/historico'}><h1>Histórico</h1></StyledLink>
        </BottomBar>
    )
}

const BottomBar = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    z-index: 2;
    text-decoration: none;
    border: 1px solid grey;

    .progress {
        z-index: 3;
        width: 91px;
        height: 91px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        border-radius: 50px;
        position: absolute;
        bottom: 15px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

    h1 {
        color: #52B6FF;
    }
`;