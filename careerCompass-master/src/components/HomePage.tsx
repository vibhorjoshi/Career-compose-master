// HomePage.tsx
import React from 'react';

interface HomePageProps {
  title: string;
}

const HomePage: React.FC<HomePageProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default HomePage;
