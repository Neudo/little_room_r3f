import React from 'react';
import {useGLTF} from "@react-three/drei";

function Shelf(props) {
    const shelf = useGLTF('./glb/shelf.glb')
    return (
        <>
            <primitive position={[ 0,0,-1.72 ]} object={shelf.scene}/>
        </>
    );
}

export default Shelf;