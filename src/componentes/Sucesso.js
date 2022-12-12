import styled from "styled-components";

function Sucesso(){
    return(
        <>
        <ConteinerSucesso>Pedido feito com sucesso!</ConteinerSucesso>
        </>
    )
}

export default Sucesso;

const ConteinerSucesso = styled.div`
margin-top:100px;
font-size: 24px;
font-family: 'Roboto';
font-weight: 400;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`