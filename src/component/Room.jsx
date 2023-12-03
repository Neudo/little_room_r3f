import React from 'react';

function Room() {

    const beton = "#33422F"

    return (
        <>
            <mesh position={ [0, .9, -2] }>
                <boxGeometry args={ [5.5,2,.2] } />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh position={ [2.65,.9,0] }>
                <boxGeometry args={ [.2,2,4] } />
                <meshStandardMaterial color="white" />
            </mesh>

            <mesh>
                <boxGeometry args={ [5.5,.2,4] } />
                <meshStandardMaterial color="white" />
            </mesh>
        </>
    );
}

export default Room;