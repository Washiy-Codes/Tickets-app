import z, { ZodError } from "zod";


export type ActionState = {
    message: string;
    payload?: FormData;
}

const fromErrorToActionState = (error: unknown, payload: FormData): ActionState => {
  if (error instanceof ZodError) {
    return { message: error.issues[0].message, payload };
  }else if (error instanceof Error) {
    return { message: error.message, payload };
  }else {
    console.error("Unexpected error:", error);
  }
  return { message: "Unknown error occurred", payload };
};

export { fromErrorToActionState };