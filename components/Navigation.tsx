import * as React from 'react';

export const Navigation: () => JSX.Element = () => (
    <nav>
        <ul>
            <li>
                <a href='#intro' className='active'>Introduction</a>
            </li>
            <li>
                <a href='#FirstSection'>First Section</a>
            </li>
            <li>
                <a href='#SecondSection'>Second Section</a>
            </li>
            <li>
                <a href='#GetStarted'>Get Started</a>
            </li>
        </ul>
        <style jsx>{`
            nav {
                display: block;
                transition: background-color 0.2s ease,
                border-top-left-radius 0.2s ease,
                border-top-right-radius 0.2s ease,
                padding 0.2s ease;
                color: #636363;
                position: absolute;
                width: 64em;
                max-width: calc(100% - 4em);
                padding: 1em;
                background-color: #f7f7f7;
                border-top-left-radius: 0.25em;
                border-top-right-radius: 0.25em;
                cursor: default;
                text-align: center;
            }

            ul {
                margin: 0;
                padding: 0;
                list-style: none;
            }

            li {
                transition: margin 0.2s ease;
                display: inline-block;
                margin: 0 0.35em;
                padding: 0;
                vertical-align: middle;
            }
            a.active {
                background-color: #fff;
                box-shadow: none;
            }

            a {
                transition: font-size 0.2s ease;
                display: inline-block;
                height: 2.25em;
                line-height: 2.25em;
                padding: 0 1.25em;
                border: 0;
                border-radius: 8px;
                color: inherit;
                text-decoration: none;
            }
        `}</style>
    </nav>
);
