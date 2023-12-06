import React, {useEffect} from 'react';
import {useAnimations, useGLTF} from "@react-three/drei";
import {LoopPingPong} from "three";

function DeskBottomRight(props) {
    const deskBottomRight = useGLTF('./glb/desk-bottom-right.glb')
    const animation = useAnimations(deskBottomRight.animations, deskBottomRight.scene)

    console.log("deskBottomRight", animation.actions.OpenDoor)

    // useEffect(() =>
    // {
    //     const action = animation.actions.OpenDoor
    //     animation.actions.OpenDoor.reset()
    //     action.setLoop(1,1)
    //     action.play()
    // }, [])
    const openDoor = () => {
        animation.actions.OpenDoor.reset()
        animation.actions.OpenDoor.setLoop(1,1)
        animation.actions.OpenDoor.clampWhenFinished = true
        animation.actions.OpenDoor.play()
    }

    return (
        <>
            <primitive
                object={ deskBottomRight.scene }
                scale={.3}
                rotation-y={-1.4}
                onClick={() => openDoor()}
            />
        </>
    );
}

export default DeskBottomRight;