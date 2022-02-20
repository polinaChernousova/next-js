import { useRouter } from "next/router";
import { useEffect } from "react";
import Heading from "../components/Heading";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div>
      <Heading text="404" />
      <Heading tag="h2" text="Something is going wrong..." />
    </div>
  );
};

export default Error;
