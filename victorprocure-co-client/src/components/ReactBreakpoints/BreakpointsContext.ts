import createReactContext from 'create-react-context';

const BreakpointsContext = createReactContext({});

const {
    Provider,
    Consumer
} = BreakpointsContext;

Provider.displayName = 'Breakpoints.Provider';
Consumer.displayName = 'Breakpoints.Consumer';

export {
    Provider,
    Consumer
};

export default BreakpointsContext;