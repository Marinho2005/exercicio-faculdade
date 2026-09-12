const habilidades = ['HTML semântico', 'CSS responsivo', 'React', 'TypeScript', 'Git', 'Vercel']

function Sobre() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre">
      <div className="container">
        <div className="sobre-conteudo">
          <div className="sobre-introducao">
            <span className="secao-etiqueta">Um pouco sobre mim</span>
            <h2 id="titulo-sobre">Código com propósito, evolução constante.</h2>
            <p className="texto-sobre">
              Sou Victor Marinho, estudante de Desenvolvimento Web no 3º período. Este portfólio registra minha evolução prática em 30 atividades, desde a estrutura semântica até a publicação da aplicação.
            </p>
            <ul className="lista-habilidades" aria-label="Habilidades praticadas">
              {habilidades.map((habilidade) => (
                <li className="habilidade" key={habilidade}>{habilidade}</li>
              ))}
            </ul>
          </div>
          <div className="sobre-card">
            <span className="sobre-card-icone" aria-hidden="true">⌘</span>
            <h3>Como eu trabalho</h3>
            <p>Priorizo código simples, acessível e responsivo, sempre evoluindo em etapas pequenas e bem versionadas.</p>
            <a href="https://github.com/Marinho2005" target="_blank" rel="noreferrer">
              Ver perfil no GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
