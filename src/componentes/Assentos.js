import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";


function Assentos() {
    const [assentos, setAssentos] = useState(null);
    const [NomeComprador, setNomeComprador] = useState("");
    const [CPF, setCPF] = useState("");
    const [assentosReservados,setAssentosReservados] = useState([])
    let { SessaoId } = useParams();
    const navigate = useNavigate();;

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

    function handleSeat(assento) {
        if (assento.isAvailable === false) {
            return (alert("Esse assento não está disponível"))
        } else if (assento.isAvailable === true) {
            let arrayAssentos = [...assentosReservados]
            arrayAssentos.push(assento.name)
            setAssentosReservados(arrayAssentos)
        }

    }

    function passarDados(event) {
        event.preventDefault();
        const dados = {
            assentosIds: assentosReservados,
            titulo: assentos.movie.title,
            data: assentos.day.weekday,
            hora: assentos.name,
            CPF,
            NomeComprador,
        };

        if(assentosReservados.length > 0){
            const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many",
        {
            ids: assentosReservados,
            name: NomeComprador,
            cpf: CPF
        })
        requisicao.then(() => navigate("/sucesso", { state: dados }));

        }else{
            alert("escolha seu(s) assento(s)")
        }
    }

    return (
        <>
            <ConteinerAssentos>
                Selecione seu(s) assento(s):
                <ConteinerDisponibilidade>
                    {assentos.seats.map(assento => (
                        <SelecionarAssento onClick={() => handleSeat(assento)} disponivel={assento.isAvailable} data-test="seat" key={assento.id}>{assento.name}</SelecionarAssento>
                    ))}
                </ConteinerDisponibilidade>
                <Conteiner>
                    <ConteinerLegenda>
                        <Legenda cor="#1AAE9E" borda="#0E7D71"></Legenda>Selecionado
                    </ConteinerLegenda>
                    <ConteinerLegenda>
                        <Legenda cor="#C3CFD9" borda="#7B8B99"></Legenda>Disponível
                    </ConteinerLegenda>
                    <ConteinerLegenda>
                        <Legenda cor="#FBE192" borda="#F7C52B" ></Legenda>Indisponível
                    </ConteinerLegenda>
                </Conteiner>
                <ConteinerInputs>
                    Nome do comprador:
                    <form>
                        <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={NomeComprador}
                            onChange={(e) => setNomeComprador(e.target.value)}
                            placeholder="Digite seu nome"
                            data-test="client-name"
                            autoComplete="off"
                        />
                    </form>
                    CPF do comprador:
                    <form>
                        <Input
                            id="cpf"
                            name="cpf"
                            type="cpf"
                            required
                            placeholder="Digite seu cpf"
                            data-test="client-cpf"
                            value={CPF}
                            onChange={(e) => setCPF(e.target.value)}
                            autoComplete="off"
                        />
                    </form>
                </ConteinerInputs>
                <Reservar onClick={passarDados} data-test="book-seat-btn">
                    <Link to={"/sucesso"}>
                        Reservar assento(s)
                    </Link>
                </Reservar>
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
width: 300px;
margin-top:30px;
font-size: 18px;
display:flex;
flex-direction:column;
gap:10px;
`

const Input = styled.input`
width: 300px;
height: 51px;
border: 1px solid #D5D5D5;
border-radius: 3px;
font-family: 'Roboto';
font-style: italic;
font-size: 18px;
`
const Reservar = styled.button`
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

const SelecionarAssento = styled.div`
width: 26px;
height: 26px;
background-color: ${(props) => !props.disponivel ? "#FBE192" : "#C3CFD9"};
border: 1px solid ${(props) => !props.disponivel ? "#F7C52B" : "#808f9d"};
border-radius: 12px;
font-size: 11px;
display:flex;
justify-content:center;
align-items:center;
`
const Legenda = styled.div`
width: 26px;
height: 26px;
background-color: ${props => props.cor};
border: 1px solid ${props => props.borda};
border-radius: 12px;
display:flex;
justify-content:center;
align-items:center;
`
const ConteinerDisponibilidade = styled.div`
margin-top:30px;
width: 300px;
display:flex;
justify-content:center;
flex-wrap:wrap;
gap:10px;
`
const Conteiner = styled.div`
width: 300px;
display:flex;
`
const ConteinerLegenda = styled.div`
font-size: 13px;
margin-top:15px;
width: 300px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:10px;
`