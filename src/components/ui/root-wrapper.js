import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import {createGenerateId, JssProvider} from 'react-jss';

import theme from './theme'

const generateId = createGenerateId();

const RootWrapper = ( { element } ) => {
    return (
        <JssProvider generateId={generateId}>
            <ThemeProvider theme={theme}>
            {element}
            </ThemeProvider>
        </JssProvider>
        
    )
}

export default RootWrapper