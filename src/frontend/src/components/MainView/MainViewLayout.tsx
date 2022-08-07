import TweetList from "../Tweets/TweetList"
import ShowNewTweets from "./ShowNewTweets"
import TopBar from "./TopBar"
import TweetBar from "./TweetBar"


const MainViewLayout = () => {
  return (
    <div class="bg-base-300">
      <TopBar />
      <TweetBar />
      <ShowNewTweets />
      <TweetList />
    </div>
  )
}

export default MainViewLayout
