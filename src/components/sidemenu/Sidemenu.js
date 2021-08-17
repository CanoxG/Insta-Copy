import React from "react";
import "./Sidemenu.css";
import AvatarCard from "../avatar-card/AvatarCard";
import Button from "../buttoms/Buttom";
import Suggestion from "../suggestions/Suggestion";
import Scard from "../suggestion-card/Scard";

export default function Sidemenu({
  style = "suggestionsText",
  position = "textAlign",
  color = "blue",
}) {
  return (
    <div className="sideMenu">
      <Suggestion>
        <AvatarCard />
      </Suggestion>
      <Suggestion style={style} position={position}>
        Suggestions For You
        <Button>See all</Button>
      </Suggestion>
      <Suggestion>
        <Scard />
        <Button color={color}>Follow</Button>
      </Suggestion>
      <Suggestion>
        <Scard />
        <Button color={color}>Follow</Button>
      </Suggestion>
      <Suggestion>
        <Scard />
        <Button color={color}>Follow</Button>
      </Suggestion>
    </div>
  );
}
