import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/Container";
import Qr from "../components/Qr";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Qr />
      </Container>
    </>
  );
};

export default Home;
