import React, {useEffect} from 'react';
import {useAnimations, useGLTF} from "@react-three/drei";

function DeskBottomRight(props) {
    const deskBottomRight = useGLTF('./glb/desk-bottom-right.glb')
    const animation = useAnimations(deskBottomRight.animations, deskBottomRight.scene)

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