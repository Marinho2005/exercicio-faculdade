const habilidades = ['HTML semântico', 'CSS responsivo', 'React', 'TypeScript', 'Git', 'Vercel']

function Sobre() {
  return (
    <section id="sobre" aria-labelledby="titulo-sobre">
      <div className="container">
        <h2 id="titulo-sobre">Sobre mim</h2>
        <div className="sobre-conteudo">
          <div>
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
            <h3>Como trabalho</h3>
            <p>Priorizo código simples, acessível, responsivo e versionado em etapas pequenas.</p>
            <p>
              <a href="https://github.com/Marinho2005" target="_blank" rel="noreferrer">Ver perfil no GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
