import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

interface Example {
  hoge: string;
}

export const getServerSideProps: GetServerSideProps<{
  a: Example;
}> = async () => {
  return {
    props: {
      a: {
        hoge: "ok!",
      },
    },
  };
};

const Page: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  return (
    <>
      <h2>Get ServerSide Props</h2>
      <div>{a.hoge}</div>
    </>
  );
};

export default Page;
