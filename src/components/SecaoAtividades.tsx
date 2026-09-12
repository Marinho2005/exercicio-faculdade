import { useState } from 'react'
import { atividades } from '../data/atividades'
import CardAtividade from './CardAtividade'

const tecnologias = ['Todas', 'Git', 'HTML', 'CSS', 'React', 'Vercel'] as const
type FiltroTecnologia = (typeof tecnologias)[number]

function SecaoAtividades() {
  const [filtro, setFiltro] = useState<FiltroTecnologia>('Todas')

  /* lista derivada: nada no array original foi alterado/mutado */
  const atividadesFiltradas =
    filtro === 'Todas'
      ? atividades
      : atividades.filter((atividade) => atividade.tecnologia === filtro)

  return (
    <section id="atividades" aria-labelledby="titulo-atividades">
      <div className="container">
        <h2 id="titulo-atividades">Atividades</h2>

        <p className="filtros-dica">Filtrar por tecnologia:</p>
        <div className="grupo-filtros" role="group" aria-label="Filtrar por tecnologia">
          {tecnologias.map((tecnologia) => (
            <button
              key={tecnologia}
              className={`filtro-botao${filtro === tecnologia ? ' filtro-botao-ativo' : ''}`}
              type="button"
              aria-pressed={filtro === tecnologia}
              onClick={() => setFiltro(tecnologia)}
            >
              {tecnologia}
            </button>
          ))}
        </div>

        <ul className="lista-cartoes">
          {/* map transforma cada item do array filtrado em um cartão com key estável */}
          {atividadesFiltradas.map((atividade) => (
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