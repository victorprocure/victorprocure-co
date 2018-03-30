import * as React from 'react';
import { withBreakpoints } from '../ReactBreakpoints/withBreakpoints';
import './logo.css';

export interface LogoProps {
    large?: boolean;
    width?: number | string;
    height?: number | string;
    screenWidth?: number;
    breakpoints?: { [key: string]: number };
}

class Logo extends React.Component<LogoProps, {}> {
    public render() {
        if (this.props.large || (this.props.screenWidth
            && this.props.breakpoints
            && this.props.screenWidth >= this.props.breakpoints.tablet
            && this.props.large === undefined)) {
            return (
                <div
                    className="logo logo-lg"
                    style={{ width: this.props.width, height: this.props.height }}
                    title="Procure Software Development"
                />
            );
        }

        return (
            <div
                className="logo logo-sm"
                style={{ width: this.props.width, height: this.props.height }}
                title="Procure Software Development"
            />
        );
    }
}

export default withBreakpoints(Logo);