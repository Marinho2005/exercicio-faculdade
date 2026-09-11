import Cabecalho from './components/Cabecalho'
import Navegacao from './components/Navegacao'
import Rodape from './components/Rodape'
import './styles/global.css'

function App() {
  return (
    <>
      <Cabecalho />
      <Navegacao />
      <main>
        <section id="inicio" aria-labelledby="titulo-inicio">
          <h2 id="titulo-inicio">Início</h2>
          <p>Bem-vindo ao meu portfólio de atividades.</p>
        </section>

        <section id="atividades" aria-labelledby="titulo-atividades">
          <h2 id="titulo-atividades">Atividades</h2>
          <p>A lista das 30 atividades será renderizada aqui.</p>
          <ul className="lista-cartoes">
            <li className="card-atividade">
              <span className="card-numero">01</span>
              <h3>Preparar o ambiente</h3>
              <p className="card-descricao">Exemplo de descrição da atividade.</p>
              <span className="card-tecnologia">Git</span>
              <button className="card-botao" type="button">
                Ver atividade
              </button>
            </li>
            <li className="card-atividade">
              <span className="card-numero">02</span>
              <h3>Inicializar o repositório</h3>
              <p className="card-descricao">Exemplo de descrição da atividade.</p>
              <span className="card-tecnologia">Git</span>
              <button className="card-botao" type="button">
                Ver atividade
              </button>
            </li>
            <li className="card-atividade">
              <span className="card-numero">03</span>
              <h3>Estrutura semântica</h3>
              <p className="card-descricao">Exemplo de descrição da atividade.</p>
              <span className="card-tecnologia">HTML</span>
              <button className="card-botao" type="button">
                Ver atividade
              </button>
            </li>
          </ul>
        </section>

        <section id="sobre" aria-labelledby="titulo-sobre">
          <h2 id="titulo-sobre">Sobre</h2>
        </section>

        <section id="contato" aria-labelledby="titulo-contato">
          <h2 id="titulo-contato">Contato</h2>
        </section>
      </main>
      <Rodape />
    </>
  )
}

export default App