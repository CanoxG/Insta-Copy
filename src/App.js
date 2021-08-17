import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ContentFlow from "./components/content-flow/ContentFlow";
import AvatarList from "./components/avatar-list/AvatarList";
import AvatarProfile from "./components/avatar-profile/AvatarProfile";
import Content from "./components/content/Content";
import Sidemenu from "./components/sidemenu/Sidemenu";

function App() {
  const [avatarState, setAvatarState] = React.useState([]);
  const nameRef = React.useRef("");

  React.useEffect(() => {
    setTimeout(() => {
      setAvatarState([
        { name: "tan", src: "https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg" },
        { name: "can", src: "https://images4.alphacoders.com/273/273904.jpg" },
      ]);
    }, 2000);
  }, []);

  const onSubmit = () => {
    setAvatarState([...avatarState, { name: nameRef.current.value }]);
    nameRef.current.value = "";
  };

  return (
    <>
      <Navbar />
      <Layout>
        <ContentFlow>
          <AvatarList>
            {avatarState.map(({ name, src }, i) => (
              <AvatarProfile name={name} src={src} key={i} />
            ))}
          </AvatarList>
          <input type="text" ref={nameRef} />
          <button onClick={onSubmit}>add</button>
          <Content />
          <Content />
        </ContentFlow>
        <Sidemenu />
      </Layout>
    </>
  );
}

export default App;
