import {useFrame} from "@react-three/fiber";
import {lerp} from "three/src/math/MathUtils.js";
import {useRef} from "react";

export default function AnimatedBox() {



    const targetPosition = { x: 2, y: 5, z: 0 };
    let currentPosition = { x:-2, y: 0, z: 0 };
    let targetRotation = { x: 5, y: 2, z: 1 };
    let currentRotation = { x: 0, y: 0, z: 0 };
    let mesh = useRef();


    useFrame(() => {
        // Interpolate between current position and target position
        // currentPosition.x = lerp(currentPosition.x, targetPosition.x, 0.005);
        // currentPosition.y = lerp(currentPosition.y, targetPosition.y, 0.005);
        // currentPosition.z = lerp(currentPosition.z, targetPosition.z, 0.005);
        //
        // currentRotation.x = lerp(currentRotation.x, targetRotation.x, 0.005);
        // currentRotation.y = lerp(currentRotation.y, targetRotation.y, 0.005);
        // currentRotation.z = lerp(currentRotation.z, targetRotation.z, 0.005);
        //
        // // Update the rotation of the object
        // mesh.current.rotation.set(currentRotation.x, currentRotation.y, currentRotation.z);
        //
        // // Update the position of the object
        // mesh.current.position.set(currentPosition.x, currentPosition.y, currentPosition.z);


        mesh.current.rotation.z += 0.001;
    });

    return <mesh ref={mesh} >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
    </mesh>;
}