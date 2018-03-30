import * as React from 'react';
import Section from '../Section';
import ServicesCarousel from '../ServicesCarousel';

export class Home extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <ServicesCarousel />
                <Section id="leader" title="Get Started Today">
                    <p className="lead font-weight-normal">
                        With over 10 years experience of real, cross discipline experience.
                        I will bring your vision to the world.
                    </p>
                </Section>
            </div>
        );
    }
}