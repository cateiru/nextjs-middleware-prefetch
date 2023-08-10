import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import React from "react";

interface Example {
  hoge: string;
}

export const getStaticProps: GetStaticProps<{
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

const Page: React.FC<InferGetServerSidePropsType<typeof getStaticProps>> = ({
  a,
}) => {
  return (
    <>
      <h2>Get Static Props</h2>
      <div>{a.hoge}</div>
    </>
  );
};

export default Page;
