import React, {useEffect, useRef, useState} from 'react';
import {Box, useTexture} from "@react-three/drei";
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
import Test from "./test.jsx";
import {Windows2} from "./models/Windows2.jsx";
import Window3 from "./models/window3.jsx";




function Room() {
    const [enabled, setEnabled] = useState(false)
    const [enabledDesk, setEnabledDesk] = useState(false)
    const wallHoleRef = useRef();
    const windowRef = useRef();
    const [firstRender, setFirstRender] = useState(false);


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

    useEffect(() => {
        if (firstRender) {
            const width = wallHoleRef.current.geometry.parameters.width * 0.5;
            const height = wallHoleRef.current.geometry.parameters.height * 0.5;
            const depth = wallHoleRef.current.geometry.parameters.depth * 0.5;

            const shape = new THREE.Shape();
            shape.moveTo(-width, height);
            shape.lineTo(-width, -height);
            shape.lineTo(width, -height);
            shape.lineTo(width, height);
            shape.lineTo(-width, height);

            const wWidth = windowRef.current.geometry.parameters.width * 0.5;
            const wHeight = windowRef.current.geometry.parameters.height * 0.5;

            const hole = new THREE.Path();
            hole.moveTo(-wWidth, wHeight);
            hole.lineTo(-wWidth, -wHeight);
            hole.lineTo(wWidth, -wHeight);
            hole.lineTo(wWidth, wHeight);
            hole.lineTo(-wWidth, wHeight);

            shape.holes.push(hole);

            const extrudeSettings = {
                amount: depth * 2,
                bevelEnabled: false,
            };

            const extrudeGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
            extrudeGeometry.translate(0, 0, -depth);

            wallHoleRef.current.geometry.dispose();
            wallHoleRef.current.geometry = extrudeGeometry;

            setFirstRender(false);
        } else {
            return
        }

    }, []);



    return (
        <>
            {/*Walls*/}
            <mesh receiveShadow geometry={boxGeometry} scale={[4, 2.5, .2]} material={wallMaterial} position={[0, 1.2, -2]}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[3.8, 2.5, .001]} material={wallDarkMaterial} position={[-0.1, 1.2, -1.9]}/>

            {/*Wall with hole*/}
            {/*<mesh ref={wallHoleRef} receiveShadow geometry={boxGeometry} scale={[.2, 2.5, 4.1]} material={wallMaterial} position={[1.9, 1.2, 0.05]}/>*/}
            {/*<mesh ref={windowRef} receiveShadow geometry={boxGeometry} scale={[.5, 1.5, 1.3]}  position={[1.9, 1.5, 0.85]}>*/}
            {/*    <meshStandardMaterial />*/}
            {/*    /!*<meshStandardMaterial transparent opacity={0}/>*!/*/}
            {/*</mesh>*/}

            {/*<Box args={[.2, 2.5, 4.1]} position={[1.9, 1.2, 0.05]} ref={wallHoleRef}>*/}
            {/*    <meshStandardMaterial color="blue" />*/}
            {/*</Box>*/}

            {/*<Box args={[.5, 1.5, 1.3]} position={[1.9, 1.5, 0.85]} ref={windowRef}>*/}
            {/*    <meshStandardMaterial color="green" />*/}
            {/*</Box>*/}
            <Test/>



            <mesh receiveShadow geometry={boxGeometry} scale={[4, .2, 4.2]} material={wallMaterial}/>
            <mesh receiveShadow geometry={boxGeometry} scale={[3.999, .018, 4.199]} position={[0, .105, 0]}><meshStandardMaterial {...floorTextures}/></mesh>
            <Windows2/>
            {/*<Window3/>*/}
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


