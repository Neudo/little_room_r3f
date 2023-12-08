import {Environment, OrbitControls, Sky, Stars} from '@react-three/drei'
import Room from "./components/Room.jsx";
import {Perf} from "r3f-perf";


export default function Experience()
{
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        {/* Intro avec des nuages ( Voir <Cloud/>)*/}
        <Sky
            sunPosition={[0, 1, 30]}
            rayleigh={.1}
        />

        <Environment preset="apartment" />
        {/*<color args={['#0b1323']} attach="background"/>*/}

        <ambientLight
            intensity={.5}
        />
        <Room/>
    </>
}