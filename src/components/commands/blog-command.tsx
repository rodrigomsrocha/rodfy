import { ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

export function BlogCommand() {
  useEffect(() => {
    window.open('https://dev-nook.vercel.app/', '_blank')
  }, [])
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <strong className="block text-rosePine-rose font-mono">~/rod/</strong>
        <div className="flex gap-2 items-end">
          <ChevronRight className="size-5 text-rosePine-pine" strokeWidth={3} />
          <span className="text-rosePine-foam font-mono font-semibold">
            blog
          </span>
        </div>
      </div>
    </div>
  )
}
