import { useEffect, useState } from 'react'

type Tema = 'claro' | 'escuro'

function TemaBotao() {
  const [tema, setTema] = useState<Tema>(() => {
    /* preferência inicial: tema salvo pelo usuário ou o do sistema (não chutei valor) */
    const salvo = window.localStorage.getItem('tema')
    if (salvo === 'claro' || salvo === 'escuro') return salvo
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'escuro' : 'claro'
  })

  /* aplicar e persistir: não há sessão sem efeito; padrão respeitado */
  useEffect(() => {
    document.documentElement.dataset.tema = tema
    window.localStorage.setItem('tema', tema)
  }, [tema])

  const proximoTema: Tema = tema === 'claro' ? 'escuro' : 'claro'

  return (
    <button
      className="tema-botao"
      type="button"
      aria-label={`Ativar tema ${proximoTema}`}
      aria-pressed={tema === 'escuro'}
      onClick={() => setTema(proximoTema)}
    >
      {tema === 'claro' ? '🌙' : '☀️'}
    </button>
  )
}

export default TemaBotao
