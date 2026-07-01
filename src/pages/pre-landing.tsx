import type { GetServerSideProps } from "next";
import Head from "next/head";
import PreLanding from "@/components/PreLanding";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function PreLandingPage() {
  return (
    <>
      <Head>
        <title>MyNextDeveloper</title>
        <meta name="description" content="MyNextDeveloper — your dedicated remote dev team." />
      </Head>
      <PreLanding />
    </>
  );
}
