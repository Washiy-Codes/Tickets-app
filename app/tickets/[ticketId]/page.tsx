import initialData from "@/src/data"
import { Placeholder } from "@/components/placeholder"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ticketsPath } from "@/src/paths"
import { TicketItem } from "@/src/features/tickets/components/ticket_item"

type TicketpageProps = {
    params : Promise<{
        ticketId: string,
    }>
}

const Ticketpage = async({params}:TicketpageProps) => {
  const {ticketId} = await params
  const ticket = initialData.find((ticket)=> ticket.id === ticketId)
  if(!ticket){
    return <Placeholder label="Ticket not found" button = {
      <Button>
        <Link href={ticketsPath()}>Go back to tickets</Link>
      </Button>
    }/>
  }
  return (
    <div className="flex justify-center animate animate-fade-in-from-top">
    <TicketItem ticket={ticket} isDetailed />
    </div>
  )
}

export default Ticketpage 