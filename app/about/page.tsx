import Image from 'next/image'

import About from '@/components/organism/About'

export default function Home() {
  return (
    <>
    <main className="font-josefine max-h-[60vh] sm:max-h-[70vh] md:max-h-[85vh] xl:max-h-[100vh] w-full">
      
    <About />

    </main>
    </>
  )
}
