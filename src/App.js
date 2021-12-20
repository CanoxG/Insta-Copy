import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Layout from "./components/layout/Layout";
import ContentFlow from "./components/content-flow/ContentFlow";
import { HorizontalAvatar } from "./components/horizontal-avatar-list/HorizontalAvatar";
import Sidemenu from "./components/sidemenu/Sidemenu";
import { CenterPostList } from "./components/center-post-list/Centnpx erPostList";

function App() {



  return (
    <>
      <Navbar />
      <Layout>
        <ContentFlow>
          <HorizontalAvatar />
          <CenterPostList />
        </ContentFlow>
        <Sidemenu />
      </Layout>
    </>
  );
}

export default App;
