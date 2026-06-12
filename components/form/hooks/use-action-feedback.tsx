import { useEffect, useRef } from "react"
import { ActionState } from "@/components/form/utils/to-action-state"
type Args = {
    actionState: ActionState;
}
type UseActionFeedbackOptions = {
    onSuccess?: (Args: Args) => void;
    onError?: (Args: Args) => void;
}
const UseActionFeedback = (actionState: ActionState, options: UseActionFeedbackOptions) => {
    const { onSuccess, onError } = options

    const prevTimestamp = useRef(actionState.timestamp)
    const isUpdate = prevTimestamp.current !== actionState.timestamp

    useEffect(() => {
        if (!isUpdate) return;
        if (onSuccess) {
            onSuccess?.({actionState})
        } else if (onError) {
            onError?.({actionState})
        }
        prevTimestamp.current = actionState.timestamp
    }, [actionState, options, isUpdate])
}

export { UseActionFeedback }