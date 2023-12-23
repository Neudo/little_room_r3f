/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, {useRef, useState} from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import {LoopOnce} from "three";

export function Windows2(props) {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("./glb/windowsAnim.glb");
    const { actions } = useAnimations(animations, group);
    const [windowIsOpen, setWindowIsOpen] = useState(false);


    const handleWindow = () => {
        if(windowIsOpen){
            // close the window

            actions.CloseWindow.setLoop(LoopOnce, 1)
            actions.CloseWindow.clampWhenFinished = true
            actions.OpenWindow.stop()
            actions.CloseWindow.play()

            actions.CloseHandle.setLoop(LoopOnce, 1)
            actions.CloseHandle.clampWhenFinished = true
            actions.OpenHandle.stop()
            actions.CloseHandle.play()

            setWindowIsOpen(false)

        } else {
            //open the window
            actions.OpenWindow.reset();
            actions.CloseWindow.stop();
            actions.OpenWindow.setLoop(LoopOnce, 1)
            actions.OpenWindow.clampWhenFinished = true
            actions.OpenWindow.play();


            actions.OpenHandle.reset();
            actions.CloseHandle.stop();
            actions.OpenHandle.setLoop(LoopOnce, 1);
            actions.OpenHandle.clampWhenFinished = true;
            actions.OpenHandle.play();

            setWindowIsOpen(true);
        }
    }



    return (
        <group ref={group} {...props} dispose={null}>
            <group name="Scene">
                <group
                    name="Sketchfab_model"
                    position={[-5.293, 0, 0]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    onClick={handleWindow}
                >
                    <group
                        name="#WIN0003_Residential_Plastic_White_142x62x104fbx"
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <group name="RootNode">
                            <group name="#WIN0003_Frame" rotation={[-Math.PI / 2, 0, 0]}>
                                <mesh
                                    name="#WIN0003_Frame_#WIN0003_Textures_0"
                                    castShadow
                                    receiveShadow
                                    geometry={
                                        nodes["#WIN0003_Frame_#WIN0003_Textures_0"].geometry
                                    }
                                    material={materials.WIN0003_Textures}
                                />
                                <group name="#WIN0003_Window" position={[0.441, -0.039, 0.082]}>
                                    <group
                                        name="#WIN0003_Handle"
                                        position={[-0.84, -0.018, 0.55]}
                                    >
                                        <mesh
                                            name="#WIN0003_Handle_#WIN0003_Textures_0"
                                            castShadow
                                            receiveShadow
                                            geometry={
                                                nodes["#WIN0003_Handle_#WIN0003_Textures_0"].geometry
                                            }
                                            material={materials.WIN0003_Textures}
                                            rotation={[0.005, -1.498, 0.005]}
                                        />
                                    </group>
                                    <mesh
                                        name="#WIN0003_Window_#WIN0003_Textures_0"
                                        castShadow
                                        receiveShadow
                                        geometry={
                                            nodes["#WIN0003_Window_#WIN0003_Textures_0"].geometry
                                        }
                                        material={materials.WIN0003_Textures}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./glb/windowsAnim.glb");