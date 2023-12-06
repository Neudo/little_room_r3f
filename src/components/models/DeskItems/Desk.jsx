import React, {useEffect, useState} from 'react';
import {useAnimations, useGLTF} from "@react-three/drei";
import {LoopOnce} from "three";


function Desk(props) {
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
        animation.actions.openDesk.reset()
        animation.actions.closeDesk.stop()
        animation.actions.openDesk.setLoop(LoopOnce,1)
        animation.actions.openDesk.clampWhenFinished = true
        animation.actions.openDesk.play()
    }

    const closeDesk = () => {
        animation.actions.closeDesk.setLoop(LoopOnce,1)
        animation.actions.closeDesk.clampWhenFinished = true
        animation.actions.openDesk.stop()
        animation.actions.closeDesk.play()
    }

    desk.scene.traverse((node) => {
        if (node.isMesh) {
            node.castShadow = true
            node.receiveShadow = true
        }
    })
    //
    // console.log(desk.scene.traverse((node) => {
    // }))

    // desk.scene.children[0].children[0].children[4].addEventListener('click', () => {
    //     handleDesk()
    // })

    return (
        <>
            <primitive
                object={ desk.scene }
                scale={1.6}
                position={[1.96,-.07,0]}
                rotation-y={-1.57}
                onClick={handleDesk}
            />
        </>
    );
}

export default Desk;