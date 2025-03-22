import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-dark text-white min-h-screen">
      <Head>
        <title>Underground Income</title>
      </Head>
      <main className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Underground Income
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          Real strategies for winning with TikTok Shop, Amazon FBA, and AI tools — delivered weekly.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md">
          <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md text-dark" />
          <button className="bg-orange hover:bg-techblue text-white font-bold px-6 py-2 rounded-md transition">
            Subscribe
          </button>
        </form>
      </main>
    </div>
  )
}
