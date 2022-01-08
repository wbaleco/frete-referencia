import Head from 'next/head'
import Footer from './components/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-5 min-h-screen py-2">
      <Head>
        <title>Frete referencial</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Frete Referência{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Baixada Santista
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Todos os valores do frete de referência tem como ponto de partida os
          terminais do porto de Santos, cada operação poderá sofrer alterações
          no custo final do serviço devido aos adicionais abaixo, caso seja
          pertinente.{' '}
          {/* <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.tsx
          </code> */}
        </p>

        <div className="flex flex-wrap items-center justify-around  mt-6 sm:w-full">
          <section

            className="p-4 mt-6 text-left border w-56  rounded-xl hover:text-purple-600  border-b-4 border-purple-500 focus:text-blue-600"
          >
            <h3 className="text-lg text-center font-bold">DTA</h3>
            <h3 className="mt-4 text-center  text-2xl">
              20%
            </h3>
          </section>

          <section

            className="p-4 mt-6 text-left border w-56 rounded-xl hover:text-amber-600  border-b-4 border-amber-500 focus:text-blue-600"
          >
            <h3 className="text-lg text-center font-bold">Químico</h3>
            <h3 className="mt-4 text-center text-2xl">
              30%
            </h3>
          </section>

          <section

            className="p-4 mt-6 text-left border w-56 rounded-xl hover:text-green-600  border-b-4 border-green-500 focus:text-blue-600"
          >
            <h3 className="text-lg text-center font-bold">Margem Guarujá</h3>
            <h3 className="mt-4 text-center text-2xl">
              R$ 250,00
            </h3>
          </section>

          <section

            className="p-4 mt-6 text-left border w-56 rounded-xl hover:text-pink-600  border-b-4 border-pink-500 focus:text-blue-600"
          >
            <h3 className="text-lg text-center font-bold">Margem Cubatão</h3>
            <h3 className="mt-4 text-center text-2xl">
              R$ 150,00
            </h3>
          </section>
          <section
            className="p-4 mt-6 text-left border w-56 rounded-xl hover:text-blue-600  border-b-4 border-blue-500 focus:text-blue-600"
          >
            <h3 className="text-lg text-center font-bold">Margem São Vicente</h3>
            <h3 className="mt-4 text-center text-2xl">
              R$ 200,00
            </h3>
          </section>
        </div>
        <div className="flex flex-wrap items-center justify-around  mt-6 sm:w-full">
          <div

            className="p-2 mt-6 text-left border w-full rounded-xl hover:text-blue-600  border-b-4 border-gray-400 focus:text-blue-600"
          >
            <h3 className="text-lg text-center font-bold">Regras Gerais</h3>
            <h3 className="mt-4 text-center text-2xl">
              Acordo firmado entre as empresas e os caminhoneiros autônomos da
              baixada santista.
            </h3>
            <ul>
              <li className="my-2 text-gray-600 text-base font-semibold">
                * O Reajuste dos valores de referência ocorrerão sempre que o
                diesel aumentar igual ou superior a 10%.
              </li>
              <li className="my-2 font-semibold text-gray-600">
                *{" "}
                <span className="text-lg font-semibold text-gray-600 ">
                  Pedágio -
                </span>{" "}
                deverá ser pago conforme previsto em lei, ou seja, por meio de tag
                ou cartão e antecipado separadamente do frete.
              </li>
              <li className="my-2 text-gray-600 text-base font-semibold">
                *{" "}
                <span className="text-lg font-semibold text-gray-600">
                  Estadia -
                </span>{" "}
                A Agência Nacional de Transportes Terrestres (ANTT) atualizou os
                valores do pagamento do tempo adicional de carga e descarga de
                veículos de transporte rodoviário de cargas. Segundo a Lei nº
                11.442, de 5 de janeiro de 2007, o prazo máximo para carga e
                descarga é de 5 horas, contado da chegada do veículo ao endereço
                de destino, após o qual será devido ao Transportador Autônomo de
                Carga - TAC ou à Empresa de Transporte Rodoviário de Cargas - ETC
                um valor específico calculado por tonelada/hora ou fração.
              </li>
            </ul>
            <section>
              <h3 className="text-lg text-center font-bold">Como calcular estadia</h3>
              <p className="mt-4 text-center text-xl">
                Caminhão Trator + Semi-reboque - 27,0 t
              </p>
              <p className="mt-4 text-center text-xl">Estadia = nhoras x capacidade de carga x R$ 1,90</p>
              <p className="mt-4 text-center text-xl">Estadia = 1 x 27 x R$ 1,90</p>
              <p className="mt-4 text-center text-lg text-gray-600 font-bold"> Valor da hora = 51,30</p>
            </section>

          </div>
          <div className="mt-10 text-center">
            <button className="bg-blue-600 hover:bg-blue-400 mb-10 rounded-full text-white font-bold py-2 px-4 ">
              <Link href="/table">
                <a>Visualizar valores de referência</a>
              </Link>
            </button>
          </div>

        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
