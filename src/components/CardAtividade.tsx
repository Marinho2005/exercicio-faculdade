import type { Status } from '../data/atividades'

interface PropsCardAtividade {
  numero: number
  titulo: string
  descricao: string
  tecnologia: string
  status: Status
  link?: string
  onVer: () => void
}

const rotulosStatus: Record<Status, string> = {
  'Concluída': '✓ Concluída',
  'Em andamento': '⟳ Em andamento',
  'Planejada': '○ Planejada',
}

function CardAtividade({
  numero,
  titulo,
  descricao,
  tecnologia,
  status,
  link,
  onVer,
}: PropsCardAtividade) {
  const numeroFormatado = String(numero).padStart(2, '0')

  return (
    <li className="card-atividade">
      <div className="card-topo">
        <span className="card-numero">{numeroFormatado}</span>
        <span className={`card-status card-status-${status.toLowerCase().replace(' ', '-')}`}>
          {rotulosStatus[status]}
        </span>
      </div>
      <h3>{titulo}</h3>
      <p className="card-descricao">{descricao}</p>
      <div className="card-rodape">
        <span className="card-tecnologia">{tecnologia}</span>
        <div className="card-acoes">
          {link && (
            <a className="card-link" href={link} target="_blank" rel="noreferrer">
              Repo
            </a>
          )}
          <button className="card-botao" type="button" onClick={onVer} aria-label={`Ver detalhes de ${titulo}`}>
            Ver <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </li>
  )
}

export default CardAtividade
