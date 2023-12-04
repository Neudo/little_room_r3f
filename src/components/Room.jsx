import React from 'react';
import FloorLamp from "./models/floorLamp.jsx";

function Room() {

    const beton = "#81817d"

    return (
        <>
            <mesh receiveShadow position={ [0, .9, -2] }>
                <boxGeometry args={ [5.5,2,.2] } />
                <meshStandardMaterial color={beton} />
            </mesh>

            <mesh receiveShadow position={ [2.65,.9,0] }>
                <boxGeometry args={ [.2,2,4] } />
                <meshStandardMaterial color={beton} />
            </mesh>

            <mesh receiveShadow >
                <boxGeometry args={ [5.5,.2,4] } />
                <meshStandardMaterial color={beton} />
            </mesh>


            <FloorLamp/>

        </>
    );
}

export default Room;