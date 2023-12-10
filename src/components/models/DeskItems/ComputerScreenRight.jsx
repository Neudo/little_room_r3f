/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: AlexBoost (https://sketchfab.com/AlexBoost)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-computer-screen-ca5e86ef2400474ab064d1155604a6f5
Title: Low Poly Computer Screen
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ComputerScreenRight(props) {
    const { nodes, materials } = useGLTF("./glb/computer_screen.glb");
    return (
        <group {...props} dispose={null}>
            <group  >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube_0.geometry}
                    material={materials.Plastic}
                    position={[2.13, 1.08, .7]}
                    rotation-x={Math.PI * 1.5}
                    rotation-z={Math.PI / .75}
                    scale={1.4}
                />
            </group>
        </group>
    );
}

useGLTF.preload("./glb/computer_screen.glb");
