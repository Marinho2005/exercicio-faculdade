import { useState, type FormEvent } from 'react'

function FormularioContato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setEnviado(true)
    setNome('')
    setEmail('')
    setAssunto('')
    setMensagem('')
  }

  return (
    <form className="formulario" onSubmit={enviar}>
      <div className="campo">
        <label htmlFor="nome">Nome <span className="requerido">*</span></label>
        <input id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div className="campo">
        <label htmlFor="email">E-mail <span className="requerido">*</span></label>
        <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="campo">
        <label htmlFor="assunto">Assunto <span className="requerido">*</span></label>
        <input id="assunto" name="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} required />
      </div>
      <div className="campo">
        <label htmlFor="mensagem">Mensagem <span className="requerido">*</span></label>
        <textarea id="mensagem" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required />
      </div>
      <div className="formulario-botoes">
        <button className="botao" type="submit">Enviar mensagem</button>
      </div>
      {enviado && <p className="mensagem-sucesso" role="status">Mensagem enviada com sucesso.</p>}
    </form>
  )
}

export default FormularioContato
