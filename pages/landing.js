import React from 'react';
import Page from '../components/page';
import getAlerts from '../libs/get-alerts';

export default class extends React.Component {
    static async getInitialProps() {
        const pageName = "landing";
        const alerts = await getAlerts(pageName);

        return { alerts}
    }

    render() {
        const {alerts} = this.props;

        return (
        <Page  alerts={alerts}>
            <p>This is data...</p>
        </Page>
        )
    }
}