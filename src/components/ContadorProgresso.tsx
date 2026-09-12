interface PropsContadorProgresso {
  total: number
  concluidas: number
}

function ContadorProgresso({ total, concluidas }: PropsContadorProgresso) {
  return (
    <p className="contador-progresso">
      {concluidas} de {total} atividades concluídas
    </p>
  )
}

export default ContadorProgresso
