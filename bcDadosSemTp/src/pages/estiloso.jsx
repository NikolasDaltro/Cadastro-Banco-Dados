import style from '../styles/Estiloso.module.css'
import Layout from '../components/Layout'


export default function Stylo(){
    return(
        <Layout titulo="Exemplo de CSS Modularizado">
        <div className={style.roxo}>
         <h1>Estilo usando Css Módulos</h1>
        </div>
        </Layout>
    )
}