import type { Component } from "solid-js"
import {
  HiSolidHome,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineMail,
  HiOutlineBookmark,
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineDotsCircleHorizontal
} from "solid-icons/hi"
import { BsTwitter } from "solid-icons/bs"
import { FiFeather } from "solid-icons/fi"

const LeftSidebar = () => {
  return (
    <aside class="fixed bg-base-300 px-3 min-h-full border-r border-gray-600">
      <ul>
        <MainIcon icon={<BsTwitter size={30} />} />
        <Icon icon={<HiSolidHome size={30} />} />
        <Icon icon={<HiOutlineSearch size={30} />} />
        <Icon icon={<HiOutlineBell size={30} />} />
        <Icon icon={<HiOutlineMail size={30} />} />
        <Icon icon={<HiOutlineBookmark size={30} />} />
        <Icon icon={<HiOutlineClipboardList size={30} />} />
        <Icon icon={<HiOutlineUser size={30} />} />
        <Icon icon={<HiOutlineDotsCircleHorizontal size={30} />} />
        <SendTweetIcon icon={<FiFeather size={30} />} />
      </ul>
    </aside>
  )
}

const MainIcon: Component<any> = ({ icon }) => {
  return (
    <li class="text-base-content w-12 h-12 m-2 mb-6 justify-center items-center flex rounded-full hover:bg-gray-700 cursor-pointer">
      {icon}
    </li>
  )
}

const Icon: Component<any> = ({ icon }) => {
  return (
    <li class="text-base-content w-12 h-12 m-2 justify-center items-center flex rounded-full hover:bg-gray-700 cursor-pointer">
      {icon}
    </li>
  )
}

const SendTweetIcon: Component<any> = ({ icon }) => {
  return (
    <li class="text-white bg-blue-400 w-14 h-14 m-2 mt-6 mb-4 justify-center items-center flex rounded-full hover:bg-blue-500 cursor-pointer">
      {icon}
    </li>
  )
}

export default LeftSidebar
