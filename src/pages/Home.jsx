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
          Gustavo Silva</span>, e este projeto representa a integração de vários 
          conceitos que aprendi: React, Redux Toolkit, RTK Query, SPA Routing, 
          UI/UX e boas práticas de desenvolvimento web moderno.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-green-300 mb-3">
          Sobre o Projeto
        </h2>

        <ul className="list-disc ml-6 space-y-2 opacity-90">
          <li>Consumir dados dinâmicos de uma API externa (Rick and Morty API)</li>
          <li>Listagem completa de personagens com paginação e filtros avançados</li>
          <li>Página de detalhe individual por personagem</li>
          <li>Navegação dinâmica com React Router</li>
          <li>Dark/Light mode (a implementar)</li>
          <li>UI personalizada inspirada no universo Rick & Morty</li>
          <li>Código modular, organizado e escalável</li>
        </ul>
      </section>

    </div>
  );
}
