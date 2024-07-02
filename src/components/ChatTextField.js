import React, { useState } from 'react';
import {
    Button,
    Stack,
    TextField
} from '@mui/material';

const ChatTextField = ({submitFn}) => {
    const [message, setMessage] = useState('');

    const submitMessage = () => {
        if (message.length > 0) {
            submitFn(message);
            setMessage('');
        }
    }

    return (
        <Stack direction="row">
            <TextField
                id="outlined-basic"
                label="where are you going?"
                sx={{flexGrow: 1}}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            variant="outlined" />
            <Button
                variant="contained"
                onClick={submitMessage}
            >
                Send
            </Button>
        </Stack>
    );
}

export default ChatTextField
