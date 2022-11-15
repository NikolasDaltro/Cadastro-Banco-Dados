import Layout from "../components/Layout"

export default function Jsx() {
    const a = 3
    const b = 5
    console.log(a * b)
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                <h1>JSX é um conceito central</h1>
                {Math.random()}
            </div>
        </Layout>
    )
}