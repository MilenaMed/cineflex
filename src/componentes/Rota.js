import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"


function PagInicial() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
        requisicao.then(resposta =>
            setFilmes(resposta.data));
        requisicao.catch(err => console.log(err.resposta.data))
    }, [])

    if (filmes.length === 0){
        return (
            <ConteinerFilmes>
                <Carregando src="http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif"></Carregando>
            </ConteinerFilmes>
        )
    }
    return (
        <>
            <ConteinerFilmes>
                Selecione seu filme
                <Filmes>
                    {filmes.map(filme => (
                        <Link key={filmes.id} to={`/sessoes/${filme.id}`}>
                        <Filme data-test="movie" key={filme.id}>
                            <img src={filme.posterURL} alt={filme.title} id={filme.id}></img>
                        </Filme>
                        </Link>
                    ))}
                </Filmes>
            </ConteinerFilmes>
        </>
    )
}

export default PagInicial;

const ConteinerFilmes = styled.div`
margin-top:100px;
font-size: 24px;
font-family: 'Roboto';
font-weight: 400;
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
`
const Carregando = styled.img`
margin-top:60px;
height: 200px;
`

const Filmes = styled.div`
margin-top: 30px;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap: 30px;
`
const Filme = styled.div`
width: 145px;
height: 209px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
justify-content:center;
align-items:center;

img{
    width: 129px;
    height: 193px;
}
`
