import React, {useRef} from 'react';
import {Float, useMatcapTexture, useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useControls} from "leva";

//TODO: ne pas utiliser de glb.
// Juste des Mesh/
// Matcapmaterial pour les textures /
// UseFrame pour la rotation du globe /
// texture map monde pour le globe /
// appliquer un effet de brillance pour le globe /
// Au clic sur le globe, faire un zoom de la caméra dessus (du coup ajouter un reset de la caméra) /

function MovaGlob(props) {
    const earthTexture = useTexture({map:'./textures/2k_earth_daymap.jpg'})
    const [matcap] = useMatcapTexture('C7C7D7_4C4E5A_818393_6C6C74')
    const globRef = useRef();

    const { positionMova, rotationMova, scaleMova } = useControls({
        positionMova: {
            value: [2.3, .78, -0.7],
            step: 0.01,
            min: -10,
            max: 10,
        },
        rotationMova: {
            value: [0, 0, 0],
            step: 0.01,
            min: -10,
            max: 10,
        },
        scaleMova: {
            value: [.14, .14, .24],
            step: 0.01,
            min: -10,
            max: 10,
        },
    })

    useFrame(() => {
        globRef.current.rotation.y += 0.002
    })

    return (
        <>
            <Float
                speed={1}
                rotationIntensity={0}
                floatIntensity={.1}
                floatingRange={[.7, .07]}
            >
            <mesh
                scale={.02}
                position={[2.3, .84, -0.7]}
                ref={globRef}
            >
                <sphereGeometry args={[3, 32, 32]}/>
                <meshStandardMaterial {...earthTexture}/>
            </mesh>
            </Float>

            <mesh position={positionMova} rotation-x={Math.PI * .5} scale={scaleMova} >
                <torusGeometry args={[.5, .1, 16, 100]}/>
                <meshMatcapMaterial matcap={matcap} />
            </mesh>

        </>
    );
}

export default MovaGlob;