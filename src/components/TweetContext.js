import React, { useState } from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfRetweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const date = moment().format("h:mm a - MMM Do, YYYY");

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        date: date,
        numOfLikes: numOfLikes,
        numOfRetweets: numOfRetweets,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
