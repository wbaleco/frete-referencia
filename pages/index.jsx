
import Footer from './components/footer'
import Link from 'next/link'

export default function Sobre() {
  return (

    <>
      <main >
        <div className="flex flex-col justify-center min-h-screen mx-auto  p-10 ">
          <h1 className="text-6xl text-black-500 text-center ">Frete Referência</h1>
          <h2 className="text-4xl font-bold text-indigo-500 text-center ">Baixada Santista</h2>
          <div className="grid grid-cols-2 p-8  border-2 border-gray-200  rounded-xl drop-shadow-lg mt-10">
            <div className="flex flex-col flex-wrap itens-center justify-center text-center">
              <h2 className="uppercase tracking-wide text-3xl text-lime-500 font-extrabold">Faça parte da mudança</h2>
              <p className="block mt-1 text-sm leading-tight font-medium text-black">Vamos juntos construir um novo futuro para o transporte</p>
            </div>
            <div>

              <p className="mt-2 text-slate-500 text-justify">Nossa luta sempre foi por um frete justo e compatível com a realidade dos custos operacionais do transporte.
                Os caminhoneiros juntamente com o Sindcam, deram inicio a uma tentativa de firmar um acordo comercial que proporcionasse dignidade ao transportador autônomo de cargas da nossa região.
                Para que se faça valer o trabalho que está sendo executado, cada profissional deverá agir como fiscal das regras e leis que ficaram definidas em reunião. </p>
            </div>
          </div>

          <div className="mt-10 text-center">

            <Link href="/home">
              <a className="text-sm  uppercase max-w-xl mx-auto tracking-widest bg-lime-500 hover:bg-indigo-500 transition duration-500 mb-10 rounded-full text-white font-bold py-2 px-4 ">Saiba Mais</a>
            </Link>

          </div>

        </div>

      </main>
      <Footer></Footer>
    </>

  )
}