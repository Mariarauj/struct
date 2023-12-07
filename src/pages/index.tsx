import Head from 'next/head'
import Style from '@/styles/home.module.css'
import Navbar from '@/Componentes/navbar'
import Bolotas from '../Componentes/bolotas'
import sushi from '../Componentes/comidas'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section>
          <Navbar/>
          <Bolotas/>
          <h1>Cardápio</h1>
          <div>
            <button>carrinho</button>
          </div>
        </section>
      </main>
    </>
  )
}
