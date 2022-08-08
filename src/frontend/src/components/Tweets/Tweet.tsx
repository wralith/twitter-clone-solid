import TweetBottomBar from "./TweetBottomBar"

const Tweet = () => {
  return (
    <div class="border-b border-gray-600 p-4 hover:bg-base-100">
      <div class="flex gap-2 w-full">
        <div>
          <div class="w-14 h-14 mr-2">
            <img class="rounded-full" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="pb-2 flex gap-2">
            <a class="font-bold text-primary">Nickname</a>
            <a class="opacity-60">@nickname</a>
            <p class="opacity-40">1h</p>
          </div>
          <p class="text-left">
            This is the dummy tweet, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dolores a? Iusto.
          </p>
          <TweetBottomBar />
        </div>
      </div>
    </div>
  )
}

export default Tweet
