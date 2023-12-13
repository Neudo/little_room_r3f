/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: gorzi (https://sketchfab.com/gorzi90)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mouse-and-keyboard-c63ee81b71ff45b68a778101b4df3d46
Title: Mouse and Keyboard
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Keyboard(props) {
    const { nodes, materials } = useGLTF("./glb/mouse_and_keyboard.glb");
    return (
        <group {...props} dispose={null}
               scale={0.1}
               position={[1.4, 1.04, -0.55]}
               rotation-y={Math.PI * 1.5}
        >
            <group position={[5.279, -2.583, -4.384]} scale={[0.128, 0.025, 0.128]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials["Material.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials["Material.002"]}
                />
            </group>
            <group
                position={[8.525, -2.675, -2.311]}
                rotation={[0, 0.4, 0]}
                scale={[0.17, 0.219, 0.17]}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials["plastik_mat.001"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_8.geometry}
                    material={materials["plastik_polysk.002"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_9.geometry}
                    material={materials.guma}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_10.geometry}
                    material={materials["Material.002"]}
                />
            </group>
            <group position={[-1.062, -2.572, -3.616]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_16.geometry}
                    material={materials.klawiatura_klawisze}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_17.geometry}
                    material={materials["Material.011"]}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_18.geometry}
                    material={materials["Material.011"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                material={materials["plastik_polysk.001"]}
                position={[2.633, -2.591, -3.763]}
                rotation={[0.033, 0, 0]}
                scale={[3.949, 1.056, 0.851]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_14.geometry}
                material={materials["plastik_polysk.klawiatura"]}
                position={[2.633, -2.609, -3.764]}
            />
        </group>
    );
}

useGLTF.preload("./glb/mouse_and_keyboard.glb");
