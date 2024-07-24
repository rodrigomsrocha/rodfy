import { ChevronRight } from 'lucide-react'

import * as Tabs from '@radix-ui/react-tabs'

export function EducationCommand() {
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
            education
          </span>
        </div>
      </div>
      <div className="text-rosePine-text font-mono space-y-8 pl-2">
        <strong>Where I learned this things</strong>
        <div>
          <Tabs.Root
            className="flex max-md:flex-col max-md:gap-8 gap-4"
            defaultValue="puc"
          >
            <Tabs.List className="flex md:w-1/4 md:flex-col gap-2 items-start justify-stretch">
              <Tabs.Trigger value="puc" asChild>
                <span className="text-rosePine-subtle data-[state=active]:text-rosePine-iris font-bold border border-rosePine-subtle data-[state=active]:border-rosePine-iris w-full p-1.5 truncate">
                  PUC Minas
                </span>
              </Tabs.Trigger>
              <Tabs.Trigger value="rocketseat" asChild>
                <span className="text-rosePine-subtle data-[state=active]:text-rosePine-iris font-bold border border-rosePine-subtle data-[state=active]:border-rosePine-iris w-full p-1.5">
                  Rocketseat
                </span>
              </Tabs.Trigger>
              <Tabs.Trigger value="origamid" asChild>
                <span className="text-rosePine-subtle data-[state=active]:text-rosePine-iris font-bold border border-rosePine-subtle data-[state=active]:border-rosePine-iris w-full p-1.5">
                  Origamid
                </span>
              </Tabs.Trigger>
              <Tabs.Trigger value="ccaa" asChild>
                <span className="text-rosePine-subtle data-[state=active]:text-rosePine-iris font-bold border border-rosePine-subtle data-[state=active]:border-rosePine-iris w-full p-1.5">
                  CCAA
                </span>
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="flex-1 border border-rosePine-text relative p-4"
              value="puc"
            >
              <span className="bg-rosePine-surface absolute -top-5 left-5 font-bold p-1.5">
                Computer Science
              </span>
              <p>
                Ongoing Bachelor&apos;s Degree in{' '}
                <strong className="font-semibold text-rosePine-iris">
                  Computer Science
                </strong>{' '}
                at PUC Minas, where I am acquiring a solid foundation in
                algorithms, data structures, operating systems, computer
                networks, artificial intelligence, and various other essential
                areas of computing. This course provides me with a deep and
                comprehensive understanding of the latest technologies and
                practices in the industry.
              </p>
            </Tabs.Content>
            <Tabs.Content
              className="flex-1 border border-rosePine-text relative p-4"
              value="rocketseat"
            >
              <span className="bg-rosePine-surface absolute -top-5 left-5 font-bold p-1.5">
                React Bootcamp
              </span>
              <p>
                Intensive{' '}
                <strong className="font-semibold text-rosePine-iris">
                  React bootcamp
                </strong>{' '}
                at Rocketseat, focused on developing modern web applications
                using the React library. During the bootcamp, I enhanced my
                skills in JavaScript, functional components, hooks, state
                management, and best practices for frontend development.
              </p>
            </Tabs.Content>
            <Tabs.Content
              className="flex-1 border border-rosePine-text relative p-4"
              value="origamid"
            >
              <span className="bg-rosePine-surface absolute -top-5 left-5 font-bold p-1.5">
                Front-End Bootcamp
              </span>
              <p>
                Front-end bootcamp at Origamid, covering a basic UI course and
                coding. I learned about interface design, usability principles,
                and user experience, while also improving my skills in{' '}
                <strong className="font-semibold text-rosePine-iris">
                  HTML, CSS, and JavaScript
                </strong>{' '}
                to create responsive and accessible websites.
              </p>
            </Tabs.Content>
            <Tabs.Content
              className="flex-1 border border-rosePine-text relative p-4"
              value="ccaa"
            >
              <span className="bg-rosePine-surface absolute -top-5 left-5 font-bold p-1.5">
                English Course
              </span>
              <p>
                <strong className="font-semibold text-rosePine-iris">
                  English course at CCAA
                </strong>
                , where I developed advanced skills in reading, writing,
                listening, and speaking. This course enabled me to achieve
                fluency in English, which is essential for communication in the
                tech industry and for consuming technical materials in English.
              </p>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  )
}
