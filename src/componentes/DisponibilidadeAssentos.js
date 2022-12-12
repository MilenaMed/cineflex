import styled from "styled-components";

function DisponibilidadeAssentos() {
    return (
        <>

            <ConteinerDisponibilidade>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
                <SelecionarAssento>1</SelecionarAssento>
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

        </>
    )
}

export default DisponibilidadeAssentos;

const SelecionarAssento = styled.div`
width: 26px;
height: 26px;
background-color: #C3CFD9;
border: 1px solid #808F9D;
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