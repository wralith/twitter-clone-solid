import { Link } from "@solidjs/router"

const TopBar = () => {
  return (
    <div class="flex justify-between w-full top-0 backdrop-blur-md sticky p-4 z-90">
      <h1 class="text-lg font-bold text-base-content z-90">
        <Link href="/home">Home</Link>
      </h1>
      <a class="hover:bg-gray-700 rounded-full p-2">✨</a>
    </div>
  )
}

export default TopBar
