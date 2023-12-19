import React, {Suspense, useEffect, useRef} from 'react';
import { Box } from '@react-three/drei';
import * as THREE from 'three';
const Test = () => {
    const buildingRef = useRef();
    const windowRef = useRef();
    const [firstRender, setFirstRender] = React.useState(true);


    useEffect(() => {
        if (firstRender) {
        const width = buildingRef.current.geometry.parameters.width * 0.5;
        const height = buildingRef.current.geometry.parameters.height * 0.5;
        const depth = buildingRef.current.geometry.parameters.depth * 0.5;

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

        buildingRef.current.geometry.dispose();
        buildingRef.current.geometry = extrudeGeometry;

        setFirstRender(false);
        } else {
            return
        }

    }, []);

    return (
        <>
            <Box args={[5, 2, 0.25]} position={[3,-2,1]} ref={buildingRef}>
                <meshStandardMaterial color="gray" />
            </Box>

            <Box args={[1, 1, 1.25]} position={[3, -2, 1]} ref={windowRef}>
                <meshStandardMaterial color="brown" transparent opacity={0} />
            </Box>
        </>
    );
};

export default Test;
