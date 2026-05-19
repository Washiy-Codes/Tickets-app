import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CreateTicket } from "../actions/create-ticket"
const TicketCreateForm = () => {
  return (
    <form action={CreateTicket} className="flex flex-col gap-y-1.5">
     <Label htmlFor='title'>Title</Label>
     <Input id="title" name="title" type="text"/>
     <Label htmlFor='content'>Content</Label>
     <Textarea id="content" name="content" />
     <Button type="submit">Submit</Button>
    </form>
  )
}

export {TicketCreateForm}