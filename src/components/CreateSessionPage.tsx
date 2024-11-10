import { useNavigate } from 'react-router-dom'
import qrcode from 'qrcode-generator'
import { useEffect } from 'react'
import { useCreateRandomSession } from 'react-together'
import { useJoinUrl } from 'react-together'
import { getJoinUrl } from 'react-together/dist/utils'

export default function CreateSessionPage({ nameState, setNameState }: { nameState: string; setNameState: (a: string) => void }) {
  const navigate = useNavigate()

  const random = `FNS-${Math.floor(Math.random() * 1000000)}`
  const url = new URL(window.location.protocol + '//' + window.location.host)

  const joinUrl = getJoinUrl(url, random, random)

  const link = joinUrl.href

  useEffect(() => {
    // Code to run after component has loaded

    var qr = qrcode(0, 'M')

    qr.addData(link)
    qr.make()
    const qrel = document.getElementById('qrcode')

    qrel.innerHTML = qr.createImgTag(7, 0)
  }, [])

  return (
    <div className='flex align-center justify-center items-center h-full'>
      <div className='card bg-base-200  w-full h-fit md:w-[600px] mt-24 md:shadow-xl'>
        <div className='card-body items-center'>
          <h1 className='card-title w-full justify-center'>Start a session</h1>
          <figure>
            <img src='https://media.discordapp.net/attachments/1304748717076774912/1304857526164131961/Untitled.png?ex=6730eac5&is=672f9945&hm=2992ee4439321828261ed3706fc179d7772836c262020fdd1711e418f320bd0f&=&format=webp&quality=lossless' />
          </figure>

          <div className='my-10 flex flex-col items-center justify-center gap-2'>
            <div className='p-4 rounded-xl shadow-md bg-white' id='qrcode'></div>
            <a className='link link-primary text-center' href={link}>
              {link}
            </a>
          </div>

          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary w-full'
              onClick={() => {
                window.location.href = link
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
