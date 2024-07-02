import React, { useEffect, useState } from 'react';
import {
    Container,
    Paper,
    Stack
} from '@mui/material';

import { callHotelSearch } from '../hooks/hotelSearch';
import ChatEntry from './ChatEntry';
import ChatTextField from './ChatTextField';

const Chat = () => {
    const username = "User";
    const [messageData, setMessageData] = useState([]);

    const callApi = () => {
        const messages = messageData.map(({name, isUser, text}) => {
            var role
            if (isUser) {
                role = "user";
            } else {
                role = "assistant";
            }
            return  {
                role: role,
                content: text
            }
        });

        callHotelSearch(messages).then((payload) => {
            setMessageData([...messageData, {
                name: "AI",
                isUser: false,
                text: payload["message"]
            }]);
        });
    }

    useEffect(() => {
        if (messageData.length > 0 && messageData[messageData.length-1]["isUser"]) {
            callApi()
        }
    }, [messageData]);

    const addUserMessagData = (text) => {
        setMessageData([ ...messageData, {
            name: username,
            isUser: true,
            text: text
        }]
        );
    };

    //const messages = <Stack />
    const messages = messageData.map((message, i) => {
        return <ChatEntry key={i} {...message} />
    });

    return (
        <Container
        >
            <Paper
                elevation={2}
                sx={{
                    overvlow: "auto",
                    height: "100%"
                }}
            >
                <Stack>
                    {messages}
                    <ChatTextField submitFn={addUserMessagData}/>
                </Stack>
            </Paper>
        </Container>
    );
}

export default Chat
