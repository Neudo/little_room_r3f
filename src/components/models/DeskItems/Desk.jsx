import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {useControls} from "leva";

export function DeskTest(props) {
    const { nodes, materials } = useGLTF("./glb/office_desk.glb");

    const {deskPosition} = useControls({
        deskPosition: [2,0.1,.7]
    })
    return (
        <group {...props}
               dispose={null}
               scale={.0037}
               position={ deskPosition }
               rotation-y={-3.15}
        >
            <group position={[0, 217.175, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.desk_table_edge_0.geometry}
                    material={materials.table_edge}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.desk_table_main_0.geometry}
                    material={materials.table_main}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.desk_table_drawers_0.geometry}
                    material={materials.table_drawers}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.desk_lambert1_0.geometry}
                    material={materials.lambert1}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.handle_handle4_0.geometry}
                material={materials.handle4}
                position={[-39.871, -4.049, -8.385]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.handle1_handle4_0.geometry}
                material={materials.handle4}
                position={[-39.871, 75.485, -8.385]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.handle2_handle4_0.geometry}
                material={materials.handle4}
                position={[-39.871, 75.485, 350.053]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.handle3_handle4_0.geometry}
                material={materials.handle4}
                position={[-39.871, -4.049, 350.053]}
            />
        </group>
    );
}

useGLTF.preload("/office_desk.glb");