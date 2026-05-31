// "use client"
import { TicketList } from "@/src/features/tickets/components/ticket-list"
import Heading from "@/components/heading"
import { Suspense } from "react"
import Spinner from "@/app/tickets/loading"
import { CardCompact } from "@/src/features/tickets/components/card-compact"
import { TicketUpsertForm } from "@/src/features/tickets/components/ticket-upsert-form"

const TicketsPage = () => {    
  return (
    <div className="flex flex-1 gap-8 flex-col">
      <Heading title="Tickets" description="Your tickets page to start"/>
      <CardCompact title="Create Ticket" content={<TicketUpsertForm />} description="Create a new ticket" className="w-full max-w-105 self-center"/>
      <Suspense fallback={<Spinner />}>
       < TicketList />
      </Suspense>
    </div>
  )
}

export default TicketsPage