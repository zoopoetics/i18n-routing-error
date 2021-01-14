import Head from "next/head";

export default function Product({ message }) {
  return <main>{message}</main>;
}

export const getStaticPaths = async function getStaticPaths() {
  return {
    paths: [
      {
        locale: "en",
        params: {
          product: "single-cell-gene-expression",
        },
      },
      {
        locale: "cn",
        params: {
          product: "single-cell-gene-expression",
        },
      },
      {
        locale: "jp",
        params: {
          product: "single-cell-gene-expression",
        },
      },
      {
        locale: "en",
        params: {
          product: "single-cell-immune profiling",
        },
      },
      {
        locale: "cn",
        params: {
          product: "single-cell-immune profiling",
        },
      },
      {
        locale: "jp",
        params: {
          product: "single-cell-immune profiling",
        },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      message: `Current locale is ${locale}`,
    },
  };
};
