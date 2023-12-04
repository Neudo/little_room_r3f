import React, {useRef, useState} from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {useControls} from "leva";
import {ContactShadows, SpotLight, useCursor, useHelper} from "@react-three/drei";
import * as THREE from 'three'


function FloorLamp() {
    const { position, intensity, distance, angle, attenuation, anglePower, rotation } = useControls({
        position: [-2,1.7,-1.7],
        intensity: 40,
    })
    const floorLamp = useLoader(GLTFLoader, './glb/floor_lamp.glb')
    const [shiny, setShiny] = useState(true)
    const [hovered, set] = useState()
    useCursor(hovered, /*'pointer', 'auto', document.body*/)
    const {aNumber } = useControls({
        aNumber: [ -2.1,0.15,-1.7 ]
    })

    return (
        <>
            <pointLight
                position={position}
                intensity={ shiny ? intensity : 0}
                color="fff"
            />

            <primitive
                onPointerOver={() => set(true)} onPointerOut={() => set(false)}
                onPointerLeave={() => {set(false)} }
                onClick={() => {setShiny(!shiny)} }
                object={ floorLamp.scene } scale={.11} position={ aNumber }
            />
            <ContactShadows
                position-y={3.4}
                opacity={.82}
                scale={5}
                blur={2.4}
            />
        </>

    );
}

export default FloorLamp;