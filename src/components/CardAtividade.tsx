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
      <span className="card-numero">{numeroFormatado}</span>
      <h3>{titulo}</h3>
      <p className="card-descricao">{descricao}</p>
      <div className="card-metadados">
        <span
          className={`card-status card-status-${status.toLowerCase()}`}
        >
          {rotulosStatus[status]}
        </span>
        <span className="card-tecnologia">{tecnologia}</span>
      </div>
      {link && (
        <a className="card-link" href={link} target="_blank" rel="noreferrer">
          Repositório
        </a>
      )}
      <button className="card-botao" type="button" onClick={onVer}>
        Ver atividade
      </button>
    </li>
  )
}

export default CardAtividade