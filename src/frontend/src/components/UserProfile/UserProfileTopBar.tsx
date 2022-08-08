import { Link } from "@solidjs/router"
import { HiOutlineArrowLeft } from "solid-icons/hi"

const UserProfileTopBar = (props: any) => {
  return (
    <div class="z-90 flex justify-start gap-2 items-center w-full top-0 backdrop-blur-md sticky p-2 z-90">
      <h1 class="text-lg text-base-content p-2 z-90 hover:bg-gray-700 rounded-full">
        <Link href="/home">
          <HiOutlineArrowLeft />
        </Link>
      </h1>
      <div class="flex flex-col">
        <h2 class="text-lg font-bold">{props.username}</h2>
        <small>{props.tweets} Tweets</small>
      </div>
    </div>
  )
}

export default UserProfileTopBar
