import PrimaryLayout from 'components/stories/layouts/primary/PrimaryLayout';
import { ReactElement } from 'react';

export default function Home() {
  return (
    <>
      <section className="bg-rose-900">
        <h1>Home Page</h1>
      </section>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <PrimaryLayout>{page}</PrimaryLayout>
    </>
  );
};
