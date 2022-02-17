
import Footer from './components/footer'
import Link from 'next/link'

export default function Sobre() {
  return (

    <>
      <main >
        <div className="flex flex-col flex-1 justify-center min-h-screen mx-auto  p-10 ">
          <h1 className="text-6xl text-black-500 text-center ">Frete Referência</h1>
          <h2 className="text-4xl font-bold text-indigo-500 text-center ">Baixada Santista</h2>
          <div className="p-8 flex-wrap  border-2 border-gray-200  rounded-xl drop-shadow-lg mt-10">
            <div className="flex flex-col itens-center justify-center text-center">
              <h2 className="uppercase tracking-wide text-3xl text-lime-500 font-extrabold mt-5 mb-2">Faça parte da mudança</h2>
              <p className="block text-sm leading-tight font-medium text-black mt-2 mb-2">Vamos juntos construir um novo futuro para o transporte</p>
            </div>
            <div>

              <p className="mt-2 text-slate-800 text-xl tracking-wider leading-8 text-justify">Nosso objetivo principal sempre será um frete justo e compatível com a realidade dos custos operacionais do transporte.
                Os caminhoneiros juntamente com o Sindcam Santos, deram inicio a uma tentativa de firmar um acordo comercial, com este movimento espera-se proporcionar dignidade ao transportador autônomo de cargas da nossa região.
                Para que possamos obter êxito em todo trabalho que está sendo executado, cada profissional deverá agir como fiscal das regras e leis que ficaram definidas pela categoria, caso contrário, voltaremos a estaca zero. </p>
            </div>
          </div>

          <div className="mt-10 text-center">

            <Link href="/home">
              <a className="text-base   uppercase mx-auto tracking-widest bg-lime-500 hover:bg-indigo-500 transition duration-500 mb-10 rounded-full text-white font-bold py-2 px-10 ">Saiba Mais</a>
            </Link>

          </div>

        </div>

      </main>
      <Footer></Footer>
    </>

  )
}