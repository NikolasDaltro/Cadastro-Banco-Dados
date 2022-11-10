import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const clientes = [
    new Cliente('Ana' , 34, '1'),
    new Cliente('Bia' , 25, '2'),
    new Cliente('Paula' , 21, '3'),
    new Cliente('Brenda' , 44, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){
    console.log(cliente.nome)

  }
  function clienteExcluido(cliente: Cliente){
    console.log(`Excluir...${cliente.nome}`)

  }

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
     text-white
    `}>
     <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}  clienteSelecionado={clienteSelecionado}
        clienteExcluido={clienteExcluido}></Tabela>
     </Layout>
    </div>
  )
}
