
import { TicketItem } from "@/src/features/tickets/components/ticket_item"
import getTicket from "@/src/features/queries/get-ticket"
import { notFound } from "next/navigation"

type TicketPageProps = {
    params : Promise<{
        ticketId: string,
    }>
}

const TicketPage = async({params}:TicketPageProps) => {
  const {ticketId} = await params
  const ticket = await getTicket(ticketId);
  if(!ticket){
    return notFound()
  }
  return (
    <div className="flex justify-center animate animate-fade-in-from-top">
    <TicketItem ticket={ticket} isDetailed />
    </div>
  )
}

export default TicketPage 


