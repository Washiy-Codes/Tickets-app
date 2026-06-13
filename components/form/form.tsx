import { toast } from "sonner";
import { UseActionFeedback } from "./hooks/use-action-feedback";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
    action: (formData: FormData) => void;
    children: React.ReactNode;
    actionState: ActionState;
}
const Form = ({ action, children, actionState }: FormProps) => {

    UseActionFeedback(actionState, {
        onSuccess: ({actionState}) => {
          if(actionState.message){
            toast.success(actionState.message)
          }
        },
        onError: ({actionState}) => {
          if(actionState.message){
            toast.error(actionState.message)
          }
        }
    })
    return (
    <form action={action} className="flex flex-col gap-3 my-2">
        {children}
    </form>

    )
}

export { Form }