'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

function Model({ isPlaying }: { isPlaying: boolean }) {
  const group = useRef<THREE.Group>(null)
  const { scene, animations } = useGLTF('/models/exercise-animation.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Play/pause animation
    const action = actions['mixamo.com'] || actions[0]
    if (action) {
      isPlaying ? action.play() : action.stop()
    }
  }, [isPlaying, actions])

  useFrame(() => {
    // Optional: Add any frame-by-frame logic here
  })

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

export default function ExerciseViewer() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="relative h-96 w-full">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 7]} intensity={1} castShadow />
        <Suspense fallback={null}>
          <Model isPlaying={isPlaying} />
        </Suspense>
        <OrbitControls 
          enableZoom={true}
          target={[0, 1, 0]}
          maxPolarAngle={Math.PI * 0.9}
        />
      </Canvas>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="bg-white/80 hover:bg-white px-4 py-2 rounded-full shadow-lg"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  )
}