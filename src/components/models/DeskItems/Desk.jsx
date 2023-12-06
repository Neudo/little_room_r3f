import React, {useEffect, useState} from 'react';
import {useAnimations, useGLTF} from "@react-three/drei";
import {LoopOnce} from "three";


function DeskTest(props) {
    const desk = useGLTF('./glb/deskWood.glb')
    const animation = useAnimations(desk.animations, desk.scene)
    const [deskIsOpen, setDeskIsOpen] = useState(false)

    const handleDesk = () => {
        if (deskIsOpen) {
            closeDesk()
            setDeskIsOpen(false)
        } else {
            openDesk()
            setDeskIsOpen(true)
        }

    }
    const openDesk = () => {
        console.log('open desk')
        animation.actions.openDesk.reset()
        animation.actions.openDesk.setLoop(LoopOnce,1)
        animation.actions.openDesk.clampWhenFinished = true
        animation.actions.openDesk.play()
    }

    const closeDesk = () => {
        console.log('close desk')
        const originalClip = animation.clips[0];
        const closeAction = animation.mixer.clipAction(originalClip);
        closeAction.timeScale = -1;
        animation.actions.openDesk.stop();
        closeAction.play();
    }

    // ForEach nodes = castShadow = true
    desk.scene.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true
        }
    })

    return (
        <>
            <primitive
                object={ desk.scene }
                scale={1.6}
                rotation-y={-1.4}
                onClick={() => handleDesk() }
            />
        </>
    );
}

export default DeskTest;