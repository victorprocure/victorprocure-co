import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Provider } from './BreakpointsContext';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';

export interface ReactBreakpointsProps {
    breakpoints: { [key: string]: number };
    guessedBreakpoint?: number;
    defaultBreakpoint?: number;
    debounceResize?: boolean;
    debounceDelay?: number;
}

export interface ReactBreakpointsState {
    breakpoints?: { [key: string]: number };
    screenWidth?: number;
}

interface ResizeEvent {
    target?: {
        innerWidth?: number
    };
}

export class ReactBreakpoints extends React.Component<ReactBreakpointsProps, ReactBreakpointsState> {
    static contextTypes = {
        screenWidth: PropTypes.number,
        breakpoints: PropTypes.objectOf(PropTypes.number)
    };

    static childContextTypes = {
        screenWidth: PropTypes.number,
        breakpoints: PropTypes.objectOf(PropTypes.number)
    };

    static defaultProps = {
        debounceResize: true,
        debounceDelay: 50
    };

    static propTypes = {
        breakpoints: PropTypes.objectOf(PropTypes.number),
        guessedBreakpoint: PropTypes.number,
        defaultBreakpoint: PropTypes.number,
        debounceResize: PropTypes.bool,
        debounceDelay: PropTypes.number
    };

    constructor(props: ReactBreakpointsProps, context: {}) {
        super(props, context);

        this.state = {
            screenWidth: this.props.guessedBreakpoint || this.props.defaultBreakpoint,
            breakpoints: this.props.breakpoints || {}
        };
    }

    public componentWillMount() {
        if (!this.props.breakpoints) {
            throw new Error('No Breakpoints');
        }
        if (typeof this.props.breakpoints !== 'object') {
            throw new Error('Breakpoints are not an object');
        }

        if (this.props.breakpoints !== this.state.breakpoints) {
            this.setState({ breakpoints: this.props.breakpoints });
        }

        if (typeof window !== 'undefined') {
            const resizeObservable = Observable.fromEvent(window, 'resize')
                .map((v: ResizeEvent) => v.target && v.target.innerWidth ? v.target.innerWidth : window.innerWidth)
                .distinctUntilChanged()
                .debounceTime(this.props.debounceResize && this.props.debounceDelay ? this.props.debounceDelay : 0);
            const orientationObservable = Observable.fromEvent(window, 'orientationchange')
                .map((v: ResizeEvent) => v.target && v.target.innerWidth ? v.target.innerWidth : window.innerWidth)
                .distinctUntilChanged();
            const windowLoadObservable = Observable.fromEvent(window, 'load')
                .map((v: ResizeEvent) => v.target && v.target.innerWidth ? v.target.innerWidth : window.innerWidth)
                .distinctUntilChanged();

            const windowObservables = Observable.merge(resizeObservable, orientationObservable, windowLoadObservable);
            windowObservables.subscribe(val => this.setState({ screenWidth: val }));
        }
    }

    public render() {
        const { children } = this.props;

        return (
            <Provider value={this.getChildContext()}>{children && children}</Provider>
        );
    }

    private getChildContext = () => {
        return {
            breakpoints: {
                ...this.state.breakpoints
            },
            screenWidth: this.state.screenWidth
        };
    }
}