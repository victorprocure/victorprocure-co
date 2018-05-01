import * as React from 'react';
import largeLogo from '../images/logo-sm.svg';

export class Header extends React.Component {
    render(): JSX.Element {
        return (
            <header>
                <span>
                    <img src={largeLogo} />
                </span>
                <h1>Procure IT Services</h1>
                <p>
                    Erat commodo augue, felis accumsan quis eleifend<br />
                    risus ut primis sed Accumsan.
                </p>
                <style jsx>{`
                    header {
                        display: block;
                        padding: 7em 5em 4em 5em;
                        text-align: center;
                    }

                    span {
                        transition: opacity 1.25s ease, transform 0.5s ease;
                        transition-delay: 0s;
                        display: block;
                        margin: 0 auto;
                        padding: 5px;
                        opacity: 1;
                        display: block;
                        height: 85px;
                        width: 85px;
                        border-radius: 50%;
                        background: #fff;
                        opacity: 1;
                    }

                    img {
                        margin-top: 20px;
                    }

                    h1 {
                        color: #fff;
                        font-size: 3.25em;
                        font-weight: 300;
                        line-height: 1.2;
                        letter-spacing: -0.025em;
                    }

                    p {
                        transition: opacity 3s easy;
                        transition-delay: 0.5s;
                        opacity: 1;
                    }
                `}</style>
            </header>
        );
    }
}
