import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed(props) {
  console.log(props.userProfile)
  console.log(props.tweets)
  return (
    <div className="col feed">
      {/* UPDATE TWEET BOX PROPS HERE */}
      <TweetBox tweetText={props.tweetText} setTweetText={props.setTweetText} setTweets={props.setTweets} tweets={props.tweets} userProfile={props.userProfile}/>

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
        props.tweets.map((tweet, idx) => {
          return <Tweet tweet={tweet} userProfile={props.userProfile} key={idx}/>
        })
      }</div>
    </div>
  )
}
