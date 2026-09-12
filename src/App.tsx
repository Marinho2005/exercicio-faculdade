import Cabecalho from './components/Cabecalho'
import FormularioContato from './components/FormularioContato'
import Navegacao from './components/Navegacao'
import Rodape from './components/Rodape'
import SecaoAtividades from './components/SecaoAtividades'
import './styles/global.css'

function App() {
  return (
    <>
      <Cabecalho />
      <Navegacao />
      <main>
        <section id="inicio" aria-labelledby="titulo-inicio">
          <div className="container">
            <h2 id="titulo-inicio">Início</h2>
            <p>Bem-vindo ao meu portfólio de atividades.</p>
          </div>
        </section>

        <SecaoAtividades />

        <section id="sobre" aria-labelledby="titulo-sobre">
          <div className="container">
            <h2 id="titulo-sobre">Sobre</h2>
          </div>
        </section>

        <section id="contato" aria-labelledby="titulo-contato">
          <div className="container">
            <h2 id="titulo-contato">Contato</h2>
            <FormularioContato />
          </div>
        </section>
      </main>
      <Rodape />
    </>
  )
}

export default App
