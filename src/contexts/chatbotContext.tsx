import axios from 'axios';
import {createContext, useContext, useEffect, useState} from 'react'
import type { MessageType } from '../types';
import {chat} from '../utils/chatbot/chat';
interface MessageContextType{
    fetchMessage: (message: string) => Promise<MessageType | undefined>
    message : MessageType,
    isLoading: boolean,
    error: unknown,
    setMessage: object
}


const MessageContext = createContext<MessageContextType | undefined>(undefined);

const MessageProvider = ({children}: {children: React.ReactNode}) => {
    const [message, setMessage] = useState<MessageType>(
        {
            httpCode:  NaN,
            status: '',
            err_message: '',
            statusCode: '',
            data: {
                message: ''
            }
        });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);

    
    async function fetchMessage(input: string) : Promise<MessageType | undefined>{
        setIsLoading(true);
        try{
            const res: MessageType = await chat(input);
            setMessage(res);
            return res;
        }catch(err: any){
            console.log(err);
            setError(err);
            return err;
        }finally{
            setIsLoading(false)
        }
    }

    return <MessageContext.Provider 
    value={{fetchMessage, 
            message, 
            isLoading, 
            setMessage,
            error}} >
            {children}
    </MessageContext.Provider>


}

function useChatBot(){
    const ctx = useContext(MessageContext);
    if(ctx === undefined){
        throw new Error('useChatBot must be used within a MessageProvider');
    }

    return ctx;
}

export {useChatBot, MessageProvider};