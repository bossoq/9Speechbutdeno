/// <reference lib="dom">
import React from "react"

export default function SpeechButton(data:any): any {
  const sound: any = React.useRef()
  const play = () => {
    // let sound = document.getElementById(filename) as HTMLAudioElement
    sound.pause()
    sound.currentTime = 0
    sound.play()
  }
  return(
    Object.entries(data).map(([i, { label, filename }]: any) => {
      return (
        <>
          <button
            className="text-xl text-center px-4 py-2 rounded bg-red-500 m-4"
            onClick={play}
          >
            {label}
          </button>
          <audio ref={sound} preload="metadata">
            <source src={`/sounds/${filename}.mp3`} type="audio/mpeg" />
          </audio>
        </>
      )
    })
  )
}
