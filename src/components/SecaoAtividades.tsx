import { useState } from 'react'
import { atividades } from '../data/atividades'
import CardAtividade from './CardAtividade'

const tecnologias = ['Todas', 'Git', 'HTML', 'CSS', 'React', 'Vercel'] as const
type FiltroTecnologia = (typeof tecnologias)[number]

function SecaoAtividades() {
  const [filtro, setFiltro] = useState<FiltroTecnologia>('Todas')
  const [termo, setTermo] = useState('')

  /* normalização da busca: compara tudo em caixa baixa, sem tocar no array original */
  const termoNormalizado = termo.trim().toLowerCase()

  /* lista derivada do filtro de tecnologia; nada foi mutado/alterado no original */
  const porTecnologia =
    filtro === 'Todas'
      ? atividades
      : atividades.filter((atividade) => atividade.tecnologia === filtro)

  /* lista derivada da busca por texto sobre a lista já filtrada por tecnologia */
  const atividadesFiltradas =
    termoNormalizado === ''
      ? porTecnologia
      : porTecnologia.filter(
          (atividade) =>
            atividade.titulo.toLowerCase().includes(termoNormalizado) ||
            atividade.descricao.toLowerCase().includes(termoNormalizado),
        )

  return (
    <section id="atividades" aria-labelledby="titulo-atividades">
      <div className="container">
        <h2 id="titulo-atividades">Atividades</h2>

        <div className="busca-campo">
          <label className="busca-rotulo" htmlFor="busca-atividade">
            Buscar atividade
          </label>
          <input
            id="busca-atividade"
            className="busca-input"
            type="search"
            placeholder="Buscar por título ou descrição…"
            value={termo}
            onChange={(evento) => setTermo(evento.target.value)}
          />
        </div>

        <div className="filtros" role="group" aria-label="Filtrar por tecnologia">
          {tecnologias.map((tecnologia) => (
            <button
              key={tecnologia}
              className="filtro-botao"
              type="button"
              aria-pressed={filtro === tecnologia}
              onClick={() => setFiltro(tecnologia)}
            >
              {tecnologia}
            </button>
          ))}
        </div>

        {atividadesFiltradas.length === 0 ? (
          <p className="busca-vazia" role="status">
            Nenhuma atividade encontrada para essa busca/filtro.
          </p>
        ) : (
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
        )}
      </div>
    </section>
  )
}

export default SecaoAtividades
