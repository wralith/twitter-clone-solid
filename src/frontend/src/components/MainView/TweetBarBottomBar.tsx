import { Component } from "solid-js"
import { BiRegularImageAlt, BiRegularSmile, BiRegularLocationPlus } from "solid-icons/bi"
import { RiDocumentFileGifLine } from "solid-icons/ri"

const TweetBarBottomBar = () => {
  return (
    <div class="flex justify-between py-2 items-center">
      <div class="flex gap-2">
        <TweetBarBottomBarIcons icon={<BiRegularImageAlt size={24} />} />
        <TweetBarBottomBarIcons icon={<RiDocumentFileGifLine size={24} />} />
        <TweetBarBottomBarIcons icon={<BiRegularSmile size={24} />} />
        <TweetBarBottomBarIcons icon={<BiRegularLocationPlus size={24} />} />
      </div>
      <button class="bg-primary rounded-full p-3 py-1">Tweet</button>
    </div>
  )
}

const TweetBarBottomBarIcons: Component<any> = ({ icon }) => {
  return (
    <div class="text-primary text-center rounded-full w-8 h-8 p-1 hover:bg-gray-600">{icon}</div>
  )
}

export default TweetBarBottomBar
