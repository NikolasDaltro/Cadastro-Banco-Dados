import Layout from "../components/Layout"
import Cabecalho from "../components/Cabecalho"


export default function App1() {
    return (
        <Layout titulo="Usando Componente">
            <Cabecalho titulo="Next.Js & React" />
            <Cabecalho titulo="Aprenda Next na pratica" />

        </Layout>
    )
}