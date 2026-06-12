import { ZodError } from "zod";

export type ActionState = {
   status?: "SUCCESS" | "ERROR" | "LOADING";
    message: string;
    fieldErrors?: Record<string, string[]> | undefined;
    payload?: FormData;
    timestamp: number;
}
export const EMPTY_ACTION_STATE: ActionState = {
    message: "",
    fieldErrors: {},
    timestamp: Date.now(),
}
const FromErrorToActionState = (error: unknown, formData: FormData ): ActionState => {
      if(error instanceof ZodError) {
        return {  
          status: "ERROR",
          message: "",
          payload: formData,
          fieldErrors: error.flatten().fieldErrors,
          timestamp: Date.now(),
        }
      } else if(error instanceof Error){
        return {
          status: "ERROR",
          message: error.message,
          fieldErrors: {},
          payload: formData,
          timestamp: Date.now(),
        }
      } else {
        return {
          status: "ERROR",
          message: "something went wrong",
          payload: formData,
          fieldErrors: {},
          timestamp: Date.now(),
        }
      }
}

export const FromSuccessToActionState = (status:ActionState["status"],message: string): ActionState => {
    return {
        status,
        message,
        fieldErrors: {},
        timestamp: Date.now(),
    }
}

export {FromErrorToActionState}