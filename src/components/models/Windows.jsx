/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AleixoAlonso (https://sketchfab.com/AleixoAlonso)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/residential-window-ae11104237314463a61251fd46ded4b4
Title: Residential Window
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {RigidBody} from "@react-three/rapier";

export function Windows(props) {
    const { nodes, materials } = useGLTF("./glb/residential_window.glb");
    return (
        <RigidBody type="fixed">
        <group {...props} dispose={null}>

            <group position={ [1.8,.84, 1.0] } rotation={[-Math.PI / 2, 0, -1.55]} >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes["#WIN0003_Frame_#WIN0003_Textures_0"].geometry}
                    material={materials.WIN0003_Textures}
                />


                {/*Feneêtre*/}
                <group position={[0.441, -0.039, .082]} rotation-z={Math.PI / 2} >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["#WIN0003_Window_#WIN0003_Textures_0"].geometry}
                        material={materials.WIN0003_Textures}
                    />

                    {/*Poignée de porte*/}
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["#WIN0003_Handle_#WIN0003_Textures_0"].geometry}
                        material={materials.WIN0003_Textures}
                        position={[-0.84, -0.018, 0.55]} rotation-y={Math.PI * 2}
                    />
                </group>
            </group>
        </group>
        </RigidBody>
    );
}

useGLTF.preload("./glb/residential_window.glb");
