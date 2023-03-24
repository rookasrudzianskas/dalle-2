import { Inter } from 'next/font/google'
import Images from '../components/Images'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="mx-0 md:10">
      <Images />
    </div>
  )
}
