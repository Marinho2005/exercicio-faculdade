import avatar from '../assets/Avatar Masculino em Círculo Azul Navy.png'

function Cabecalho() {
  return (
    <header id="inicio" className="cabecalho">
      <div className="container cabecalho-conteudo">
        <div className="cabecalho-texto">
          <span className="cabecalho-etiqueta">
            <span aria-hidden="true" /> Disponível para aprender e colaborar
          </span>
          <p className="cabecalho-saudacao">Olá, eu sou</p>
          <h1>Victor Marinho<span>.</span></h1>
          <p className="cabecalho-curso">Estudante de Desenvolvimento Web</p>
          <p className="cabecalho-descricao">
            Transformo aprendizado em projetos reais, construindo experiências
            digitais simples, acessíveis e bem resolvidas.
          </p>
          <div className="grupo-botoes">
            <a className="botao botao-primario" href="#atividades">
              Ver meus projetos <span aria-hidden="true">↗</span>
            </a>
            <a className="botao-secundario" href="#sobre">
              Sobre mim
            </a>
          </div>
        </div>
        <div className="avatar-moldura">
          <span className="avatar-detalhe avatar-detalhe-um" />
          <span className="avatar-detalhe avatar-detalhe-dois" />
          <img
            className="cabecalho-avatar"
            src={avatar}
            alt="Avatar ilustrado de Victor Marinho"
          />
          <div className="avatar-selo">
            <strong>30</strong>
            <span>atividades</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Cabecalho
