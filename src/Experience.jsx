import {Environment, OrbitControls} from '@react-three/drei'
import Room from "./component/Room.jsx";


export default function Experience()
{
    return <>
        <OrbitControls makeDefault />

        <Environment preset="city" />
        <color args={['#0a132a']} attach="background"/>

        <Room/>







    </>
}