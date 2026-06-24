import Landing from "@/components/Landing";
import PreLanding from "@/components/PreLanding";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const visited = req.cookies["mnd_visited"];
  return { props: { showLanding: !!visited } };
};

export default function Home({ showLanding }: { showLanding: boolean }) {
  return showLanding ? <Landing /> : <PreLanding />;
}
