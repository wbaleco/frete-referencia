import Link from "next/link";

export default function table() {
    return (
        <>



            <div className="flex items-center justify-center ">

                <h2 className=" text-blue-600 font-bold text-3xl p-10">
                    Valores de referência
                </h2>

            </div>
            <div className="w-screen">
                <table className="table-auto w-full  ">
                    <thead className=" bg-gray-200">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Destino
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Distância percorrida/KM
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Pedágio 5 eixos
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Pedágio 6 eixos
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Frete L
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Frete LS
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-600">Adamantina</div>
                                <div className="text-sm text-gray-500">SP</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    1348
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 1.184,00</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                <span className="font-medium text-gray-600"> R$ 1.421,20</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 6.157,29</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 6.999,99</span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-600">Adolfo</div>
                                <div className="text-sm text-gray-500">SP</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 inline-flex text-xs text-left leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    1141
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 1.000,20</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                <span className="font-medium text-gray-600">R$ 1.200,24</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-left text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 5.260,65</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 5.979,35 </span>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="font-medium text-gray-600">Adolfo</div>
                                <div className="text-sm text-gray-500">SP</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <span className="px-6 inline-flex text-xs text-left leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    1141
                                </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 1.000,20</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                                <span className="font-medium text-gray-600">R$ 1.200,24</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 5.260,65</span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-left text-sm text-gray-500 font-medium">
                                <span className="font-medium text-gray-600">R$ 5.979,35 </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center  mt-20  border-t-2 ">

                <button className=" hover:bg-cyan-400 bg-blue-700 mb-10 mt-10 text-white font-bold py-2 px-4 rounded-full">
                    <Link href="/">
                        <a>Visualizar regras</a>
                    </Link>
                </button>
            </div>

        </>


    )

}