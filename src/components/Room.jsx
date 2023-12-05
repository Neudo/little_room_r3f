import React, { useState} from 'react';
import FloorLamp from "./models/FloorLamp.jsx";
import {useTexture} from "@react-three/drei";
import { EffectComposer, Outline, Select, Selection, ToneMapping} from "@react-three/postprocessing";
import Desk from "./models/Desk.jsx";




function Room() {
    const [enabled, setEnabled] = useState(false)

    const beton = "#81817d"
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

            <mesh receiveShadow position={ [0, .9, -2] }>
                <boxGeometry args={ [5.50,2,.2] } />
                <meshStandardMaterial color={beton} />
            </mesh>

            <mesh receiveShadow position={ [2.65,.9,0] }>
                <boxGeometry args={ [.2,2,4] } />
                <meshStandardMaterial color={beton} />
            </mesh>

            <mesh receiveShadow position={ [0,.105,0] }>
                <boxGeometry args={ [5.499,.018,3.999] } />
                <meshStandardMaterial {...floorTextures}/>
            </mesh>

            <mesh receiveShadow >
                <boxGeometry args={ [5.5,.2,4] } />
                <meshStandardMaterial color={beton} />
            </mesh>

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
                <Select enabled >
                    <group onPointerEnter={() => setEnabled(true)} onPointerLeave={() => setEnabled(false)}>
                        <FloorLamp castShadow />
                    </group>
                </Select>
            </Selection>
            <Desk />
        </>
    );
}

export default Room;