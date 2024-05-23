/**
 * v0 by Vercel.
 * @see https://v0.dev/t/kJQzEZbGINq
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { CardContent, CardFooter, Card } from "@/components/ui/card"
import Image from "next/image"
import Bruno from '../assets/bruno.png'
import MaybeITooSeriues from '../assets/maybe-i-too-seriues.jpg'
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MusicIcon className="h-6 w-6" />
          <span className="sr-only">Bruno Ferreira Pedraça</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Discography
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bruno Ferreira Pedraça</h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Exploring life, love, and self-awareness to grow and prosper. Balancing action and relaxation has brought clarity to my journey. My music blends RBM and pop. At the start of my journey, I connect my avatar to music and practice to perfect the process. Let's turn life's drama into strength and growth.
                  </p>
                </div>
              </div>
              <Image
              
                alt="Bruno Ferreira Pedraça"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
                height="550"
                src={Bruno}
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="discography">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discography</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Explore Bruno Ferreira Pedraça musical journey through his discography.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Image
                      alt="Album Cover"
                      className="rounded-lg object-cover"
                      height="200"
                      src={MaybeITooSeriues}
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-center flex-col">
                    <div className="text-center">
                      <div className="font-medium">Maybe I Too Seriues</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">2024</div>
                    </div>
                    <Link href={"https://ditto.fm/maybe-i-too-seriues"} >
                      <Badge>
                          SmartLink
                      </Badge>
                    </Link> 
                  </CardFooter>
                </Card>
                
                
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Bruno Ferreira Pedraça. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MusicIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}