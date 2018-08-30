import React from 'react';
import { navigationItems } from '../libs/get-navigation';
import Logo from './logo';
import Link from 'next/link';

export default () => {
    const navComponents = navigationItems.map((item, index) =>
        (
            <li key={index}>
                <Link href={item.URL}>
                    <a>{item.Title}</a>
                </Link>
            </li>
        ));
    return (
        <nav className="main-navigation">
            <Logo />
            <ul>
                {navComponents}
            </ul>
            <style jsx>{`
            .main-navigation {
                display:flex;
            }

            .main-navigation ul {
                list-style: none;
                display: flex;
            }
            `}</style>
        </nav>
    )
}