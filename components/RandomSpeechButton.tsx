import React, { useRef } from "react"

export default function RandomSpeechButton (data: { label: string, filename: string }): Element {
    interface IData {
        label: string,
        filename: string
    }
    const dataObj: IData[] = Object.values(data)
    const soundRef = useRef<HTMLAudioElement[]>([])
    const play = () => {
        const index = Math.floor(Math.random() * dataObj.length)
        const randomFilename = dataObj[index].filename
        if (soundRef.current[0]) {
            soundRef.current[0].src = `/sounds/${randomFilename}.mp3`
            soundRef.current[0].pause()
            soundRef.current[0].currentTime = 0
            soundRef.current[0].play()
        }
    }
    console.log(dataObj)
    return (
        <>
          <button
            className="button is-danger is-medium has-text-weight-bold m-3"
            onClick={() => play()}
          >
            Random
          </button>
          <audio ref={audio => (audio && soundRef.current.push(audio))} preload="metadata">
            <source type="audio/mpeg" />
          </audio>
        </>
    )
}