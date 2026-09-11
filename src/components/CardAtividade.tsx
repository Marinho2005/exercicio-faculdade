interface PropsCardAtividade {
  numero: number
  titulo: string
  descricao: string
  tecnologia: string
  link?: string
  onVer: () => void
}

function CardAtividade({
  numero,
  titulo,
  descricao,
  tecnologia,
  link,
  onVer,
}: PropsCardAtividade) {
  const numeroFormatado = String(numero).padStart(2, '0')

  return (
    <li className="card-atividade">
      <span className="card-numero">{numeroFormatado}</span>
      <h3>{titulo}</h3>
      <p className="card-descricao">{descricao}</p>
      <span className="card-tecnologia">{tecnologia}</span>
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