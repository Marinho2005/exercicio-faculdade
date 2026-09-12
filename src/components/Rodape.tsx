function Rodape() {
  const ano = new Date().getFullYear()

  return (
    <footer className="rodape">
      <div className="container rodape-conteudo">
        <p>Victor Marinho — {ano}</p>
        <a href="#inicio">Voltar ao topo</a>
      </div>
    </footer>
  )
}

export default Rodape