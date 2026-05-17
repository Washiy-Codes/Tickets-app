// "use client"
import { TicketList } from "@/src/features/tickets/components/ticket-list"
import Heading from "@/components/heading"
import { Suspense } from "react"
import Spinner from "@/app/tickets/loading"

const TicketsPage = () => {    
  return (
    <div className="flex flex-1 gap-8 flex-col">
      <Heading title="Tickets" description="Your tickets page to start"/>
      <Suspense fallback={<Spinner />}>
       < TicketList />
      </Suspense>
    </div>
  )
}

export default TicketsPage