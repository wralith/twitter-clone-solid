import { HiOutlineChatAlt, HiOutlineHeart, HiOutlineShare } from "solid-icons/hi"
import { TiArrowLoop } from "solid-icons/ti"

const TweetBottomBar = () => {
  return (
    <div class="flex gap-4 mt-2">
      <a class="group flex items-center gap-3 hover:text-blue-600 rounded-full p-1">
        <div class="group-hover:bg-blue-600/20 rounded-full p-1 ">
          <HiOutlineChatAlt />
        </div>
        <small>10</small>
      </a>
      <a class="group flex items-center gap-2 hover:text-green-500">
        <div class="group-hover:bg-green-500/20 rounded-full p-1 ">
          <TiArrowLoop />
        </div>
        <small>4</small>
      </a>
      <a class="group flex items-center gap-2 hover:text-red-400">
        <div class="group-hover:bg-red-400/20 rounded-full p-1 ">
          <HiOutlineHeart />
        </div>
        <small>47</small>
      </a>
      <a class="group flex items-center gap-3 hover:text-blue-600 rounded-full p-1 pl-6">
        <div class="group-hover:bg-blue-600/20 rounded-full p-1 ">
          <HiOutlineShare />
        </div>
      </a>
    </div>
  )
}

export default TweetBottomBar
