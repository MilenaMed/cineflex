import styled from "styled-components";

function Cabeçario(){
    return(
        <>
        <Header>
            CINEFLEX
        </Header>
        </>
    )
}

export default Cabeçario

const Header = styled.header`
width:100%;
height:67px;
background-color:#C3CFD9;
font-family: 'Roboto';
font-weight: 400;
font-size: 34px;
color: #E8833A;
display:flex;
justify-content:center;
align-items: center;
top:0;
`