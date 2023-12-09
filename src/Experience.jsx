import {Environment, OrbitControls, Sky, Stars} from '@react-three/drei'
import Room from "./components/Room.jsx";
import {Perf} from "r3f-perf";
import {useControls} from "leva";


export default function Experience()
{
    const { sunPosition, rayLeigh, inclination, azimuth,mieCoefficient, mieDirectionalG,turbidity } = useControls({
        sunPosition: {
            value: [0, 1, 30],
            step: .01,
            min: -100,
            max: 100
        },
        rayLeigh: {
            value: .1,
            step: .1,
            min: 0,
            max: 1
        },
        inclination: {
            value: .4,
            step: .1,
            min: 0,
            max: 1
        },
        azimuth: {
            value: .25,
            step: .1,
            min: 0,
            max: 1
        },
        mieCoefficient: {
            value: .005,
            step: .001,
            min: 0,
            max: 1
        },
        mieDirectionalG: {
            value: .8,
            step: .1,
            min: 0,
            max: 1
        },
        turbidity: {
            value: .2,
            step: .1,
            min: 0,
            max: 1
        },

    })
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        {/* Intro avec des nuages ( Voir <Cloud/>)*/}
        <Sky
            distance={502}
            sunPosition={sunPosition}
            rayleigh={rayLeigh}
            inclination={inclination}
            azimuth={azimuth}
            mieCoefficient={mieCoefficient}
            mieDirectionalG={mieDirectionalG}
            turbidity={turbidity}

        />

        <Environment preset="apartment" />
        <ambientLight
            intensity={.4}
        />
        <Stars
            fade={true}
          saturation={100}
            count={3000}
            depth={20}
        />
        <Room/>
    </>
}