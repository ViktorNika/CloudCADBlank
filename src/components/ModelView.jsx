import React, { useMemo, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber'
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls, useHelper } from '@react-three/drei';
import {
    DirectionalLightHelper,
    PointLightHelper,
    SpotLightHelper,
    Mesh,
} from "three";

import ballValve from "../assets/models/ballValve.obj";

const Model = ({ modelPath }) => {
    const [obj, setObj] = useState();
    useMemo(() => new OBJLoader().load(modelPath, setObj), [modelPath]);
    if (obj) {
        obj.castShadow = true;
        obj.traverse((children) => {
            if (children instanceof Mesh) {
                children.castShadow = true;
            }
        });
    }
    return obj ? <primitive object={obj} /> : null;
};

const Lights = () => {
    const refLight1 = useRef();
    const refLight2 = useRef();
    const refLight3 = useRef();
    const refLight4 = useRef();
    // useHelper(refLight1, PointLightHelper, 5);
    // useHelper(refLight2, PointLightHelper, 5);
    // useHelper(refLight3, DirectionalLightHelper, 5);
    // useHelper(refLight4, SpotLightHelper, 5);

    return (
        <>
            <ambientLight intensity={0.1} />
            {/* <directionalLight
        ref={refLight3}
        castShadow
        position={[50, 20, 80]}
        intensity={0.5}
        shadow-mapSize-shadowMapWidth={2048}
        shadow-mapSize-shadowMapHeight={2048}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={-50}
        shadow-camera-bottom={10}
      /> */}
            <spotLight
                ref={refLight4}
                castShadow
                position={[-50, 50, 20]}
                intensity={0.5}
                shadow-mapSize-shadowMapWidth={2048}
                shadow-mapSize-shadowMapHeight={2048}
                shadow-camera-left={-50}
                shadow-camera-right={50}
                shadow-camera-top={-50}
                shadow-camera-bottom={50}
            />
            <pointLight ref={refLight1} position={[10, -10, -20]} intensity={0.3} />
            <pointLight ref={refLight2} position={[0, 10, 5]} intensity={0.3} />
            <spotLight intensity={1} position={[0, 1000, 0]} />
        </>
    );
};

const Assembly  = () => {
    return (
        <mesh
            castShadow
            position={[-15, 5, -35]}
            scale={[0.05, 0.05, 0.05]}
            rotation={[0, 20, 0]}
        >
            <Model modelPath={ballValve} />
        </mesh>
    );
};

const ModelView = () => {
    return (
        <Canvas
            shadowMap
            colorManagement
            camera={{ position: [0, 0, 5], fov: 60 }}
        >
            <OrbitControls
                enablePan={Boolean("Pan", true)}
                enableZoom={Boolean("Zoom", true)}
                enableRotate={Boolean("Rotate", true)}
            />
            <Assembly />
            <Lights />
        </Canvas>
    );
};

export default ModelView;