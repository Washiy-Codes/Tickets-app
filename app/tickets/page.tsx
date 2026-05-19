// "use client"
import { TicketList } from "@/src/features/tickets/components/ticket-list"
import Heading from "@/components/heading"
import { Suspense } from "react"
import Spinner from "@/app/tickets/loading"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { TicketCreateForm } from "@/src/features/tickets/components/Ticket-Create-Form"

const TicketsPage = () => {    
  return (
    <div className="flex flex-1 gap-8 flex-col">
      <Heading title="Tickets" description="Your tickets page to start"/>
      <Card className="w-full max-w-105 self-center">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <TicketCreateForm />
  </CardContent>
</Card>
      <Suspense fallback={<Spinner />}>
       < TicketList />
      </Suspense>
    </div>
  )
}

export default TicketsPage