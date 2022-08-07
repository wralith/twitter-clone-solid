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
import { NavLink, Router } from "@solidjs/router"
/*@once*/
const LeftSidebar = () => {
  return (
    <div class="flex xl:justify-end m-auto lg:pr-10">
        <nav class="md:w-1/2">
          <NavLink href="/home">
            <Icon icon={<BsTwitter size={30} />} link="/home" />
          </NavLink>
          <NavLink href="/home" activeClass="nav-active">
            <Icon icon={<HiSolidHome size={30} />} text="Home" />
          </NavLink>
          <Icon icon={<HiOutlineSearch size={30} />} text="Explore" />
          <Icon icon={<HiOutlineBell size={30} />} text="Notifications" />
          <Icon icon={<HiOutlineMail size={30} />} text="Messages" />
          <Icon icon={<HiOutlineBookmark size={30} />} text="Bookmarks" />
          <Icon icon={<HiOutlineClipboardList size={30} />} text="Lists" />
          <NavLink href="/users/1" activeClass="nav-active">
            <Icon icon={<HiOutlineUser size={30} />} text="Profile" />
          </NavLink>
          <Icon icon={<HiOutlineDotsCircleHorizontal size={30} />} text="More" />
          <SendTweetIcon icon={<FiFeather size={30} />} text="Tweet" />
        </nav>
    </div>
  )
}

const Icon: Component<any> = ({ icon, text, link }) => {
  return (
    <div class="w-fit h-12 m-2 px-4 py-1 justify-center items-center flex rounded-full hover:bg-gray-700 cursor-pointer gap-3">
      {icon}
      <p class="text-xl hidden xl:flex">{text}</p>
    </div>
  )
}

const SendTweetIcon: Component<any> = ({ icon, text }) => {
  return (
    <div class="text-white bg-blue-400 w-fit p-4 m-2 mt-6 mb-4 justify-center items-center flex rounded-full hover:bg-blue-500 cursor-pointer gap-3 xl:w-full">
      {icon}
      <p class="text-xl hidden xl:flex">{text}</p>
    </div>
  )
}

export default LeftSidebar
