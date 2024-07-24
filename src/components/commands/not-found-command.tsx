import { ChevronRight } from 'lucide-react'

interface NotFoundCommandProps {
  command: string
}

export function NotFoundCommand({ command }: NotFoundCommandProps) {
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
          <span className="text-rosePine-love font-mono font-semibold">
            {command}
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-4 pl-2">
        <strong className="block">command not found: {command}</strong>
        <span className="block">
          To see the available commands, type{' '}
          <pre className="font-bold text-rosePine-iris inline">`help`</pre>
        </span>
      </div>
    </div>
  )
}
