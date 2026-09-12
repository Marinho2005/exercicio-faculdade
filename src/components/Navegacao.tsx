import TemaBotao from './TemaBotao'

function Navegacao() {
  return (
    <nav className="navegacao" aria-label="Navegação principal">
      <div className="container navegacao-conteudo">
        <a className="marca" href="#inicio" aria-label="Victor Marinho — início">
          VM<span>.</span>
        </a>
        <ul className="navegacao-lista">
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#atividades">Atividades</a>
          </li>
          <li>
            <a href="#contato">Contato</a>
          </li>
        </ul>
        <TemaBotao />
      </div>
    </nav>
  )
}

export default Navegacao
