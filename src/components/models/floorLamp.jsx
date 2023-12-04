import React, {useRef, useState} from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {useControls} from "leva";
import {ContactShadows, SpotLight, useHelper} from "@react-three/drei";
import * as THREE from 'three'


function FloorLamp() {
    const { position, intensity, distance, angle, attenuation, anglePower, rotation } = useControls({
        position: [-2,1.7,-1.7],
        intensity: 40,
    })

    const floorLamp = useLoader(GLTFLoader, './glb/floor_lamp.glb')

    // const [shiny, setShiny] = useState(false)
    const [hovered, setHovered] = useState()

    const {aNumber } = useControls({

        aNumber: [ -2.1,0.15,-1.7 ]
    })

    const pointLightRef = useRef()
    useHelper(pointLightRef, THREE.PointLightHelper, 1);


    return (
        <>
            <pointLight
                position={position}
                intensity={intensity}
                color="fff"
                ref={pointLightRef}
            />

            <primitive
                onPointerOver={() => {setHovered(true)} }
                onPointerLeave={() => {setHovered(false)} }
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