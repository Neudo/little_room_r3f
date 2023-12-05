import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Chair(props) {
    const { nodes, materials } = useGLTF("./glb/office_chair.glb");
    return (
        <group {...props} dispose={null}>
            <group >
                <group position={[-1.026, 26.177, -2.511]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair_Chair_0.geometry}
                        material={materials.Chair}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Chair_White_0.geometry}
                        material={materials.White}
                    />
                    <group position={[-0.756, -12.147, 0.234]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bottom_BlackPlastic_0.geometry}
                            material={materials.BlackPlastic}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bottom_Steel_0.geometry}
                            material={materials.Steel}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bottom__0.geometry}
                            material={materials.Bottom__0}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bottom_Iron_0.geometry}
                            material={materials.Iron}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Handles_BlackPlastic_0.geometry}
                        material={materials.BlackPlastic}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Handles_Steel_0.geometry}
                        material={materials.Steel}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./glb/office_chair.glb");