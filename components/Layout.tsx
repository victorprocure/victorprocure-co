import * as React from 'react';

export class Layout extends React.Component {
    render(): JSX.Element {
        return (
            <div>
                {this.props.children}
                <style jsx>{`
                div {
                    width: 64em;
                    max-width: calc(100% - 4em);
                    margin: 0 auto;
                }
                `}
                </style>
            </div>
        );
    }
}
