'use client'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Play, Pause } from 'lucide-react'

interface ExerciseViewerProps {
  isPlaying: boolean
}

const ExerciseViewer = dynamic<ExerciseViewerProps>(
  () => import('./ExerciseModel').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="relative h-64 sm:h-80 md:aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-200 animate-pulse" />
    )
  }
)

export default function HeroModel() {
  const [isPlaying, setIsPlaying] = useState(true)

  return (
    <div className="relative h-64 sm:h-80 md:aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100">
      {/* Now properly typed */}
      <ExerciseViewer isPlaying={isPlaying} />
      
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 hover:bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2"
      >
        {isPlaying ? (
          <>
            <Pause className="w-4 h-4" />
            <span>Pause</span>
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            <span>Play</span>
          </>
        )}
      </button>
    </div>
  )
}