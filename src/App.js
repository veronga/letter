import React from "react";
import "./App.css";
import Logo from "./components/Logo/index";
import Text from "./components/Text/index";
import InputEmail from "./components/InputEmail/index";
import InputTheme from "./components/InputTheme/index";
import InputMessage from "./components/InputMessage/index";
import ButtonAttach from "./components/ButtonAttach/index";
import Button from "./components/Button/index";

function App() {
  return (
    <div className="contener">
      <Logo />
      <div className="main-box">
        <p className="text-mess">Отправлялка сообщений</p>
        <Text title={"От кого"} />
        <InputEmail />
        <Text title={"Кому"} />
        <InputEmail />
        <Text title={"Тема письма"} />
        <InputTheme />
        <Text title={"Сообщение"} />
        <InputMessage />
        <ButtonAttach />
        <Button />
      </div>
      <p className="send-message">Отправленные сообщения</p>
    </div>
  );
}

export default App;
