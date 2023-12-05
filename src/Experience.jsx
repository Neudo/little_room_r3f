import {Environment, OrbitControls} from '@react-three/drei'
import Room from "./components/Room.jsx";
import {Perf} from "r3f-perf";


export default function Experience()
{
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />

        <Environment preset="apartment" />
        <color args={['#0b1323']} attach="background"/>

        <ambientLight
            intensity={.5}
        />
        <Room/>
    </>
}