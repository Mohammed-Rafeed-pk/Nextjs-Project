// app/page.tsx
import PopupButton from '../components/PopupButton'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <PopupButton />
      <Link legacyBehavior href="/creative">
        <a className="mt-4 p-2 bg-green-500 text-white rounded">
          Go to Creative Page
        </a>
      </Link>
    </div>
  )
}
