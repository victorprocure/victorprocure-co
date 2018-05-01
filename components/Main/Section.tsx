import * as React from 'react';

export interface ISectionProperties {
    id: string;
    children?: JSX.Element;
}

export class Section extends React.Component<ISectionProperties, {}> {
    render(): JSX.Element {
        return (
            <section id={this.props.id}>
                {this.props.children}
                <style jsx>{`
                    section {
                        padding: 5em 5em 3em 5em;
                        display: block;
                    }
                `}</style>
            </section>
        );
    }
}
