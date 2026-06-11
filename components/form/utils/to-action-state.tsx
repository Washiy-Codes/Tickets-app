import { ZodError } from "zod";

export type ActionState = {
    message: string;
    fieldErrors?: Record<string, string[]> | undefined;
    payload?: FormData;
}
const FromErrorToActionState = (error: unknown, formData: FormData ): ActionState => {
      if(error instanceof ZodError) {
        return {  
          message: "",
          payload: formData,
          fieldErrors: error.flatten().fieldErrors
        }
      } else if(error instanceof Error){
        return {
          message: error.message,
          fieldErrors: {},
          payload: formData
        }
      } else {
        return {
          message: "something went wrong",
          payload: formData,
          fieldErrors: {}
        }
      }
}

export {FromErrorToActionState}