import hero from '../assets/hero.png'

function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="container cabecalho-conteudo">
        <img
          className="cabecalho-avatar"
          src={hero}
          alt="Ilustração do autor no topo do portfólio"
        />
        <div className="cabecalho-texto">
          <h1>Victor Marinho</h1>
          <p className="cabecalho-curso">Desenvolvimento Web · 3º período</p>
          <p className="cabecalho-descricao">
            Portfólio com as 30 atividades de HTML, CSS, React, Git e Vercel.
          </p>
          <a className="botao" href="#atividades">
            Ver atividades
          </a>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho