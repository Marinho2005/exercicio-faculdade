import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import './styles/global.css'

function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <section id="inicio" aria-labelledby="titulo-inicio">
          <h2 id="titulo-inicio">Início</h2>
          <p>Bem-vindo ao meu portfólio de atividades.</p>
        </section>

        <section id="atividades" aria-labelledby="titulo-atividades">
          <h2 id="titulo-atividades">Atividades</h2>
          <p>A lista das 30 atividades será renderizada aqui.</p>
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