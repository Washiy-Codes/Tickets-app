"use server"
import prisma from "@/lib/prisma"
import { ticketPath, ticketsPath } from "@/src/paths";
import { revalidatePath } from "next/cache";
import { z } from "zod"
import { redirect } from "next/navigation";

const upsertTicketScheme = z.object({
    title: z.string().min(1, "Title is required").max(191),
    content:z.string().min(1, "Content is required").max(1024)
})

const upsertTicket = async (id: string | undefined, _state: {message:string, payload?: FormData}, formData: FormData) => {
    try{
    const data = upsertTicketScheme.parse({
        title: formData.get("title"),
        content: formData.get("content"),
    });
    await prisma.ticket.upsert({
        where: {
            
            id: id || "",
        },
       update : {
        title: data.title as string,
        content: data.content as string,
       },
       create: {
        title: data.title as string,
        content: data.content as string,
       }
    });
}catch(error){
    return {message :"something went wrong", payload: formData}
}
    revalidatePath(ticketsPath());

    if (id) {
        redirect(ticketPath(id))
    }
    return {message: "Ticket created"};
}

export { upsertTicket }