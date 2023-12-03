import {Environment} from '@react-three/drei'


export default function Experience()
{
    return <>
        <Environment preset="city" />
        <color args={['#151111']} attach="background"/>

    </>
}