import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useIsTogether, CroquetReact } from 'react-together'

const { useSessionParams } = CroquetReact

export default function LoginPage({ addName }: { addName: (a: string) => void }) {
  const navigate = useNavigate()

  const [nameState, setName] = useState('')

  let redirect = '/session/create'

  // check session connection
  redirect = '/restaurants'

  // const isTogether = useIsTogether()
  const { name, password } = useSessionParams()
  const isTogether = !!(name && password)

  if (!isTogether) {
    navigate('/session/create')
  }

  return (
    <div className='flex align-center justify-center items-center h-full w-full'>
      <div className='card bg-base-200  w-full h-fit md:w-[600px] mt-24 md:shadow-xl'>
        <div className='card-body items-center'>
          <h1 className='card-title w-full justify-center'>Welcome to</h1>
          <figure>
            <img src='https://media.discordapp.net/attachments/1304748717076774912/1304857526164131961/Untitled.png?ex=67323c45&is=6730eac5&hm=06886976f4b03a304d2c6c67cd4a7ca67b852e5f94ff4adda27cbbac63816921&=&format=webp&quality=lossless' />
          </figure>
          <label className='input input-bordered md:w-[50%] flex items-center gap-2'>
            Name
            <input type='text' className='grow' placeholder='Type your name' value={nameState} onChange={(e) => setName(e.target.value)} />
          </label>
          <div className='card-actions justify-end'>
            <button
              className='btn btn-primary w-full'
              onClick={() => {
                if (nameState != '') {
                  addName(nameState)
                  navigate(redirect)
                }
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
