import { useWeb3React } from "@web3-react/core";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";

import useRealms from "../hooks/useRealms";

const BAG_START = 0;
const BAG_END = 7999;

type Derivative = {
  realm: string,
}

function Home() {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const isConnected = typeof account === "string" && !!library;

  const realms = useRealms();

  const bags: Derivative[] = []

  // TypeError: realms.ownerOf is not a function :(
  console.log(realms)

  useEffect(() => {
    if (realms) {
      (async () => {
        for (let bag = BAG_START; bag <= BAG_END; ++bag) {
          bags.push({
            realm: await realms.ownerOf(bag)
          })
        }
      })()
    }
  }, [realms])



  return (
    <div>
      <Head>
        <title>next-web3-boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav>
          <Link href="/">
            <a>next-web3-boilerplate</a>
          </Link>

          <Account triedToEagerConnect={triedToEagerConnect} />
        </nav>
      </header>

      <main>
        <h1>
          Welcome to{" "}
          <a href="https://github.com/mirshko/next-web3-boilerplate">
            next-web3-boilerplate
          </a>
        </h1>

        {isConnected && (
          <section>
            <ETHBalance />
          </section>
        )}
      </main>

      <style jsx>{`
        nav {
          display: flex;
          justify-content: space-between;
        }

        main {
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default Home;
