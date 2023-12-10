import React from 'react';
import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons";

function ComputerScreenLeft(props) {
    const computerScreenLeft = useLoader(GLTFLoader, './glb/computer_screen_left.glb')
    return (
        <>
            <primitive
                object={computerScreenLeft.scene}
                scale={1.2}
                position={[2.25, 1.135, -0.15]}
                rotation={[0, Math.PI / 1, 0]}
            />
        </>
    );
}

export default ComputerScreenLeft;