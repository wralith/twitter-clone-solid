import TweetList from "../Tweets/TweetList"
import ShowNewTweets from "./ShowNewTweets"
import TopBar from "./TopBar"
import TweetBar from "./TweetBar"


// TODO: Fix margin left
const MainViewLayout = () => {
  return (
    <div class="ml-[6.1rem] bg-base-300 w-full">
      <TopBar />
      <TweetBar />
      <ShowNewTweets />
      <TweetList />
    </div>
  )
}

export default MainViewLayout
