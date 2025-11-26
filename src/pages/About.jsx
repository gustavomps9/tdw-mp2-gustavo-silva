export default function About() {
  return (
    <div className="p-10 text-white max-w-4xl mx-auto space-y-8">
      
      <h1 className="text-4xl font-bold text-green-400 mb-2">Sobre o Projeto</h1>

      <section>
        <div className="space-y-4 text-lg opacity-90">
          <p>
            O projeto consiste no desenvolvimento de uma aplicação web capaz de consumir dados 
            dinâmicos de uma API externa, concretamente a Rick and Morty API, permitindo a 
            obtenção e apresentação de informação atualizada sobre os personagens do universo da série.
          </p>
          
          <p>
            A aplicação proporciona uma listagem completa de personagens, incluindo funcionalidades 
            de paginação e filtros avançados que possibilitam ao utilizador refinar a pesquisa de 
            acordo com critérios como nome, espécie, estado ou localização.
          </p>

          <p>
            Para além da listagem geral, cada personagem dispõe de uma página de detalhe individual, 
            onde é apresentada informação específica e contextualizada, permitindo ao utilizador 
            explorar o conteúdo de forma mais aprofundada.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-300 mb-4">Tecnologias e Implementação</h2>
        <div className="space-y-4 text-lg opacity-90">
          <p>
            A navegação entre as diferentes páginas da aplicação é realizada de forma dinâmica, 
            utilizando o React Router, garantindo uma experiência fluida e intuitiva. O design da 
            interface foi cuidadosamente elaborado e inspirado no universo de Rick & Morty.
          </p>

          <p>
            O código da aplicação segue princípios de modularidade e organização, permitindo 
            escalabilidade e manutenção facilitada. Adicionalmente, foi implementada uma pipeline 
            de integração contínua que suporta a aplicação, assegurando a automação de processos 
            de build, testes e deploy.
          </p>

          <p>
            A utilização de git foi aplicada de forma estratégica, com commits incrementais que 
            refletem a adição progressiva de funcionalidades. O projeto inclui ainda a implementação 
            de desafios não abordados durante as aulas, como caching de dados, Dark Mode e sistema 
            de favoritos.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-green-300 mb-4">Tecnologias e Ferramentas Utilizadas</h2>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div className="space-y-2">
            <p><span className="text-green-400">•</span> React</p>
            <p><span className="text-green-400">•</span> Redux Toolkit</p>
            <p><span className="text-green-400">•</span> RTK Query</p>
            <p><span className="text-green-400">•</span> GitHub</p>
          </div>
          <div className="space-y-2">
            <p><span className="text-green-400">•</span> React Router</p>
            <p><span className="text-green-400">•</span> Tailwind CSS</p>
            <p><span className="text-green-400">•</span> Rick and Morty API</p>
          </div>
        </div>
      </section>

    </div>
  );
}