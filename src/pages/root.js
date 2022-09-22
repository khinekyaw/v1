import React from "react";
import { Outlet } from "react-router-dom";

import Layout from "../components/layout";
import Header from "../components/header";
import Nav from "../components/nav";
import Background from "../components/background";

export default function Root(props) {
  return (
    <Layout>
      <Header />
      <Nav />
      <Outlet />
      <Background />
    </Layout>
  );
}
