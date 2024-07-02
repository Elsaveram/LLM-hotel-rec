import React from 'react';
import {
    Paper,
    Stack,
    Typography
} from '@mui/material';

function message(text, isUser) {
    return (
        <Paper
            elevation={4}
        >
            <Typography p={1}>
                {text}
            </Typography>
        </Paper>

    );
}

function card(name, text, isUser) {
    var out;
    if (isUser) {
        out = (
            <Stack
                direction="row"
            >
                {message(text)}
            </Stack>
        );
    } else {
        out = (
            <Stack
                direction="row"
                sx={{justifyContent: "right"}}
            >
                {message(text)}
            </Stack>
        );
    }

    return out
}

const ChatEntry = ({name, text, isUser}) => {
    return (
        <div key={Math.random()}>
            {card(name, text, isUser)}
        </div>
    );
}

export default ChatEntry
