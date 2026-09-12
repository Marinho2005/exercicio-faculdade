import { useState, type FormEvent } from 'react'

type ErrosFormulario = Partial<Record<'nome' | 'email' | 'assunto' | 'mensagem', string>>

function FormularioContato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [erros, setErros] = useState<ErrosFormulario>({})

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    const novosErros: ErrosFormulario = {}

    if (nome.trim().length < 2) novosErros.nome = 'Informe um nome com pelo menos 2 caracteres.'
    if (!/^\S+@\S+\.\S+$/.test(email)) novosErros.email = 'Informe um e-mail válido.'
    if (assunto.trim().length < 3) novosErros.assunto = 'Informe um assunto com pelo menos 3 caracteres.'
    if (mensagem.trim().length < 10) novosErros.mensagem = 'Escreva uma mensagem com pelo menos 10 caracteres.'

    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) {
      setEnviado(false)
      return
    }

    setEnviado(true)
    setNome('')
    setEmail('')
    setAssunto('')
    setMensagem('')
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      <div className="campo">
        <label htmlFor="nome">Nome <span className="requerido">*</span></label>
        <input id="nome" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} required aria-invalid={Boolean(erros.nome)} aria-describedby={erros.nome ? 'erro-nome' : undefined} />
        {erros.nome && <span className="erro" id="erro-nome">{erros.nome}</span>}
      </div>
      <div className="campo">
        <label htmlFor="email">E-mail <span className="requerido">*</span></label>
        <input id="email" name="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required aria-invalid={Boolean(erros.email)} aria-describedby={erros.email ? 'erro-email' : undefined} />
        {erros.email && <span className="erro" id="erro-email">{erros.email}</span>}
      </div>
      <div className="campo">
        <label htmlFor="assunto">Assunto <span className="requerido">*</span></label>
        <input id="assunto" name="assunto" value={assunto} onChange={(e) => setAssunto(e.target.value)} required aria-invalid={Boolean(erros.assunto)} aria-describedby={erros.assunto ? 'erro-assunto' : undefined} />
        {erros.assunto && <span className="erro" id="erro-assunto">{erros.assunto}</span>}
      </div>
      <div className="campo">
        <label htmlFor="mensagem">Mensagem <span className="requerido">*</span></label>
        <textarea id="mensagem" name="mensagem" value={mensagem} onChange={(e) => setMensagem(e.target.value)} required aria-invalid={Boolean(erros.mensagem)} aria-describedby={erros.mensagem ? 'erro-mensagem' : undefined} />
        {erros.mensagem && <span className="erro" id="erro-mensagem">{erros.mensagem}</span>}
      </div>
      <div className="formulario-botoes">
        <button className="botao" type="submit">Enviar mensagem</button>
      </div>
      {enviado && <p className="mensagem-sucesso" role="status">Mensagem enviada com sucesso.</p>}
    </form>
  )
}

export default FormularioContato
