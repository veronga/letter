import React from "react";
import "./App.css";
import Logo from "./components/Logo";
import Text from "./components/Text";
import InputEmail from "./components/InputEmail";
import InputTheme from "./components/InputTheme";
import InputMessage from "./components/InputMessage";
import ButtonAttach from "./components/ButtonAttach";
import Button from "./components/Button";
import ContainerShipped from "./components/ContainerShipped";
import SendMessage from "./components/SendMessage";
import LetterList from "./containers/LetterList";

function App() {
  return (
    <div className="contener">
      <Logo />
      <div className="main-box">
        <p className="text-mess">Отправлялка сообщений</p>
        <Text title="От кого" />
        <InputEmail />
        <Text title="Кому" />
        <InputEmail />
        <Text title="Тема письма" />
        <InputTheme />
        <Text title="Сообщение" />
        <InputMessage />
        <ButtonAttach />
        <Button />
      </div>
      <p className="send-message">Отправленные сообщения</p>
      <ContainerShipped />
      {/* <SendMessage /> */}
      <LetterList />
    </div>
  );
}

export default App;
