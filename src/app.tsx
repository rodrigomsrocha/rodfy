import { ChevronRight } from 'lucide-react'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { AboutCommand } from './components/commands/about-command'
import { BlogCommand } from './components/commands/blog-command'
import { HelpCommand } from './components/commands/help-command'
import { ProjectsCommand } from './components/commands/projects-command'
import { SkillsCommand } from './components/commands/skills-command'
import { WelcomeCommand } from './components/commands/welcome-command'

const commands = [
  {
    name: 'welcome',
    description: 'displays a welcome message',
  },
  {
    name: 'about',
    description: 'displays information about me',
  },
  {
    name: 'skills',
    description: 'displays a list of my skills',
  },
  {
    name: 'help',
    description: 'displays a list of available commands',
  },
  {
    name: 'projects',
    description: 'displays a list of projects',
  },
  {
    name: 'blog',
    description: 'redirects you to my personal blog',
  },
  {
    name: 'clear',
    description: 'clears the terminal',
  },
]

export function App() {
  const [isCommandAvailable, setIsCommandAvailable] = useState(false)
  const [commandsList, setCommandsList] = useState(['welcome'])
  const [command, setCommand] = useState('')
  const commandInputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const clearShortcut = (event: KeyboardEvent) => {
      if (event.key === 'l' && event.ctrlKey) {
        event.preventDefault()
        handleClearCommand()
      }
    }

    window.addEventListener('keydown', clearShortcut)

    return () => {
      window.removeEventListener('keydown', clearShortcut)
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [commandsList])

  function onCommandInputChange(event: FormEvent<HTMLInputElement>) {
    const newCommand = event.currentTarget.value
    setCommand(newCommand)
    const commandExists = commands.some((cmd) => cmd.name === newCommand)
    setIsCommandAvailable(commandExists)
  }

  function handleCommandSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (command.trim() === '') {
      return
    }

    setCommandsList((prev) => [...prev, command])

    if (command === 'clear') {
      handleClearCommand()
    }

    setCommand('')
  }

  function handleClearCommand() {
    setCommandsList(['clear'])
  }

  function scrollToBottom() {
    if (commandInputRef.current) {
      commandInputRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-rosePine-base w-full h-screen flex items-center justify-center sm:p-8">
      <div className="relative max-w-7xl w-full bg-rosePine-surface max-sm:h-screen sm:aspect-video sm:rounded-lg px-4 shadow-md overflow-auto scrollbar">
        <header className="sticky bg-rosePine-surface top-0 left-0 right-0 py-4">
          <div className="flex gap-2">
            <div className="size-3 rounded-full bg-red-500 transition-colors hover:bg-red-600"></div>
            <div className="size-3 rounded-full bg-yellow-500 transition-colors hover:bg-yellow-600"></div>
            <div className="size-3 rounded-full bg-green-500 transition-colors hover:bg-green-600"></div>
          </div>
        </header>
        <div className="py-4">
          <div className="space-y-8">
            {commandsList.map((command, index) => {
              switch (command) {
                case 'welcome':
                  return <WelcomeCommand key={`${index}-${command}`} />
                case 'help':
                  return (
                    <HelpCommand
                      key={`${index}-${command}`}
                      commands={commands}
                    />
                  )
                case 'projects':
                  return <ProjectsCommand key={`${index}-${command}`} />
                case 'blog':
                  return <BlogCommand key={`${index}-${command}`} />
                case 'about':
                  return <AboutCommand key={`${index}-${command}`} />
                case 'skills':
                  return <SkillsCommand key={`${index}-${command}`} />
                default:
                  return null
              }
            })}
            <div ref={commandInputRef}></div>
          </div>
          <div className="space-y-2">
            <div className="text-rosePine-text flex items-center gap-2">
              <strong className="block text-rosePine-rose font-mono">
                user
              </strong>
              <span>on</span>
              <strong className="block text-rosePine-iris font-mono">
                ~/rodfy
              </strong>
            </div>
            <form
              onSubmit={handleCommandSubmit}
              className="flex gap-2 items-end"
            >
              <ChevronRight
                className="size-5 text-rosePine-pine"
                strokeWidth={3}
              />
              <input
                value={command}
                onChange={onCommandInputChange}
                autoFocus
                autoComplete="off"
                name="command"
                className={`w-full font-semibold font-mono caret-rosePine-text bg-transparent outline-none ${isCommandAvailable ? 'text-rosePine-foam' : 'text-rosePine-love'}`}
                type="text"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
