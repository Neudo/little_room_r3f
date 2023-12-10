import React from 'react';
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons";

function Computer(props) {
    const computer = useLoader(GLTFLoader, './glb/computer_case.glb')
    return (
        <>
            <primitive
                object={computer.scene}
                scale={.093}
                position={[2.05, .1, 0.15]}
                rotation={[0, -1.55, 0]}
            />
        </>
    );
}

export default Computer;