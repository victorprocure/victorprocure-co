import * as React from 'react';
import {
    Carousel,
    CarouselItem,
    // CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import './ServicesCarousel.css';

const items = [
    {
        src: require('./development-image.jpg'),
        altText: 'Software Development Services',
        caption: 'Fullstack development using C#, Java, NodeJS, React and Angular'
    },
    {
        src: require('./database-image.jpg'),
        altText: 'Database Administration Services',
        caption: 'Database consultation for your SQL or NoSQL database backends'
    },
    {
        src: require('./office-image.jpg'),
        altText: 'Microsoft Office 365',
        caption: 'Microsoft Office 365 consultation and migration services'
    },
    {
        src: require('./project-image.jpg'),
        altText: 'Project Consultation Services',
        caption: 'Consultation services for pre-project planning and post project implementations'
    },
    {
        src: require('./deployment-image.jpg'),
        altText: 'Software Deployment Services',
        caption: 'Bring your development projects to production and streamline your current deployments'
    },
    {
        src: require('./services-image.jpg'),
        altText: 'Architecture and Infrastructure Consultation Services',
        caption: 'Services to help track down and alleviate your current infrastructure and architecture shortcomings'
    }
];

export interface ServicesCarouselState {
    activeIndex: number;
}

export class ServicesCarousel extends React.Component<{}, ServicesCarouselState> {
    private animating: boolean;

    constructor(props: {}) {
        super(props);

        this.state = { activeIndex: 0 };
    }

    public render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <div
                        className="carousel-image-data"
                        style={{ backgroundImage: `url(${item.src})` }}
                        title={item.altText}
                    />

                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
            </Carousel>
        );
    }

    private onExiting = () => {
        this.animating = true;
    }

    private onExited = () => {
        this.animating = false;
    }

    private next = () => {
        if (this.animating) {
            return;
        }

        this.goToIndex(this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1);
    }

    private previous = () => {
        if (this.animating) {
            return;
        }

        this.goToIndex(this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1);
    }

    private goToIndex = (newIndex: number) => {
        if (this.animating) {
            return;
        }

        this.setState({ activeIndex: newIndex });
    }

}