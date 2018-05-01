import * as React from 'react';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';
import { Main } from '../components/Main';
import { Navigation } from '../components/Navigation';

export default () => (
    <Layout>
        <Header />
        <Navigation />
        <Main />
    </Layout>
);
