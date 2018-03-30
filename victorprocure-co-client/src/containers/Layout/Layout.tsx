import * as React from 'react';
import NavMenu from '../../components/NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return (
            <div>
                <NavMenu />
                <div style={{ padding: '66px 0 0' }}>
                {this.props.children}
                </div>
            </div>
        );
    }
}