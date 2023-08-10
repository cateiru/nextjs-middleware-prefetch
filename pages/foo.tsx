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
        hoge: "hoge",
      },
    },
  };
};

const Page: React.FC<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ a }) => {
  return (
    <>
      <div>Foo</div>
      <div>{a.hoge}</div>
    </>
  );
};

export default Page;
