import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DisponibilidadeAssentos from "./DisponibilidadeAssentos";

function Assentos() {
    const [assentos, setAssentos] = useState(null);
    let { SessaoId } = useParams();

    useEffect(() => {
        const pedido = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${SessaoId}/seats`);
        pedido.then((resposta) =>
            setAssentos(resposta.data));
        pedido.catch((err) => console.log(err));
    }, [SessaoId])

    if (assentos === null) {
        return (
            <ConteinerAssentos>
                <Carregando src="http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif"></Carregando>
            </ConteinerAssentos>
        )
    }

    return (
        <>
            <ConteinerAssentos>
                Selecione seu(s) assento(s):
                <DisponibilidadeAssentos></DisponibilidadeAssentos>
                <ConteinerInputs>
                Nome do comprador:
                <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Digite seu nome"
                    data-test="client-name"
                    autoComplete="off"
                />
                CPF do comprador:
                <Input
                    id="name"
                    name="name"
                    type="name"
                    placeholder="Digite seu cpf"
                    data-test="client-name"
                    autoComplete="off"
                />
                </ConteinerInputs>
                <Reservar>Reservar assento(s)</Reservar>
            </ConteinerAssentos>
            <Rodape data-test="footer">
                <Cartaz>
                    <img src={assentos.movie.posterURL} alt={assentos.movie.title} />
                </Cartaz>{assentos.movie.title}<br></br>
                {assentos.day.weekday} - {assentos.name}

            </Rodape>
        </>
    )
}

export default Assentos;

const ConteinerAssentos = styled.div`
margin-top:100px;
font-size: 24px;
font-family: 'Roboto';
font-weight: 400;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const ConteinerInputs = styled.div`
margin-top:30px;
font-size: 18px;
display:flex;
flex-direction:column;
gap:10px;
`

const Input = styled.input`
width: 327px;
height: 51px;
border: 1px solid #D5D5D5;
border-radius: 3px;
font-family: 'Roboto';
font-style: italic;
font-size: 18px;
`
const Reservar = styled.button`
margin-top:30px;
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
justify-content: center;
`

const Carregando = styled.img`
margin-top:60px;
height: 200px;
`
const Rodape = styled.div`
width: 100%;
height: 117px;
background: #DFE6ED;
border-top: 1px solid #9EADBA;
font-family: 'Roboto';
font-size: 26px;
color: #293845;
bottom:0;
display:flex;
position:fixed;
flex-direction:row;
align-items: center;
gap:15px;
`
const Cartaz = styled.div`
margin-left:10px;
width: 64px;
height: 89px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display:flex;
justify-content:center;
align-items:center;

img{
    width: 48px;
    height: 72px;
}
`