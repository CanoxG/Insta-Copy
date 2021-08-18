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

  const [contentState, setContentState] = React.useState([]);

  React.useEffect(() => {
    setContentState( [
      { name: 'cguven', location: 'Ankara, Turkey', src: 'https://images7.alphacoders.com/977/977613.jpg' },
      { name: 'cguven', location: 'Ankara, Turkey', src: 'https://images2.alphacoders.com/573/573835.jpg' },
      { name: 'cguven', location: 'Space, Somewhere', src: 'https://images4.alphacoders.com/742/742530.png' },
      { name: 'hsolo', location: 'Somewhere, Space', src: 'https://images7.alphacoders.com/630/630579.jpg' }
    ])
  })

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
          {contentState.map(({name, src, location }, i) =>
          <Content  name={name} src={src} location={location}  key={i}/>
          )}
        </ContentFlow>
        <Sidemenu />
      </Layout>
    </>
  );
}

export default App;
