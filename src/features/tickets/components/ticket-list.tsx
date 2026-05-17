import {TicketItem} from "@/src/features/tickets/components/ticket_item"
import GetTickets from "@/src/features/queries/get-tickets"

const TicketList = async() => {
    const ticket = await GetTickets()

  return (
    <div className="flex flex-1 flex-col items-center gap-4 animate animate-fade-in-from-top">
      {ticket.map((ticket)=>(
          <TicketItem key={ticket.id} ticket={ticket}/>  
        ))}
      </div>
  )
}

export {TicketList}