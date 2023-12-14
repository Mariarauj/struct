import Head from 'next/head'
import Style from '../styles/home.module.css'
import Navbar from '../Componentes/navbar'
import Bolotas from '../Componentes/bolotas'
import caixota from '../../../../public/images/caixa_cardapio.png'
import Image from 'next/image'
import carrinho from '../../../../public/images/carrinho.png'
import pau from '../../../../public/images/pau.png'
import caxeta from '../../../../public/images/caixa_unidades.png'

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
          <Navbar/>
          <Bolotas/>
          <a className={Style.img_caixa}><Image src = {caixota} height={140} alt =''></Image></a>
          <div className={Style.pau}>
            <ul className={Style.paus}>
              <a><Image src = {pau} height={10} alt =''></Image></a>
              <li className={Style.cat}>Categoria 1</li>
              <a><Image src = {pau} height={10} alt =''></Image></a>
            </ul>
          </div>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <div className={Style.pau}>
            <ul className={Style.paus}>
              <a><Image src = {pau} height={10} alt =''></Image></a>
              <li className={Style.cat}>Categoria 2</li>
              <a><Image src = {pau} height={10} alt =''></Image></a>
            </ul>
          </div>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Sushi</li>
                <li className={Style.li2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              </ul>
              <ul className={Style.ul}>
                <li className={Style.li}>Valor</li>
                <li className={Style.li2}>XX.XX R$</li>
                <a><Image src = {carrinho} alt =''></Image></a>
              </ul>
            </div>
          </section>
          <a className={Style.img_caixa}><Image src = {caxeta} height={110} alt =''></Image></a>
          <section className={Style.tabelas}>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Restaurante 1</li>
                <li className={Style.li2}>Endereço - Lorem ipsum dolor sit amet.</li>
                <li className={Style.li2}>Segunda a Sábado - xx:xx às yy:yy</li>
                <li className={Style.li2}>Domingos e feriados - xx:xx às yy:yy</li>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Restaurante 2</li>
                <li className={Style.li2}>Endereço - Lorem ipsum dolor sit amet.</li>
                <li className={Style.li2}>Segunda a Sábado - xx:xx às yy:yy</li>
                <li className={Style.li2}>Domingos e feriados - xx:xx às yy:yy</li>
              </ul>
            </div>
            <div className={Style.tabela}>
              <ul className={Style.ul}>
                <li className={Style.li}>Restaurante 3</li>
                <li className={Style.li2}>Endereço - Lorem ipsum dolor sit amet.</li>
                <li className={Style.li2}>Segunda a Sábado - xx:xx às yy:yy</li>
                <li className={Style.li2}>Domingos e feriados - xx:xx às yy:yy</li>
              </ul>
            </div>
          </section>
      </main>
    </>
  )
}