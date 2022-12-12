import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import Dia from "./Dias";


function Sessoes() {
    const [diaDoFilme, setDiaDoFilme] = useState(null);
    let { FilmeId } = useParams();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${FilmeId}/showtimes`);
        promisse.then((resp) =>
            setDiaDoFilme(resp.data));
        promisse.catch((err) => console.log(err));
    }, [])


    if (diaDoFilme === null) {
        return (
            <ConteinerSessao>
                <Carregando src="http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif"></Carregando>
            </ConteinerSessao>
        )
    }

    return (
        <>
            <ConteinerSessao>
                Escolha o horário
                <Horarios>
                    {diaDoFilme.days.map((d) => (
                        <Dia key={d.id} weekday={d.weekday} date={d.date} time={d.showtimes} />
                    ))}
                </Horarios>
            </ConteinerSessao>
            <Rodape data-test="footer">
                <Cartaz>
                    <img src={diaDoFilme.posterURL} alt={diaDoFilme.title} />
                </Cartaz>{diaDoFilme.title}

            </Rodape>
        </>
    )
}

export default Sessoes;

const ConteinerSessao = styled.div`
margin-top:30px;
margin-bottom:150px;
font-size: 24px;
font-family: 'Roboto';
font-weight: 400;
display:flex;
flex-direction: column;
align-items:center;
`
const Horarios = styled.div`
display:flex;
flex-direction: column;
margin-left: 30px;
margin-top:30px;
gap:30px;
align-self:flex-start;
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
const Carregando = styled.img`
margin-top:60px;
height: 200px;
`