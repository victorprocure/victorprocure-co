import * as React from 'react';
import './Section.css';

export interface SectionProps {
    title: string;
    children?: React.ReactNode;
    overrideClass?: boolean;
    // tslint:disable-next-line:no-any
    [key: string]: any;
}

export class Section extends React.Component<SectionProps, {}> {
    public render() {
        const { children, title, className, ...allOtherProps } = this.props;
        let newClassName = 'position-relative overflow-hidden p-3 p-md-5 text-center';

        if (className && allOtherProps.overrideClass) {
            newClassName = className;
        } else if (className !== undefined) {
            newClassName = `${className} ${newClassName}`;
        }

        return (
            <section
                className={newClassName}
                {...allOtherProps}
            >
                <div className="col-md-5 p-lg-5 mx-auto my-5">
                    <h1 className="display-4 font-weight-normal">{title}</h1>
                    {children}
                </div>
            </section>
        );
    }
}