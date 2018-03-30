import * as React from 'react';
import { Consumer } from './BreakpointsContext';

// tslint:disable-next-line:no-any
export const withBreakpoints = (Component: any) => {
    // tslint:disable-next-line:no-any
    const C = (props: any) => (
        <Consumer>{context => <Component {...props} {...context} />}</Consumer>
    );

    return C;
};