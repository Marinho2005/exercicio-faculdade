interface PropsContadorProgresso {
  total: number
  concluidas: number
}

function ContadorProgresso({ total, concluidas }: PropsContadorProgresso) {
  /* porcentagem derivada; nenhum valor foi guardado nem estimado */
  const porcentagem = total === 0 ? 0 : Math.round((concluidas / total) * 100)

  return (
    <div className="progresso">
      <div className="progresso-info">
        <p className="progresso-texto">Progresso geral</p>
        <strong className="progresso-porcentagem">{porcentagem}%</strong>
      </div>
      <div
        className="progresso-barra"
        role="progressbar"
        aria-label="Progresso das atividades"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={concluidas}
        aria-valuetext={`${concluidas} de ${total} concluídas (${porcentagem}%)`}
      >
        <span className="progresso-preenchimento" style={{ width: `${porcentagem}%` }} />
      </div>
      <small>{concluidas} de {total} atividades concluídas</small>
    </div>
  )
}

export default ContadorProgresso
