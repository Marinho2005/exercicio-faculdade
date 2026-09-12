import { useEffect, useRef } from 'react'
import type { Atividade } from '../data/atividades'

interface PropsModalAtividade {
  atividade: Atividade
  aoFechar: () => void
  focoRetorno: HTMLElement | null
}

function ModalAtividade({ atividade, aoFechar, focoRetorno }: PropsModalAtividade) {
  const botaoFechar = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    botaoFechar.current?.focus()

    function fecharComEscape(evento: KeyboardEvent) {
      if (evento.key === 'Escape') aoFechar()
    }

    document.addEventListener('keydown', fecharComEscape)
    return () => {
      document.removeEventListener('keydown', fecharComEscape)
      focoRetorno?.focus()
    }
  }, [aoFechar, focoRetorno])

  return (
    <div
      className="modal-fundo"
      onMouseDown={(evento) => {
        if (evento.target === evento.currentTarget) aoFechar()
      }}
    >
      <div
        className="modal-caixa"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-titulo"
        aria-describedby="modal-descricao"
      >
        <button
          ref={botaoFechar}
          className="modal-fechar"
          type="button"
          aria-label="Fechar detalhes da atividade"
          onClick={aoFechar}
        >
          ×
        </button>

        <div className="modal-conteudo">
          <p className="card-numero">Atividade {String(atividade.numero).padStart(2, '0')}</p>
          <h3 id="modal-titulo">{atividade.titulo}</h3>
          <p id="modal-descricao">{atividade.descricao}</p>
          <p className="modal-tecnologia"><strong>Tecnologia:</strong> {atividade.tecnologia}</p>
          <p className="modal-status"><strong>Status:</strong> {atividade.status}</p>
          <h4>Aprendizagem</h4>
          <p>{atividade.aprendizagem}</p>
          <h4>Evidência</h4>
          <p>{atividade.evidencia}</p>
        </div>
      </div>
    </div>
  )
}

export default ModalAtividade
