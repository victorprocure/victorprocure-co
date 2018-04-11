import * as React from 'react';
import Section from '../Section';
import ServicesCarousel from '../ServicesCarousel';

export class Home extends React.Component<{}, {}> {
    public render() {
        return (
            <div>
                <ServicesCarousel />
                <Section
                    id="leader"
                    title="Get Started Today"
                    className="m-md-3"
                >
                    <p className="lead font-weight-normal">
                        With over 15 years experience of real, cross discipline experience.
                        Together we will bring your vision to the world.
                    </p>
                </Section>
                <Section
                    id="service-section"
                    title="Watch it Come Together"
                    className="position-relative overflow-hidden p-3 p-md-5 text-center"
                    style={{ background: '#7ddcff' }}
                >
                    <p className="lead font-weight-normal">
                        This is what we can do.
                    </p>
                </Section>
            </div>
        );
    }
}