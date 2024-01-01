import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu'

export function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-8 sticky top-0 right-0 left-0 bg-background">
      <h1 className="text-4xl font-mono">RO{'|}'}FY</h1>
      <nav className="hidden sm:flex">
        <ul className="flex items-center gap-2">
          <li>
            <Button variant="ghost">
              <a href="#about">About</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <a href="#experience">Experience</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <a href="#projects">Projects</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <a href="#knowledges">Knowledges</a>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
              <a
                href="https://dev-nook.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </Button>
          </li>
        </ul>
      </nav>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex sm:hidden" asChild>
          <Button variant="outline" size="icon">
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" forceMount>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a href="#about">About</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#experience">Experience</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#projects">Projects</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#knowledges">Knowledges</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                href="https://dev-nook.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
