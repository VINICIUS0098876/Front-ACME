'use strict'
import {getFilmes} from "./filmes.js"

console.table(await getFilmes())

import { getFilmesId } from "./filmes.js"

console.table(await getFilmesId(2))

function criarCard (filme){
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('flex')
    card.classList.add('flex-col')
    card.classList.add('text-[#ECDDA2]')
    const titulo = document.createElement('h2')
    titulo.textContent = filme.nome
    const texto = document.createElement('p')
    texto.textContent = filme.sinopse
    texto.classList.add('w-72')
    const preco = document.createElement('p')
    preco.textContent = filme.valor_unitario
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('h-28')
    capa.classList.add('w-28')
    const dataLancamento = document.createElement('p')
    dataLancamento.textContent = filme.data_lancamento
    card.append(titulo, capa, texto, preco, dataLancamento)
    container.appendChild(card)
}

async function preencherContainer(){
    const container = document.querySelector('body')

    const filmes = await getFilmes()

    filmes.forEach(filme => {
        criarCard(filme)
    })
}
preencherContainer()
