import Head from 'next/head';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className="bg-black h-screen">{children}</main>
    </>
  );
};

export default PrimaryLayout;
