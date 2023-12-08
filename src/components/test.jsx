import {useFrame} from "@react-three/fiber";
import {lerp} from "three/src/math/MathUtils.js";
import {useRef} from "react";

export default function AnimatedBox() {
    const targetPosition = { x: 2, y: 4, z: 2 };
    let currentPosition = { x:-2, y: 0, z: 0 };
    let mesh = useRef();


    useFrame(() => {
        // Interpolate between current position and target position
        currentPosition.x = lerp(currentPosition.x, targetPosition.x, 0.005);
        currentPosition.y = lerp(currentPosition.y, targetPosition.y, 0.005);
        currentPosition.z = lerp(currentPosition.z, targetPosition.z, 0.005);

        // Update the position of the object
        mesh.current.position.set(currentPosition.x, currentPosition.y, currentPosition.z);
    });

    return <mesh ref={mesh} >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
    </mesh>;
}