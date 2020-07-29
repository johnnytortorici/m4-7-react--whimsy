import React, { useContext } from "react";
import styled from "styled-components";

import { TweetContext } from "../TweetContext";

import Header from "./Header";
import Stat from "./Stat";
import ActionBar from "./ActionBar";

const Tweet = () => {
  const { tweetContents, date, numOfLikes, numOfRetweets } = useContext(
    TweetContext
  );

  return (
    <Wrapper>
      <Header />
      <TweetContents>{tweetContents}</TweetContents>
      <Timestamp>{date}</Timestamp>
      <Divider />
      <StatsBar>
        <Stat num={numOfRetweets} label="Retweets" />
        <Stat num={numOfLikes} label="Likes" />
      </StatsBar>
      <Divider />
      <ActionBar />
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 580px;
  padding: 16px;
  text-align: left;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
`;

const TweetContents = styled.div`
  font-size: 22px;
  padding: 16px 0;
`;

const Timestamp = styled.div`
  color: rgb(101, 119, 134);
  font-size: 16px;
  padding-bottom: 16px;
`;

const StatsBar = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

export default Tweet;
