import { useState } from 'react'
import { atividades, type Atividade } from '../data/atividades'
import CardAtividade from './CardAtividade'
import ContadorProgresso from './ContadorProgresso'
import ModalAtividade from './ModalAtividade'

const tecnologias = ['Todas', 'Git', 'HTML', 'CSS', 'React', 'Vercel'] as const
type FiltroTecnologia = (typeof tecnologias)[number]

function SecaoAtividades() {
  const [filtro, setFiltro] = useState<FiltroTecnologia>('Todas')
  const [termo, setTermo] = useState('')
  const [atividadeAberta, setAtividadeAberta] = useState<Atividade | null>(null)
  const [focoRetorno, setFocoRetorno] = useState<HTMLElement | null>(null)

  function abrirModal(atividade: Atividade) {
    setFocoRetorno(document.activeElement as HTMLElement | null)
    setAtividadeAberta(atividade)
  }

  /* progresso é derivado do array original — nada foi estimado/chutado */
  const totalAtividades = atividades.length
  const concluidas = atividades.filter(
    (atividade) => atividade.status === 'Concluída',
  ).length

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
        <div className="secao-cabecalho">
          <div>
            <span className="secao-etiqueta">Minha jornada</span>
            <h2 id="titulo-atividades">Atividades e projetos</h2>
          </div>
          <p>Uma coleção prática do que venho construindo e aprendendo em desenvolvimento web.</p>
        </div>

        <div className="atividades-painel">
          <ContadorProgresso total={totalAtividades} concluidas={concluidas} />
          <div className="busca-campo">
            <label className="sr-only" htmlFor="busca-atividade">
              Buscar atividade
            </label>
            <span className="busca-icone" aria-hidden="true">⌕</span>
            <input
              id="busca-atividade"
              className="busca-input"
              type="search"
              placeholder="Buscar atividade..."
              value={termo}
              onChange={(evento) => setTermo(evento.target.value)}
            />
          </div>
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
                onVer={() => abrirModal(atividade)}
              />
            ))}
          </ul>
        )}
      </div>
      {atividadeAberta && (
        <ModalAtividade
          atividade={atividadeAberta}
          aoFechar={() => setAtividadeAberta(null)}
          focoRetorno={focoRetorno}
        />
      )}
    </section>
  )
}

export default SecaoAtividades
