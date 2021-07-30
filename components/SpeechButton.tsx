import React, { useRef } from "react"

export default function SpeechButton (data: { label: string, filename: string }): Element[] {
  interface IData {
    label: string,
    filename: string
  }
  const dataObj: IData[] = Object.values(data)
  const soundRef = useRef<HTMLAudioElement[]>([])
  const play = (i: number) => {
    if (soundRef.current[i]) {
      soundRef.current[i].pause()
      soundRef.current[i].currentTime = 0
      soundRef.current[i].play()
    }
  }
  return (
    dataObj.map((record, i): Element => {
      const label: string = record.label
      const filename: string = record.filename
      return (
        <>
          <button
            className="button is-danger is-medium has-text-weight-bold m-3"
            onClick={() => play(i)}
          >
            {label}
          </button>
          <audio ref={audio => (audio && soundRef.current.push(audio))} key={i} preload="metadata">
            <source src={`/sounds/${filename}.mp3`} type="audio/mpeg" />
          </audio>
        </>
      )
    })
  )
}
