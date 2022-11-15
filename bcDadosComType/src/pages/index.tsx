import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";
import ClienteReposiotrio from "../core/ClienteRepositorio";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { cliente,
    clientes,
    novoCliente,
    selecionarCliente,
    salvarCliente,
    excluirCliente,
    tabelaVisivel,
    exibirTabela,
  } = useClientes()

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
     text-white
    `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente} />
          </>
        ) : (
          <Formulario cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}

      </Layout>
    </div>
  )
}
