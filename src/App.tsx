import Cabecalho from './components/Cabecalho'
import FormularioContato from './components/FormularioContato'
import Navegacao from './components/Navegacao'
import Rodape from './components/Rodape'
import SecaoAtividades from './components/SecaoAtividades'
import Sobre from './components/Sobre'
import './styles/global.css'

function App() {
  return (
    <>
      <a className="pular-para" href="#conteudo-principal">Pular para o conteúdo principal</a>
      <Navegacao />
      <Cabecalho />
      <main id="conteudo-principal" tabIndex={-1}>
        <SecaoAtividades />

        <Sobre />

        <section id="contato" className="secao-contato" aria-labelledby="titulo-contato">
          <div className="container contato-layout">
            <div className="contato-introducao">
              <span className="secao-etiqueta">Vamos conversar</span>
              <h2 id="titulo-contato">Tem uma ideia em mente?</h2>
              <p>
                Envie uma mensagem. Estou sempre aberto a novos projetos,
                aprendizados e boas conversas sobre tecnologia.
              </p>
              <a className="contato-email" href="https://github.com/Marinho2005" target="_blank" rel="noreferrer">
                github.com/<wbr />Marinho2005
              </a>
            </div>
            <div className="contato-formulario">
              <FormularioContato />
            </div>
          </div>
        </section>
      </main>
      <Rodape />
    </>
  )
}

export default App
