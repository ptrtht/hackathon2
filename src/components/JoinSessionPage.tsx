import { useNavigate } from 'react-router-dom'

export default function CreateSessionPage({ nameState, setNameState }: { nameState: string; setNameState: (a: string) => void }) {
  return (
    <div className='flex align-center justify-center items-center h-full'>
      <div className='card bg-base-200  w-full h-fit md:w-[600px] mt-24 md:shadow-xl'>
        <div className='card-body items-center'>
          <h1 className='card-title w-full justify-center'>Joining Session...</h1>
          <span className='loading loading-primary'></span>
        </div>
      </div>
    </div>
  )
}
