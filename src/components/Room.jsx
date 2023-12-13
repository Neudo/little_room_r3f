import React, { useState} from 'react';
import {useTexture} from "@react-three/drei";
import { EffectComposer, Outline, Select, Selection, ToneMapping} from "@react-three/postprocessing";
import {FloorLamp} from "./models/FloorLamp.jsx";
import Desk from "./models/DeskItems/Desk.jsx";
import {ComputerScreenRight} from "./models/DeskItems/ComputerScreenRight.jsx";
import MovaGlob from "./models/DeskItems/movaGlob.jsx";
import Computer from "./models/DeskItems/Computer.jsx";
import ComputerScreenLeft from "./models/DeskItems/ComputerScreenLeft.jsx";
import {OfficeChair} from "./models/DeskItems/office_chair.jsx";
import {Keyboard} from "./models/DeskItems/Keyboard.jsx";
import * as THREE from "three"





function Room() {
    const [enabled, setEnabled] = useState(false)
    const [enabledDesk, setEnabledDesk] = useState(false)

    const beton = "#81817d"
    const boxGeometry = new THREE.BoxGeometry(1,1,1)
    const wallMaterial = new THREE.MeshStandardMaterial({color: '#81817d'})
    const wallDarkMaterial = new THREE.MeshStandardMaterial({color:'#2D2D2B'})
    const floorTextures = useTexture({
            map: './textures/WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_COL_2K.jpg',
            aoMap: './textures/WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_AO_2K.jpg',
            normalMap: './textures/WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_NRM_2K.png',
            envMap: './textures/WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_REFL_2K.jpg',
            roughnessMap: './textures/WoodFlooringAshSuperWhite001/WoodFlooringAshSuperWhite001_GLOSS_2K.jpg',
        }
    )

    return (
        <>
            {/*Walls*/}
            <mesh receiveShadow geometry={boxGeometry} scale={[4, 2, .2]} material={wallMaterial} position={[0, .9, -2]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[3.8, 1.8, .001]} material={wallDarkMaterial} position={[-0.1, 1, -1.9]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[.2, 2, 4]} material={wallMaterial} position={[1.9, .9, 0]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[4, .2, 4]} material={wallMaterial}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[3.999, .018, 3.999]} position={[0, .105, 0]}><meshStandardMaterial {...floorTextures}/></mesh>


            <Selection>
                <EffectComposer
                    enabled={enabled}
                    autoClear={false}
                >
                    <Outline
                        blur
                        edgeStrength={5}
                        pulseSpeed={.3}

                    />
                    <ToneMapping/>
                </EffectComposer>
                <Select enabled>
                    <group onPointerEnter={() => setEnabled(true)} onPointerLeave={() => setEnabled(false)}>
                        <FloorLamp scale={.11} position={[-1.4, 0.15, -1.7]}/>
                    </group>
                </Select>
                <Select enabled>
                    <group onPointerEnter={() => setEnabledDesk(true)} onPointerLeave={() => setEnabledDesk(false)}>
                        <Desk/>
                    </group>
                </Select>
            </Selection>
            {/*<AnimatedBox/>*/}
            <ComputerScreenRight/>
            <ComputerScreenLeft/>
            <Keyboard/>
            <Computer/>
            <MovaGlob/>
            <OfficeChair/>
        </>
    );
}

export default Room;


