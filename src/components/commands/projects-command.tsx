import { ChevronRight } from 'lucide-react'

export function ProjectsCommand() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <strong className="block text-rosePine-rose font-mono">~/rod/</strong>
        <div className="flex gap-2 items-end">
          <ChevronRight className="size-5 text-rosePine-pine" strokeWidth={3} />
          <span className="text-rosePine-foam font-mono font-semibold">
            projects
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-4 pl-2">
        <strong>
          I have a lot of projects on my{' '}
          <a
            className="text-rosePine-love hover:underline"
            href="https://github.com/rodrigomsrocha/"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          , but here are my favorite ones:
        </strong>
        <div className="space-y-4">
          <div className="max-w-lg">
            <header className="flex">
              <p>
                <a
                  className="text-rosePine-rose font-semibold hover:underline"
                  href="https://github.com/rodrigomsrocha/dev-nook"
                >
                  DevNook
                </a>{' '}
                - Next, Typescript, Tailwind, ContentLayer
              </p>
            </header>
            <p>
              DevNook is my personal blog dedicated to all things software
              development and programming.
            </p>
          </div>
          <div className="max-w-lg">
            <header className="flex">
              <p>
                <a
                  className="text-rosePine-rose font-semibold hover:underline"
                  href="https://github.com/ICEI-PUC-Minas-CC-TI/plmg-cc-ti2-2024-1-g22-bilhete-facil"
                >
                  Bilhete Fácil
                </a>{' '}
                - React, Typescript, Java, Spark
              </p>
            </header>
            <p>
              Bilhete Fácil is a group project developed for a university
              course. It is a platform where you can buy tickets from people who
              can no longer attend an event.
            </p>
          </div>
          <div className="max-w-lg">
            <header className="flex">
              <p>
                <a
                  className="text-rosePine-rose font-semibold hover:underline"
                  href="https://github.com/rodrigomsrocha/upic"
                >
                  Upic
                </a>{' '}
                - Node, Fastify, Prisma, Postgress
              </p>
            </header>
            <p>
              This project provides a lightning-fast and efficient solution for
              securely uploading images to your server.
            </p>
          </div>
          <div className="max-w-lg">
            <header className="flex">
              <p>
                <a
                  className="text-rosePine-rose font-semibold hover:underline"
                  href="https://github.com/WebTech-PUC-Minas/web-sec-id"
                >
                  SecID
                </a>{' '}
                - Node, Typescript, Express, PassportJS
              </p>
            </header>
            <p>
              SecID is an express library, that provides an authentication
              strategy for your node porjects
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
