import { ChevronRight } from 'lucide-react'

export function SkillsCommand() {
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
            skills
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-4 pl-2 max-w-lg">
        <strong>Here is the list of my skills</strong>
        <ul className="list-disc w-full space-y-4">
          <div>
            <strong className="text-rosePine-iris font-bold">Front-End</strong>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">HTML</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">CSS/Sass</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">Tailwind</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">Javascript</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">Typescript</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣀⣀⣀</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong>React</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong>NextJS</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣀⣀</span>
              </p>
            </li>
          </div>
          <div>
            <strong className="text-rosePine-iris font-bold">Back-end</strong>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">Node</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣀⣀</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">Express</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣿⣿⣿⣿⣿⣀⣀</span>
              </p>
            </li>
            <li className="grid grid-cols-2 justify-between">
              <strong className="">Java</strong>
              <p className="text-rosePine-foam">
                <span className="">⣿⣿⣿⣀⣀⣀⣀⣀⣀⣀</span>
              </p>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}
