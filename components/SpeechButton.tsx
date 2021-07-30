import React from "react"
import { useRef } from "react"

export default function SpeechButton (data: any): any {
  const soundRef = useRef<HTMLAudioElement[]>([])
  console.log(soundRef)
  const play = (i: number) => {
    if(soundRef.current[i]) {
      soundRef.current[i].pause()
      soundRef.current[i].currentTime = 0
      soundRef.current[i].play()
    }
  }
  return(
    Object.entries(data).map(([i, { label, filename }]: any) => {
      return (
        <>
          <button
            className="text-xl text-center px-4 py-2 rounded bg-red-500 m-4"
            onClick={() => play(i)}
          >
            {label}
          </button>
          <audio autoPlay ref={audio => (audio && soundRef.current.push(audio))} key={i} preload="metadata">
            <source src={`/sounds/${filename}.mp3`} type="audio/mpeg" />
          </audio>
        </>
      )
    })
  )
}
