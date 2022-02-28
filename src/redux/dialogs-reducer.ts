import { InferActionsTypes } from "./redux-store";

type DialogType = {
    id: number | null
    name: string | null

}
type MessageType = {
    id: number | null
    message: string | null
}

let initialState = {
        dialogData: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Christina'},
            {id: 3, name: 'Kirill'},
            {id: 4, name: 'Matvei'},
        ] as Array<DialogType>,
        messageData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello World'},
            {id: 3, message: 'React it`s cool'},
            {id: 4, message: 'Yo'},
        ] as Array<MessageType>,
    };

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>

const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            let body = action.newMessageBody
            return {
                ...state,
                messageData: [...state.messageData, {id: 5, message: body}],
            }
        default:
            return state;
    }
}

export const actions = {
    sendMessage:(newMessageBody: string) => ({type: 'ADD_MESSAGE', newMessageBody} as const)
}

export default dialogsReducer
