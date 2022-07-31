const Tweet = () => {
  return (
    <div class=" border-b border-gray-600 p-4">
      <div class="flex gap-2">
        <div>
          <div class="w-14 h-14">
            <img class="rounded-full" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div class="flex flex-col">
          <div class="pb-2 flex gap-2">
            <a class="font-bold text-primary-content">Nickname</a>
            <a>@nickname</a>
            <p>1h</p>
          </div>
          <div>
            This is the dummy tweet, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis,
            dolores a? Iusto.
          </div>
          <TweetBottomBar />
        </div>
      </div>
    </div>
  )
}

const TweetBottomBar = () => {
  return (
    <div class="flex gap-4 mt-2">
      <a>Reply</a>
      <a>Retweet</a>
      <a>Like</a>
      <a>Share</a>
    </div>
  )
}

export default Tweet
