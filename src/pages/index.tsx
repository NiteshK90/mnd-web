import Head from "next/head";
import Landing from "@/components/Landing";

export default function Home() {
  return (
    <>
      <Head>
        <title>MyNextDeveloper</title>
        <meta name="description" content="MyNextDeveloper — your dedicated remote dev team." />
      </Head>
      <Landing />
    </>
  );
}
