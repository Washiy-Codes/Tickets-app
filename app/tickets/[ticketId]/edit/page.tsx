import getTicket from "@/src/features/queries/get-ticket";
import { CardCompact } from "@/src/features/tickets/components/card-compact"
import { TicketUpdateForm } from "@/src/features/tickets/components/ticket-update-form";
import { notFound } from "next/navigation";


type EditTicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const EditTicketPage = async ({ params }: EditTicketPageProps) => {
  const { ticketId } = await params;

  const ticket = await getTicket(ticketId);

  if (!ticket) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center flex-1 animate-in-from-top">
      <CardCompact
        title="Edit Ticket"
        description="Edit your ticket details here"
        content={<TicketUpdateForm ticket={ticket} />}
        className="w-full max-w-105 self-center"
      />
    </div>
  );
};

export default EditTicketPage;