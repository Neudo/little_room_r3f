import React, {useEffect, useRef} from 'react';
import {useAnimations, useGLTF} from "@react-three/drei";

function Window3(props) {
    // const window3 = useLoader(GLTFLoader, './glb/windowsAnimTest.glb')
    const window3 = useGLTF('./glb/windowsAnimTest.glb')
    const animations = useAnimations(window3.animations, window3.scene)
    console.log(animations)


    useEffect(() => {
        const action = animations.actions.OpenWindow
        action.play()

    }, []);

    return (
        <>
            <primitive
                object={window3.scene}
                position={[2, 0, 0]}
            />
        </>
    );
}

export default Window3;