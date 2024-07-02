import React from 'react';
import {
    Stack
} from '@mui/material';

import Chat from '../components/Chat'

const HelpDesk = ({logoutFn}) => {
    return (
        <Stack>
            <Chat />
        </Stack>
    );
}

export default HelpDesk
