import TweetList from "../Tweets/TweetList"
import ShowNewTweets from "./ShowNewTweets"
import TopBar from "./TopBar"
import TweetBar from "./TweetBar"

const MainViewLayout = () => {
  return (
    <div class="ml-[4.1rem] bg-base-300 w-full">
      <TopBar />
      <TweetBar />
      <ShowNewTweets />
      <TweetList />
    </div>
  )
}

export default MainViewLayout
