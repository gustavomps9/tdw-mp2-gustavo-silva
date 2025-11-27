import React from "react";

export default function AboutContent() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold gradient-text mb-4">
          Sobre o Projeto
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
      </section>

      <section className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-blue-700/30 backdrop-blur-sm">
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-blue-100">
            O projeto consiste no desenvolvimento de uma aplicação web capaz de consumir dados 
            dinâmicos de uma API externa, concretamente a{" "}
            <a 
              href="https://rickandmortyapi.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-green-600 dark:text-blue-400 font-semibold hover:text-green-700 dark:hover:text-blue-300 transition-colors underline"
            >
              Rick and Morty API
            </a>
            , permitindo a obtenção e apresentação de informação atualizada sobre as personagens da série.
          </p>
          
          <p className="text-gray-700 dark:text-blue-100">
            A aplicação proporciona uma listagem completa de personagens, incluindo funcionalidades 
            de paginação e filtros avançados que possibilitam ao utilizador refinar a pesquisa de 
            acordo com critérios como nome, espécie, estado ou localização.
          </p>

          <p className="text-gray-700 dark:text-blue-100">
            Para além da listagem geral, cada personagem dispõe de uma página de detalhe individual, 
            onde é apresentada informação específica e contextualizada, permitindo ao utilizador 
            explorar o conteúdo de forma mais aprofundada.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-blue-700/30 backdrop-blur-sm">
        <h2 className="text-3xl font-bold gradient-text mb-6">Tecnologias e Implementação</h2>
        
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-gray-700 dark:text-blue-100">
            A navegação entre as diferentes páginas da aplicação é realizada de forma dinâmica 
            utilizando o React Router, garantindo uma experiência fluída e intuitiva.
          </p>

          <p className="text-gray-700 dark:text-blue-100">
            O código segue princípios de estruturação e organização modular, 
            permitindo escalabilidade e manutenção facilitada. Inclui ainda desafios 
            extra como Dark Mode e sistema de favoritos com persistência local.
          </p>

          <p className="text-gray-700 dark:text-blue-100">
            A utilização do GitHub foi aplicada de forma estratégica, com commits incrementais que refletem 
            a adição progressiva de funcionalidades. Além disso, foi também desenvolvida uma pipeline de 
            integração contínua (CI) para assegurar a qualidade e estabilidade do código ao longo do desenvolvimento.
          </p>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-blue-700/30 backdrop-blur-sm">
        <h2 className="text-3xl font-bold gradient-text mb-8 text-center">
          Tecnologias e Ferramentas Utilizadas
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">React</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Redux Toolkit</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">RTK Query</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">GitHub</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">React Router</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Rick and Morty API</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-blue-900/20 rounded-xl hover:shadow-md transition-shadow">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-800 dark:text-blue-100 font-medium">Netlify</span>
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-blue-900/30 dark:to-blue-800/30 rounded-xl border border-green-200 dark:border-blue-600/30">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-blue-100 mb-3">
            Funcionalidades Extra Implementadas
          </h3>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">Dark/Light Mode</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">Sistema de Favoritos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-gray-700 dark:text-blue-200">Filtros Avançados</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}