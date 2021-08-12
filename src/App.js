import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ContentFlow from "./components/content-flow/ContentFlow";
import AvatarList from "./components/avatar-list/AvatarList";
import AvatarProfile from "./components/avatar-profile/AvatarProfile";
import Content from './components/content/Content'
import Sidemenu from "./components/sidemenu/Sidemenu";


function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <ContentFlow>
          <AvatarList>
            {Array.from({ length: 20 }, (_, i) => <AvatarProfile key={i} />)}
          </AvatarList>
          <Content />
          <Content />
          <Sidemenu>
            Side menu
          </Sidemenu>
        </ContentFlow>
      </Layout>
    </>
  );
}

export default App;
