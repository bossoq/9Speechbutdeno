import React from 'react'
import SpeechButton from '~/components/SpeechButton.tsx'
import "https://esm.sh/tailwindcss/dist/tailwind.min.css"

export default function Home() {
  interface IData {
    label: string,
    filename: string
  }
  const data: IData[] = [
    { label: "สวัสดีครับ", filename: "sawatdeekrub" },
    { label: "ท่านสมาชิก", filename: "02-thansamachik" },
  ]
  return (
    <div className="page">
      <head>
        <title>9 Speech</title>
      </head>
      <header className="flex flex-col">
        <h1 className="flex justify-center text-6xl mb-8">9 Speech</h1>
        <p className="flex justify-center text-base">(ตอนนี้ยังไม่มีเสียงท่านว่าที่ รมต. ใครก็ได้อัดแล้วส่งให้หน่อยจ้า)</p>
      </header>
      <div className="flex justify-center">
        <SpeechButton {...data} />
      </div>
    </div>
  )
}
