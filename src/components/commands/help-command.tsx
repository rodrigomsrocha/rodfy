import { ChevronRight } from 'lucide-react'

interface HelpCommandProps {
  commands: { name: string; description: string }[]
}

export function HelpCommand({ commands }: HelpCommandProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <strong className="block text-rosePine-rose font-mono">~/rod/</strong>
        <div className="flex gap-2 items-end">
          <ChevronRight className="size-5 text-rosePine-pine" strokeWidth={3} />
          <span className="text-rosePine-foam font-mono font-semibold">
            help
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-8 pl-2">
        <strong>Here&apos;s the list of available commands.</strong>
        <div>
          {commands.map((command) => {
            return (
              <div key={command.name} className="grid grid-cols-4">
                <strong>{command.name}</strong>
                <p className="col-span-3">- {command.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
