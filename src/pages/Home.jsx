import React from "react";

export default function Home() {
  return (
    <div className="p-10 text-white max-w-4xl mx-auto space-y-10">
      
      <section>
        <h1 className="text-4xl font-bold text-green-400 mb-4">
          Rick & Morty Explorer
        </h1>

        <p className="text-lg opacity-90">
          Bem-vindo ao projeto desenvolvido para a unidade curricular de
          Tecnologias de Desenvolvimento Web. Esta aplicação explora a 
          <span className="text-green-300"> Rick and Morty API</span>, 
          permitindo pesquisar, filtrar, ordenar e consultar detalhes de todas
          as personagens da série.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-green-300 mb-3">Sobre Mim</h2>

        <p className="text-lg opacity-90">
          O meu nome é <span className="text-green-300 font-semibold">
          Gustavo Silva</span>, tenho 22 anos, sou estudante do Mestrado em Comunicação e Tecnologias Web. Os meus interesses baseiam-se em desenvolvimento mobile, Front-End e UI/UX Design.
          Este projeto representa uma oportunidade para aplicar e expandir os meus conhecimentos em desenvolvimento web, focando na criação de interfaces intuitivas e funcionais.
          Além disto, fora do ambiente académico, pratico basquetebol federado, adoro viajar, estar com amigos e jogar videojogos.
        </p>
      </section>
    </div>
  );
}
