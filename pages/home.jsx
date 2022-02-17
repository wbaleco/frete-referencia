
import Footer from './components/footer'
import Link from 'next/link'

export default function Home() {
    return (
        <>

            <div className="flex flex-1 container mx-auto flex-col min-h-screen ">
                <div className="mt-10 text-center">
                    <h1 className="text-6xl font-semibold">
                        Regras e Leis{' '}
                    </h1>
                    <h2 className="text-indigo-500 text-5xl font-extrabold">
                        Acordo Comercial
                    </h2>
                </div>

                <div className="flex flex-1 flex-wrap container mx-auto text-justify mt-10  rounded-xl border-2 border-gray-200 drop-shadow-lg">
                    <p className="text-xl leading-8 text-slate-800 tracking-wider p-10">
                        O SINDICAM – Sindicato dos Transportadores Rodoviários Autônomos de
                        Bens da Baixada Santista e Vale do Ribeira, com muita satisfação e
                        orgulho dos profissionais dos quais representa, vem formalmente
                        comunicar que os transportadores autônomos obtiveram sucesso nas suas
                        reivindicações de melhores condições de trabalho. Em reunião realizada
                        na data de hoje (08/11/2021), que teve início às 14h00, no auditório
                        do Sintraport, estiveram presentes cerca de 500 transportadores
                        autônomos de viagem da Baixada Santista e do Vale do Ribeira e
                        representantes de mais de 50 empresas de transportes que dependem dos
                        serviços da categoria no desempenho de suas atividades negociais.
                        Depois de um amplo debate, os transportadores formalizaram suas
                        intenções junto às empresas de transportes presentes, negociando
                        valores de referência para o frete praticado pelos profissionais
                        integrantes do Sindicam. Através dessa iniciativa inédita,
                        comprometeram-se, os sindicalizados e as empresas aderentes, através
                        de negociação sindical, ao ACORDO COMERCIAL, nos seguintes termos:
                        <span className='font-semibold'>{" "}Os valores do frete de referência tem como ponto de partida os
                            terminais do porto de Santos, cada operação poderá sofrer alterações
                            no custo final do serviço devido aos adicionais abaixo, caso seja
                            pertinente.{' '}</span>
                    </p>

                </div>
                <div className="container mx-auto lg:flex lg:flex-row w-full justify-center mt-2 p-5 bg-gray-200 rounded-md justify-items-center">
                    <div className="w-full border-b-4 border-lime-500  lg:w-52  mr-5  mb-5 mt-5   p-2  bg-white   rounded-md">
                        <h3 className="font-bold text-gray-600 text-center">DTA</h3>
                        <h4 className="text-lime-500 text-2xl text-center font-bold mt-5">20%</h4>
                    </div>

                    <div className="w-full lg:w-52  border-b-4 border-cyan-500  mb-5 mt-5    mr-5 p-2  bg-white   rounded-md">
                        <h3 className="font-bold  text-gray-600 text-center">Químico</h3>
                        <h4 className="text-cyan-500 text-2xl text-center font-bold mt-5">30%</h4>
                    </div>

                    <div className="w-full lg:w-52  border-b-4 border-amber-500  mb-5 mt-5    mr-5 p-2  bg-white   rounded-md">
                        <h3 className="font-bold text-gray-600 text-center">
                            Margem Guarujá
                        </h3>
                        <h4 className="text-amber-500 text-2xl text-center font-bold mt-5 ">
                            R$ 250,00
                        </h4>
                    </div>

                    <div className="w-full lg:w-52  border-b-4 border-red-500  mr-5 p-2 mb-5 mt-5  bg-white   rounded-md">
                        <h3 className="font-bold text-gray-600 text-center ">
                            Margem Cubatão
                        </h3>
                        <h4 className="text-red-500 text-2xl text-center font-bold mt-5">R$ 150,00</h4>
                    </div>

                    <div className="w-full lg:w-52  border-b-4 border-purple-500   p-2  mb-5 mt-5    bg-white   rounded-md">
                        <h3 className="font-bold text-gray-600 text-center">
                            Margem São Vicente
                        </h3>
                        <h4 className="text-purple-500 text-2xl text-center font-bold mt-5 ">
                            R$ 200,00
                        </h4>
                    </div>
                </div>
                <div className="container  flex mx-auto flex-wrap">
                    <div className="lg:w-full md:w-1/2 w-full mt-2 mb-2">
                        <div className="p-2 rounded-xl border-2 border-gray-200 drop-shadow-lg">
                            <h4 className="mb-2 p-4 text-lg font-semibold text-slate-800">
                                {" "}
                                Forma de pagamento vale pedágio{" "}
                            </h4>
                            <p className="text-lg p-4 text-justify leading-8 text-slate-800 tracking-wider">
                                {" "}
                                O Vale-Pedágio obrigatório, instituído pela Lei nº 10.209, de 23
                                de março de 2001, Por este dispositivo legal, os embarcadores ou
                                equiparados passaram a ser responsáveis pelo pagamento antecipado
                                do pedágio e fornecimento do respectivo comprovante, ao
                                transportador rodoviário. Assim, com esta Lei, elimina-se a
                                possibilidade de embutir o custo do pedágio no valor do frete
                                contratado. Fonte:
                                <a href="https://portal.antt.gov.br/vale-pedagio-obrigatorio">
                                    https://portal.antt.gov.br/vale-pedagio-obrigatorio
                                </a>{" "}
                            </p>
                        </div>
                    </div>
                    <div className="lg:w-full md:w-1/2 w-full mt-2 mb-2">
                        <div className="p-4 rounded-xl border-2 border-gray-200 drop-shadow-lg">
                            <h4 className="mb-2 p-4 text-lg font-semibold text-slate-800"> Estadia </h4>
                            <p className="text-lg  p-4 text-justify leading-8 text-slate-800 tracking-wider">
                                {" "}
                                A Agência Nacional de Transportes Terrestres (ANTT) atualizou os
                                valores do pagamento do tempo adicional de carga e descarga de
                                veículos de transporte rodoviário de cargas. Segundo a Lei nº
                                11.442, de 5 de janeiro de 2007, o prazo máximo para carga e
                                descarga é de 5 horas, contado da chegada do veículo ao endereço
                                de destino, após o qual será devido ao Transportador Autônomo de
                                Carga - TAC ou à Empresa de Transporte Rodoviário de Cargas - ETC
                                um valor específico calculado por tonelada/hora ou fração. O
                                índice é atualizado anualmente de acordo com a variação do Índice
                                Nacional de Preços ao Consumidor - INPC. Como informado na tabela
                                abaixo, o valor de R$ 1,78, atualizado em abril de 2020, passa a
                                ser de R$ 1,90, conforme atualização dada pelo INPC acumulado de
                                6,93% para o período de 04/2020 a 3/2021.{" "}
                            </p>
                        </div>
                    </div>

                </div>
                <div className="flex lg:w-full flex-col container mx-auto flex-wrap">


                    <div className="p-4 mb-2 rounded-xl border-2 border-gray-200 drop-shadow-lg

">
                        <h4 className="mb-2 text-lg font-semibold text-slate-800">
                            {" "}
                            Regra de reajuste do frete{" "}
                        </h4>
                        <p className="text-lg leading-8 text-slate-800 tracking-wider">
                            {" "}
                            O reajuste dos valores de referência ocorrerão sempre que o diesel
                            aumentar igual ou superior a 10%{" "}
                        </p>

                    </div>


                    <div className="p-4 rounded-xl border-2 border-gray-200 drop-shadow-lg">
                        <h4 className="mb-2 text-lg text-slate-800 font-semibold"> Como calcular estadia </h4>
                        <div className="flex container flex-col leading-8">
                            {" "}
                            <div>
                                <p className="text-slate-800 tracking-wider">Caminhão Trator + Semi-reboque - 27,0 t</p>
                            </div>
                            <div>
                                <p className="text-slate-800 tracking-wider">Estadia = nhoras x capacidade de carga x R$ 1,90</p>
                            </div>{" "}
                            <div>
                                <p className="text-slate-800 tracking-wider">Estadia = 1 x 27 x R$ 1,90</p>
                            </div>
                            <div>
                                <p className="text-slate-800 tracking-wider">Valor da hora = 51,30</p>
                            </div>{" "}
                        </div>
                    </div>

                </div>

                <div className="flex mt-10 text-center">

                    <Link href="/table">
                        <a className="text-sm  uppercase max-w-xl mx-auto tracking-widest bg-lime-500 hover:bg-indigo-500 transition duration-500 mb-10 rounded-full text-white font-bold py-2 px-4 ">Visualizar valores de referência</a>
                    </Link>

                </div>



                <Footer></Footer>
            </div>
        </>
    )
}
