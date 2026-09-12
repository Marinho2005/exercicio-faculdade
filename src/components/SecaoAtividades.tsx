import { atividades } from '../data/atividades'
import CardAtividade from './CardAtividade'

function SecaoAtividades() {
  return (
    <section id="atividades" aria-labelledby="titulo-atividades">
      <div className="container">
        <h2 id="titulo-atividades">Atividades</h2>
        <ul className="lista-cartoes">
          {/* map transforma cada item do array em um cartão com a propria key */}
          {atividades.map((atividade) => (
            <CardAtividade
              key={atividade.id}
              numero={atividade.id}
              titulo={atividade.titulo}
              descricao={atividade.descricao}
              tecnologia={atividade.tecnologia}
              status={atividade.status}
              link={atividade.link}
              onVer={() => {}}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default SecaoAtividades