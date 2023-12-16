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
import Shelf from "./models/Shelf.jsx";
import {Windows} from "./models/Windows.jsx";



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
            <mesh receiveShadow geometry={boxGeometry} scale={[4, 2.5, .2]} material={wallMaterial} position={[0, 1.2, -2]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[3.8, 2.5, .001]} material={wallDarkMaterial} position={[-0.1, 1.2, -1.9]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[.2, 2.5, 4.1]} material={wallMaterial} position={[1.9, 1.2, 0.05]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[4, .2, 4.2]} material={wallMaterial}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[3.999, .018, 4.199]} position={[0, .105, 0]}><meshStandardMaterial {...floorTextures}/></mesh>
            <Windows/>


            <group onPointerEnter={() => setEnabled(true)} onPointerLeave={() => setEnabled(false)}>
                <FloorLamp scale={.11} position={[-1.4, 0.15, -1.7]}/>
            </group>

            <group position={[0,0,-.5]}>
                <Desk/>
                <ComputerScreenRight/>
                <ComputerScreenLeft/>
                <Keyboard/>
                <Computer/>
                <MovaGlob/>
                <OfficeChair/>
            </group>

            <Shelf/>








        </>
    );
}

export default Room;


