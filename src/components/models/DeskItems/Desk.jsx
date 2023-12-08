/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef, useState} from "react";
import {useGLTF, useAnimations, useCursor} from "@react-three/drei";
import {LoopOnce} from "three";

export default function Desk(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./glb/deskWood.glb");
    const { actions } = useAnimations(animations, group);
    const [hovered, set] = useState()
    const [deskIsOpen, setDeskIsOpen] = useState(false)


    useCursor(hovered, /*'pointer', 'auto', document.body*/)

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
        actions.openDesk.reset()
        actions.closeDesk.stop()
        actions.openDesk.setLoop(LoopOnce,1)
        actions.openDesk.clampWhenFinished = true
        actions.openDesk.play()
    }

    const closeDesk = () => {
        actions.closeDesk.setLoop(LoopOnce,1)
        actions.closeDesk.clampWhenFinished = true
        actions.openDesk.stop()
        actions.closeDesk.play()
    }

    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Sketchfab_model"
                    position={[1.96,.6,0]}
                    rotation={[-Math.PI / 2, 0, -Math.PI*.5]}
                    scale={.4}
                >
                    <group name="Root">
                        <group name="Cube001">
                            <mesh
                                name="Cube_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube_0.geometry}
                                material={materials.Wood}
                                position={[0, 0, -0.016]}
                            />
                        </group>
                        <group name="Cube002" position={[-2.35, 0, -1.49]}>
                            <mesh
                                name="Cube002_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube002_0.geometry}
                                material={materials.Wood}
                                position={[0, 0, 0.877]}
                                scale={[1, 1, 0.413]}
                            />
                        </group>
                        <group name="Cube003" position={[0, 0.8, -1.05]}>
                            <mesh
                                name="Cube003_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube003_0.geometry}
                                material={materials.Wood}
                                position={[0, 0.2, 0.703]}
                                scale={[1, 1, 0.413]}
                            />
                        </group>
                        <group name="Cube004" position={[-1.525, -1.25, -0.2]}>
                            <mesh
                                name="Cube004_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube004_0.geometry}
                                material={materials.Wood}
                            />
                        </group>
                        <group name="Cube005" position={[2.35, 0, -1.49]}>
                            <mesh
                                name="Cube001_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube001_0.geometry}
                                material={materials.Wood}
                                position={[0, 0, 0.877]}
                                scale={[1, 1, 0.413]}
                            />
                        </group>
                        <group name="Cube006" position={[1.525, -1.25, -0.2]}>
                            <mesh
                                name="Cube005_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube005_0.geometry}
                                material={materials.Wood}
                            />
                        </group>

                        <group name="Cube007" position={[0, -1.25, -0.2]}>
                            <mesh
                                name="drawer"
                                castShadow
                                receiveShadow
                                geometry={nodes.drawer.geometry}
                                material={materials.Wood}
                                onPointerOver={() => set(true)} onPointerOut={() => set(false)}
                                onPointerLeave={() => {set(false)} }
                                onClick={()=> {handleDesk()}}
                            />
                        </group>
                        <group name="Cube008" position={[-1.525, -0.29, -0.3]}>
                            <mesh
                                name="Cube007_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube007_0.geometry}
                                material={materials.Wood}
                            />
                        </group>
                        <group name="Cube009" position={[0, -0.29, -0.3]} />
                        <group name="Cube010" position={[1.525, -0.29, -0.3]}>
                            <mesh
                                name="Cube009_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.Cube009_0.geometry}
                                material={materials.Wood}
                            />
                        </group>
                        <group name="Cube011" position={[-0.762, -0.213, -0.2]} />
                        <group name="Cube012" position={[0.762, -0.213, -0.2]} />
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./glb/deskWood.glb");
