import type { GetServerSideProps } from "next";
import PreLanding from "@/components/PreLanding";

export const getServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export default function PreLandingPage() {
  return <PreLanding />;
}
