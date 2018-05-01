import * as React from 'react';
import officeImage from '../../images/office-image.jpg';
import { Section } from './Section';

export const Introduction: () => JSX.Element = () => (
    <Section id='introduction'>
        <div className='spotlight'>
            <div className='content'>
                <header><h2>Introduction</h2></header>
                <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
                    adipiscing magna etiam amet veroeros.
                    Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
                <ul>
                    <li>
                        <a href='https://www.google.ca'>Learn More</a>
                    </li>
                </ul>
            </div>
            <span className='image'>
                <img src={officeImage} />
            </span>
            <style jsx>{`
                span.image {
                    border-color: #ddd;
                    display: inline-block;
                    margin-left: 4em;
                    padding: 0.65em;
                    border-radius: 100%;
                    border: solid 1px;
                }

                .image img {
                    display: block;
                    border-radius: 100%;
                    width: 16em;
                    height: auto;
                }

                div.spotlight {
                    display: flex;
                    align-items: center;
                    margin: 0 0 2em 0;
                }

                div.content {
                    flex: 1;
                    
                }

                div.content header {
                    margin: 0 0 2em 0;
                    display: block;
                }

                div.content header h2 {
                    color: #636363;
                    font-weight: 300;
                    font-size: 2em;
                    line-height: 1.5;
                    margin: 0 0 0.7em 0;
                    letter-spacing: -0.025em;
                }

                div.content header h2:after {
                    background-image: linear-gradient(90deg, #efa8b0, #a89cc8, #8cc9f0);
                    background-color: rgba(255,255,255,0.35);
                    display: block;
                    content: '';
                    width: 3.25em;
                    height: 2px;
                    margin: 0.7em 0 1em 0;
                    border-radius: 2px;
                }

                div.content p {
                    margin: 0 0 2em 0;
                }

                div.content ul {
                    margin-bottom: 0;
                    cursor: default;
                    list-style: none;
                    padding-left: 0;
                    margin: 0 0 2em 0;
                }

                div.content ul li:last-child {
                    padding-right: 0;
                }

                div.content ul li {
                    display: inline-block;
                    padding: 0 1em 0 0;
                    vertical-align: middle;
                    color: #636363;
                    border-radius: 0.25em;
                    background-color: #fff;
                }

                div.content ul li a {
                    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
                    border-radius: 8px;
                    border: 0;
                    cursor: pointer;
                    display: inline-block;
                    font-weight: 300;
                    height: 2.75em;
                    line-height: 2.75em;
                    min-width: 9.25em;
                    padding: 0 1.5em;
                    text-align: center;
                    text-decoration: none;
                    white-space: nowrap;
                    box-shadow: inset 0 0 0 1px #ddd;
                    color: #636363;
                    background-color: transparent;
                    -webkit-appearance: none;
                }

                div.content ul li a:hover {
                    background-color: rgba(255, 255, 255, 0.25);
                    border-bottom-color: transparent;
                }
            `}</style>
        </div>
    </Section>
);
