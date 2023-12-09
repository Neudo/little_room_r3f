import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import {StrictMode, Suspense} from "react";
import {Html} from "@react-three/drei";

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    // <StrictMode>
        <Canvas
            className="r3f"
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 2000,
                position: [ -3, 1.5, 4 ]
            } }
        >
            <Experience />
        </Canvas>
    // </StrictMode>
)