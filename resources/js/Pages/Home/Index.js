import React from 'react';
import Title from '@comp/Title';
import Layout from '@inc/Layout/Main';

const Home = () => (
  <Layout>
    <h1>Home</h1>
    <Title>Section 1</Title>
    <Title as="h3" size="xxs">
      Section 2
    </Title>
    <Title as="h1" size="xs">
      Section 3
    </Title>
    <Title size="sm">Section 4</Title>
    <Title size="lg">Section 5</Title>
    <Title size="xl">Section 6</Title>
    <Title as="h3" size="xxl">
      Section 7
    </Title>
    <Title as="h5">Section 8</Title>
  </Layout>
);

export default Home;
