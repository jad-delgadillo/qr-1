import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Hero />
      </Container>
    </>
  );
};

export default Home;
