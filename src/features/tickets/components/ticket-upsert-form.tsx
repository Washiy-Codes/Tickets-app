"use client"
import { useActionState } from "react"
import { SubmitButton } from "@/components/form/submit-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Ticket } from "@/app/generated/prisma/client"
import { upsertTicket } from "../actions/upsert-ticket"

type TicketUpsertFormProps = {
  ticket?: Ticket
};

const TicketUpsertForm = ({ticket}: TicketUpsertFormProps) => {   
    const [state, action] = useActionState(upsertTicket.bind(null, ticket?.id),{
        message : ""
    });
  return (
    <form action={action} className="flex flex-col gap-y-1.5">
     <input type="hidden" name="id" value={ticket?.id} /> 
     <Label htmlFor='title'>Title</Label>
     <Input id="title" name="title" type="text" defaultValue={
      (state.payload?.get("title") as string) ?? ticket?.title} />
     <Label htmlFor='content'>Content</Label>
     <Textarea id="content" name="content" 
     defaultValue={(state.payload?.get("content") as string) ?? ticket?.content} />
    <SubmitButton label={ticket ? "Edit" : "Create"} />
    {state.message}
    </form>
  )
}

export {TicketUpsertForm}