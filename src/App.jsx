import "./App.css";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Video from "./components/video";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Helmet>
        <title>YouTube_Koo7</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Container>
        <Header></Header>
        <Sidebar></Sidebar>
        <Video></Video>
      </Container>
    </>
  );
}

export default App;
