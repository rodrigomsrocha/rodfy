import { ChevronRight } from 'lucide-react'

export function AboutCommand() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <strong className="block text-rosePine-rose font-mono">~/rod/</strong>
        <div className="flex gap-2 items-end">
          <ChevronRight className="size-5 text-rosePine-pine" strokeWidth={3} />
          <span className="text-rosePine-foam font-mono font-semibold">
            about
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-8 pl-2">
        <pre className="text-xs font-mono hidden sm:block text-rosePine-gold font-bold">
          {`                                                 .------.------.    
  +-------------+                     ___        |      |      |    
  |             |                     \\ /]       |      |      |    
  |             |                    _(_)        |      |      |    
  |             |     _____         [  | \\___    |      |      |    
  |             |     ) //o          | |     \\   |      |      |    
  |             |  _ (_    >         | |      ]  |      |      |    
  |          __ | (O)  \\__<          | | ____/   '------'------'    
  |         /  o| [/] /   \\)        [__|/_                          
  |             | [\\]|  ( \\         __/___\\_____                    
  |             | [/]|   \\ \\__  ___|            |                   
  |             | [\\]|    \\___E/%%/|____________|_____              
  |             | [/]|=====__   (_____________________)             
  |             | [\\] \\_____ \\    |                  |              
  |             | [/========\\ |   |                  |              
  |             | [\\]     []| |   |                  |              
  |             | [/]     []| |_  |                  |              
  |             | [\\]     []|___) |                  |                  
====================================================================`}
        </pre>
        <div className="space-y-2 max-w-2xl">
          <p>
            My name is Rodrigo, and I am a{' '}
            <strong className="font-semibold text-rosePine-foam">
              full stack developer
            </strong>{' '}
            with strong experience in{' '}
            <strong className="font-semibold text-rosePine-iris">
              JavaScript
            </strong>
            , including frameworks and libraries like React and Node.js. I have
            solid skills in{' '}
            <strong className="font-semibold text-rosePine-iris">
              Tailwind, HTML, and CSS
            </strong>
            , enabling me to create dynamic and responsive user interfaces.
            Additionally, I have beginner-level knowledge in{' '}
            <strong className="font-semibold text-rosePine-iris">Java</strong>.
          </p>
          <p>
            I am currently studying{' '}
            <strong className="font-semibold text-rosePine-foam">
              Computer Science
            </strong>{' '}
            at PUC Minas. My development approach focuses on building efficient
            and scalable solutions while adhering to best coding and design
            practices. I am continuously improving my skills and learning new
            technologies to stay updated with industry trends.
          </p>
        </div>
      </div>
    </div>
  )
}
