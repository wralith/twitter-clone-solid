import { Component } from "solid-js"
import TweetBarBottomBar from "./TweetBarBottomBar"

const TweetBar = () => {
  return (
    <div class=" border-b border-gray-600 p-4 pt-16">
      <div class="flex gap-2">
        <div>
          <div class="w-14 h-14">
            <img class="rounded-full" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div>
          <div class="border-b pb-2 border-gray-600">
            <input type="text" placeholder="What's Happening?" class="input ghost w-full text-xl" />
            <WhoCanReplyDropdown />
          </div>
          <TweetBarBottomBar />
        </div>
      </div>
    </div>
  )
}

const WhoCanReplyDropdown = () => {
  return (
    <div class="dropdown p-2">
      <label tabindex="0" class="p-1 rounded-full btn-ghost text-primary text-sm">
        Everyone Can Reply
      </label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>Everyone</a>
        </li>
        <li>
          <a>People you follow</a>
        </li>
        <li>
          <a>Only People you mention</a>
        </li>
      </ul>
    </div>
  )
}



export default TweetBar
