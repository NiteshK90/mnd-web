import PreLanding from "@/components/PreLanding";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const visited = req.cookies["mnd_visited"];
  if (visited) {
    return { redirect: { destination: "/landing", permanent: false } };
  }
  return { props: {} };
};

export default function Home() {
  return <PreLanding />;
}
