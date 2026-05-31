import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { LucideLoaderCircle } from "lucide-react"

type SubmitButtonProps = {
  label: string;
}

const SubmitButton = ({ label }: SubmitButtonProps) => {
    const { pending } = useFormStatus(); 

    return (
        <Button type="submit" disabled={pending}>
     {pending ? <LucideLoaderCircle className="mr-2 w-2 h-2 animate-spin"/> : label} Ticket
     </Button>
    )
}

export { SubmitButton }
