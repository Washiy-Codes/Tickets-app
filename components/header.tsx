import Link from "next/link";
import { homePath, ticketsPath } from "@/src/paths";
import { buttonVariants } from "@/components/ui/button"
import { LucideKanban } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "./theme/theme-switcher";

const Header = () => {
  return (
    <nav className="flex justify-between py-2.5 px-5 border-b fixed left-0 right-0 top-0 z-20 backdrop-blur-2x bg-black">
          <div>
            <Link href={homePath()} className={buttonVariants({ variant: "default" })}>
            <LucideKanban />
             <h1 className="text-lg font-semibold ml-1.2">TicketBounty</h1>
            </Link>
          </div>
          <div className="flex gap-x-2">
            <ThemeSwitcher />
            <Link href={ticketsPath()} className={cn(buttonVariants({variant: "default"}),"font-semibold text-lg")}>Tickets</Link>
          </div>
        </nav>
  )
}

export  {Header}