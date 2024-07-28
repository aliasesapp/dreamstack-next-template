import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          It&apos;s ok to dream again. <br className="hidden sm:inline" />
          Unleash Your Inner Creator.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Build whatever you can dream of with DreamStack from Aliases, Inc.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild variant="default">
          <Link
            href={siteConfig.links.aliases}
            target="_blank"
            rel="noreferrer"
          >
            Visit Aliases
          </Link>
        </Button>
      </div>
    </section>
  )
}
