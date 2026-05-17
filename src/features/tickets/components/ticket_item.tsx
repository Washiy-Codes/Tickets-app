import Link from "next/link"
import {ticketPath} from "@/src/paths"
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from "@/components/ui/card"
// import { Ticket } from "./types" 
import { TICKET_ICONS } from "./constants"
import { LucideSquareArrowOutUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"
// import { Ticket } from "@/app/generated/prisma/client"
import { Ticket } from "@/app/generated/prisma/client" 
type TicketItemProps = {
    ticket: Ticket,
    isDetailed?: boolean,
}

const TicketItem = ({ticket, isDetailed}: TicketItemProps) => {

    const detailedButton = <Button variant="default" size="icon" asChild>
    <Link href={ticketPath(ticket.id)}>
      <LucideSquareArrowOutUpRight />
    </Link>
  </Button>
        

  return (
    <div className={clsx("flex w-full  gap-x-1.5", {
        "max-w-[500]" : isDetailed,
        "max-w-105": !isDetailed
    })}>
       <Card className="w-full">
        <CardHeader>
                 <CardTitle className="flex gap-x-2">
                  <span>{TICKET_ICONS[ticket.status as keyof typeof TICKET_ICONS]}</span>
                  <h2 className="text-lg font-semibold truncate">{ticket.title}</h2>
                </CardTitle>
                </CardHeader>

                <CardContent>
                <h3 className={clsx("whitespace-break-spaces", {
                    "line-clamp-3": !isDetailed
                })}>{ticket.content}</h3>
                </CardContent>
                
            </Card>
            <div className="flex flex-col gap-y-1">
              {isDetailed ? null : <div className="flex flex-col gap-y-2">{detailedButton}</div>}
            </div>
            
    </div>
  )
}

export {TicketItem}