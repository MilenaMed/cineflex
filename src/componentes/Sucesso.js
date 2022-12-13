import styled from "styled-components";
import { Link , useLocation } from "react-router-dom";

function Sucesso() {
    const location = useLocation();
    const { assentosIds, titulo, data, hora, CPF, NomeComprador } = location.state;

    return (
        <>
            <ConteinerSucesso>
                <Titulo>
                    Pedido feito com sucesso!
                </Titulo>
                <ConteinerDados data-test="movie-info">
                    <p> Filme e Sessão</p>
                    {titulo}
                    <br></br>
                    {data} - {hora}
                </ConteinerDados>
                <ConteinerDados data-test="seats-info">
                    <p> Ingressos</p>
                    {assentosIds.map(reservado => (
                        <h1 key={reservado}>{`Assento ${reservado}`}</h1>
                    ))}
                </ConteinerDados>
                <ConteinerDados data-test="client-info">
                    <p> Comprador</p>
                    Nome: {NomeComprador}
                    <br></br>
                    CPF: {CPF}
                </ConteinerDados>
                <Home data-test="go-home-btn">
                    <Link to={`/`}>
                        Voltar pra Home
                    </Link>
                </Home>
            </ConteinerSucesso>
        </>
    )
}

export default Sucesso;

const Titulo = styled.div`
font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    color: #247A6B;
    margin-bottom:20px;`


const ConteinerSucesso = styled.div`
margin-top:100px;
display:flex;
flex-direction: column;
align-items: center;`


const ConteinerDados = styled.div`
font-family: 'Roboto';
margin-left:30px;
color: #293845;
font-weight: 400;
font-size: 22px;
margin-top:20px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-self:flex-start;
 p{
    margin-bottom:10px;
    font-weight: 700;  
    font-size: 24px;
 }
`
const Home = styled.button`
margin-top:30px;
margin-bottom:150px;
width: 225px;
height: 42px;
font-family: 'Roboto';
font-size: 18px;
color: #FFFFFF;
background-color: #E8833A;
border-radius: 3px;
border:none;
display: flex;
align-items: center;
justify-content:center;
`