import { ChevronRight, Github, Instagram, Linkedin, Mail } from 'lucide-react'

export function SocialCommand() {
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
            social
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-8 pl-2">
        <div className="space-y-4">
          <strong>Fell free to cantact me.</strong>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Github strokeWidth={2} className="size-5" />
              <a
                className="text-rosePine-love hover:underline"
                href="https://github.com/rodrigomsrocha"
              >
                github.com/rodrigomsrocha
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin strokeWidth={2} className="size-5" />
              <a
                className="text-rosePine-love hover:underline"
                href="https://linkedin.com/in/rodrigo-rocha-547585214/"
              >
                linkedin.com/in/rodrigo-rocha-547585214
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram strokeWidth={2} className="size-5" />
              <a
                className="text-rosePine-love hover:underline"
                href="https://www.instagram.com/rod_2107/"
              >
                instagram.com/rod_2107
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <strong>Stay in touch, leave a message.</strong>
          <span className="flex items-center gap-2">
            <Mail strokeWidth={2} className="size-5" />
            <a
              className="text-rosePine-love hover:underline"
              href="mailto:rmsr1306@gmail.com"
            >
              rmsr1306@gmail.com
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
