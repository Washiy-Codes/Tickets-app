
const initialData = [
    {
        id: "1",
        title:"Ticket 1",
        content: "This is my first ticket",
        status:"DONE" as const
    },
    {
        id: "2",
        title:"Ticket 2",
        content: "This is my second ticket",
        status:"OPEN" as const
    },
    {
        id: "3",
        title:"Ticket 3",
        content: "This is my third ticket",
        status:"IN-PROGRESS" as const
    }
]

export default initialData;