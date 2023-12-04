import {Environment, OrbitControls} from '@react-three/drei'
import Room from "./components/Room.jsx";


export default function Experience()
{
    return <>
        <OrbitControls makeDefault />

        <Environment preset="apartment" />
        <color args={['#0a132a']} attach="background"/>

        <ambientLight
            intensity={.5}
        />
        <Room/>







    </>
}