import React from 'react';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import {useLoader} from "@react-three/fiber";
import {useControls} from "leva";


function Desk() {
    const desk = useLoader(GLTFLoader, './glb/desk.glb')
    const computerScreen = useLoader(GLTFLoader, './glb/computer_screen.glb')

    const {deskPosition,rotation, computerScreenPosition, computerScreenRotation} = useControls({
        deskPosition: [2.05,0,0],
        rotation: -1.58,
        computerScreenPosition: [2.27,1.21,0.3],
        computerScreenRotation: -1.55
    })

    return (
        <>

            <primitive  object={ desk.scene } scale={.0047} position={deskPosition} rotation-y={rotation} />
            <primitive  object={ computerScreen.scene } scale={1.6} position={computerScreenPosition} rotation-y={computerScreenRotation} />




        </>
    );
}

export default Desk;