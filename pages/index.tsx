import React from 'react'
import SpeechButton from '~/components/SpeechButton.tsx'
import RandomSpeechButton from '~/components/RandomSpeechButton.tsx'
import '~/public/styles/global.css'
import 'bulma'

export default function Home() {
  interface IData {
    label: string,
    filename: string
  }
  const data: IData[] = [
    { label: "สวัสดีครับทุกคน ผมอาร์มเองนะครับ", filename: "helloeveryone_iam_arm" },
    { label: "ไอ้เห้ลูเซ่อ", filename: "loser" },
    { label: "เอาไปเลยศูนย์นะ", filename: "q00point_short" },
    { label: "เอาไปเลยศูนย์นะ คือเมิง เหมือนกับจับ ปูใส่กระด้งมาก นะคับ", filename: "q00point" },
    { label: "สิบ สิบเต็มสิบ ติ้ง ♪", filename: "q10point" },
    { label: "กระจอก", filename: "suck" },
    { label: "แม่ง ค่ดโง่ววววว", filename: "verystupid" },
    { label: "อิริชัยมาเสะ", filename: "irichaimase" },
    { label: "ไร้สาระ", filename: "nonsense" },
    { label: "บ้านของเรา", filename: "our house" },
    { label: "เตาย่าง>ควัน>สัญญาณไฟ>อพยพทั้งตึก", filename: "bbq = evacuate the whole building" },
    { label: "สปอนเซอร์นะครับ", filename: "sponsor-na-krub" },
  ]
  return (
    <div className="container is-fullscreen p-6">
      <div className="columns">
        <div className="column is-full has-text-centered">
          <h1 className="title is-1 has-text-weight-bold has-text-primary-light is-spaced">9 Speech</h1>
          <p className="subtitle is-6 has-text-primary-light">(ใครมีเสียงเด็ดๆ ของท่านว่าที่ รมต. อัดมาเป็น .mp3 แล้วส่งให้หน่อยจ้า)</p>
        </div>
      </div>
      <div className="columns">
        <div className="column is-full has-text-centered">
          <SpeechButton {...data} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-full has-text-centered">
          <RandomSpeechButton {...data} />
        </div>
      </div>
    </div>
  )
}
