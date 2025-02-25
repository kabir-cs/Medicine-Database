import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Medicine Database</title>
      </Head>
      <h1 className="text-3xl font-bold">Welcome to the Medicine Database</h1>
      <Link href="/medicines">
        <a className="text-blue-500">View Medicines</a>
      </Link>
    </div>
  );
}