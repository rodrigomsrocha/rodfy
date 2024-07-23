import { ChevronRight } from 'lucide-react'

export function WelcomeCommand() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-rosePine-text flex items-center gap-2">
          <strong className="block text-rosePine-rose font-mono">user</strong>
          <span>on</span>
          <strong className="block text-rosePine-iris font-mono">
            ~/rodfy
          </strong>
        </div>
        <div className="flex gap-2 items-end">
          <ChevronRight className="size-5 text-rosePine-pine" strokeWidth={3} />
          <span className="text-rosePine-foam font-mono font-semibold">
            welcome
          </span>
        </div>
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
        <div className="pl-2 text-rosePine-foam space-y-4">
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
              <pre className="font-bold text-rosePine-iris inline">`help`</pre>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
