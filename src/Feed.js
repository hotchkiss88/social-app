import React, { useEffect, useState } from "react";
import axios from "axios";
import { List } from "./styles-feed/List.styled";
import { UserFeed } from "./styles-feed/UserFeed.styled";
import { User } from "./styles-feed/User.styled";
import { Image } from "./styles-feed/Image.styled";
import { Paragraph } from "./styles-feed/Paragraph.styled";

function Feed() {
  const [feeds, setFeeds] = useState([]);

  let axiosData = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  useEffect(() => {
    axios
      .post("https://akademia108.pl/api/social-app/post/latest")
      .then((req) => {
        setFeeds(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const feedsList = feeds.map((key) => {
    return (
      <UserFeed key={key.id}>
        <User>
          <Image src={key.user.avatar_url} alt="user avatar" />
          <Paragraph>{key.user.username.toUpperCase()}</Paragraph>
        </User>
        <Paragraph>{key.content}</Paragraph>
      </UserFeed>
    );
  });
  return <List>{feedsList}</List>;
}

export default Feed;
