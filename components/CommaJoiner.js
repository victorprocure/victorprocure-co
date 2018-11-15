import React, { Fragment } from 'react';

export default ({ list = [], conjunction = "and", separator = ", " }) => (
    <Fragment>
        {list.map((item, index) =>(
            <span key={item}>
            {item}
            {list.length === 1
                ? "."
                : index + 2 === list.length
                    ? ` ${conjunction} `
                    : index + 1 === list.length
                        ? "."
                        : `${separator} `}
            </span>
        ))}
    </Fragment>
);