import React, { useState} from "react";
import { useGLTF } from "@react-three/drei";
import { useCursor} from "@react-three/drei";
import {useControls} from "leva";


export function FloorLamp(props) {
    const { nodes, materials } = useGLTF("./glb/floor_lamp.glb");
    const [shiny, setShiny] = useState(true)
    const [hovered, set] = useState()
    useCursor(hovered, /*'pointer', 'auto', document.body*/)

    const { position, intensity, distance, angle, attenuation, anglePower, rotation } = useControls({
        position: [-2.2,2.29,-1.7],
        intensity: 18,
    })

    return (
        <>
            <pointLight
                position={position}
                intensity={ shiny ? intensity : 0}
                color="fff"
            />

        <group {...props}
               dispose={null}
               scale={.11}
               position={[ -2.1,0.15,-1.7 ]}
               onPointerOver={() => set(true)} onPointerOut={() => set(false)}
               onPointerLeave={() => {set(false)} }
               onClick={() => {setShiny(!shiny)} }
        >
            <mesh
                castShadow
                geometry={nodes.Object_4.geometry}
                material={materials.black}
            />
            <mesh
                castShadow
                geometry={nodes.Object_5.geometry}
                material={materials.glass_white}
            />
            <mesh
                castShadow
                geometry={nodes.Object_6.geometry}
                material={materials.light_bulp}
            />
        </group>
        </>
    );
}

useGLTF.preload("./glb/floor_lamp.glb");
