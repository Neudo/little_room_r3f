import React, {useEffect} from 'react';
import {useAnimations, useGLTF} from "@react-three/drei";


function DeskTest(props) {
    const deskBottomRight = useGLTF('./glb/deskWood.glb')
    const animation = useAnimations(deskBottomRight.animations, deskBottomRight.scene)

    const openDesk = () => {
        animation.actions.openDesk.reset()
        animation.actions.openDesk.setLoop(1,1)
        animation.actions.openDesk.clampWhenFinished = true
        animation.actions.openDesk.play()
    }

    // ForEach nodes = castShadow = true
    deskBottomRight.scene.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true
        }
    })

    return (
        <>
            <primitive
                object={ deskBottomRight.scene }
                scale={1.6}
                rotation-y={-1.4}
                onClick={() => openDesk()}
            />
        </>
    );
}

export default DeskTest;