import * as React from 'react';
import { Introduction } from './Introduction';


export const Main: () => JSX.Element = () => (
    <div>
        <Introduction />
        <style jsx>{`
        div {
            padding-top: 4.25em;
            background-color: #fff;
            color: #636363;
            border-radius: 0.25em;
        }
        `}</style>
    </div>
);
