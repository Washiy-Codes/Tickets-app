import initialData from "@/src/data"
import Heading from "@/components/heading"
import {TicketItem} from "@/src/features/tickets/components/ticket_item"

const TicketsPage = () => {
    
  return (
    <div className="flex flex-1 gap-8 flex-col">
      <Heading title="Tickets" description="Your tickets page to start"/>
      <div className="flex flex-1 flex-col items-center gap-4 animate animate-fade-in-from-top">
      {initialData.map((ticket)=>(
          <TicketItem key={ticket.id} ticket={ticket}/>  
        ))}
      </div>
    </div>
  )
}

export default TicketsPage