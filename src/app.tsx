import { ChevronRight } from 'lucide-react'
import { FormEvent, useState } from 'react'

const commands = ['help', 'welcome']

export function App() {
  const [isCommandAvailable, setIsCommandAvailable] = useState(false)

  function onCommandInoutChange(event: FormEvent<HTMLInputElement>) {
    const command = event.currentTarget.value
    setIsCommandAvailable(commands.includes(command))
  }

  return (
    <div className="bg-rosePine-base w-full h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl w-full bg-rosePine-surface aspect-video rounded-lg p-4 shadow-md space-y-8">
        <header>
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-400 transition-colors hover:bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-400 transition-colors hover:bg-yellow-500"></div>
            <div className="size-3 rounded-full bg-green-400 transition-colors hover:bg-green-500"></div>
          </div>
        </header>
        <div className="space-y-2">
          <strong className="block text-rosePine-rose font-mono">
            ~/home/
          </strong>
          <div className="flex gap-2 items-end">
            <ChevronRight
              className="size-5 text-rosePine-pine"
              strokeWidth={3}
            />
            <span className="text-rosePine-foam font-medium font-mono">
              welcome
            </span>
          </div>
          <div className="text-rosePine-text font-mono space-y-8">
            <pre className="text-xs hidden sm:block text-center font-mono leading-none text-rosePine-gold font-bold">
              {`
      ___           ___          _____          ___               
     /  /\\         /  /\\        /  /::\\        /  /\\        ___   
    /  /::\\       /  /::\\      /  /:/\\:\\      /  /:/_      /__/|  
   /  /:/\\:\\     /  /:/\\:\\    /  /:/  \\:\\    /  /:/ /\\    |  |:|  
  /  /:/~/:/    /  /:/  \\:\\  /__/:/ \\__\\:|  /  /:/ /:/    |  |:|  
 /__/:/ /:/___ /__/:/ \\__\\:\\ \\  \\:\\ /  /:/ /__/:/ /:/   __|__|:|  
 \\  \\:\\/:::::/ \\  \\:\\ /  /:/  \\  \\:\\  /:/  \\  \\:\\/:/   /__/::::\\  
  \\  \\::/~~~~   \\  \\:\\  /:/    \\  \\:\\/:/    \\  \\::/       ~\\~~\\:\\ 
   \\  \\:\\        \\  \\:\\/:/      \\  \\::/      \\  \\:\\         \\  \\:\\
    \\  \\:\\        \\  \\::/        \\__\\/        \\  \\:\\         \\__\\/
     \\__\\/         \\__\\/                       \\__\\/              
        `}
            </pre>
            <div className="pl-8 text-rosePine-foam space-y-4">
              <p className="font-bold">Welcome to my terminal portfolio :)</p>
              <ul className="list-disc pl-8 space-y-2">
                <li>
                  You can see the source code{' '}
                  <a
                    className="text-rosePine-love hover:underline"
                    href="https://github.com/rodrigomsrocha/rodfy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </li>
                <li className="">
                  To see the available commands, type{' '}
                  <pre className="font-bold text-rosePine-iris inline">
                    `help`
                  </pre>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <strong className="block text-rosePine-rose font-mono">
            ~/home/
          </strong>
          <form className="flex gap-2 items-end">
            <ChevronRight
              className="size-5 text-rosePine-pine"
              strokeWidth={3}
            />
            <input
              onChange={onCommandInoutChange}
              className={`caret-rosePine-text bg-transparent outline-none ${isCommandAvailable ? 'text-rosePine-foam' : 'text-rosePine-love'}`}
              type="text"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
