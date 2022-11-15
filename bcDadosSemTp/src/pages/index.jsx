import Navegador from "../components/Navegador"

export default function Inicio(){
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexWrap:'wrap',
            height: '100vh',

        }}>
         <Navegador texto="Estiloso" destino="/estiloso" />
         <Navegador texto="App1" destino="/app1" />
         <Navegador texto="JSX"destino="/jsx" />
         <Navegador texto="Navegação #01"destino="/navegacao" />
         <Navegador texto="Navegação #02"destino="/cliente/sp-2/321" />
         <Navegador texto="Componente com Estado"destino="/estado" />
         <Navegador texto="Integração com API #01"destino="/integracao" />
         <Navegador texto="Conteúdo Estatico"destino="/estatico" />
        </div>
    )
}