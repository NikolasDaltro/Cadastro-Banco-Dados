import Cliente from "./Cliente";

export default repositorio ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>

}