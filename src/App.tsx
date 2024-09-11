import logo from './assets/logo.svg'
import letsStart from './assets/ilustration.svg'
import { Plus } from 'lucide-react'
import { Button } from './components/ui/button'

export function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="inorbit" />
      <img src={letsStart} alt="inorbit" />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo?
      </p>
      <Button>
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </div>
  )
}
