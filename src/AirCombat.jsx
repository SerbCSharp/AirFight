import { Sky, useTexture, OrbitControls } from '@react-three/drei'
// import { useRef } from 'react'
// import { shaderMaterial, Sky, OrbitControls, useTexture } from '@react-three/drei'
// import * as THREE from "three";
// import imageVertexShader from './shaders/vertex.glsl'
// import imageFragmentShader from './shaders/fragment.glsl'


// const planeMaterial = shaderMaterial(
//     {
//         uTexture: new THREE.Texture()
//     },
//     imageVertexShader,
//     imageFragmentShader
//  )

 //extend({ PlaneMaterial })

export default function AirCombat()
{
const planeTexture = useTexture('./textures/plane.jpg')


    return <>
        <OrbitControls />

        <Sky sunPosition={ [ 1, 2, 3 ] } />

        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 0.8 } />
        {/* <ambientLight intensity={ 0.5 } /> */}

        <mesh rotation-z={ -0.5*Math.PI }>
            <planeGeometry args={[28.2, 48.6]} />
            <meshStandardMaterial map={ planeTexture } />
        </mesh>

    </>
}