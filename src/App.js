import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./App.css";
import Logo from "./components/Logo";
import Text from "./components/Text";
import Button from "./components/Button";
import ContainerShipped from "./components/ContainerShipped";
import LetterList from "./containers/LetterList";
import { sendMessage } from "./actions";
import Input from "./components/Input";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameSender: "",
      nameRecipient: "",
      emailSender: "",
      emailRecipient: "",
      theme: "",
      message: ""
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  sendingMessage = () => {
    this.props.sendMessageAction({
      date: new Date().toLocaleString(),
      title: this.state.theme,
      status: "done"
    });
  };

  render() {
    // console.log(this.sendingMessage);
    return (
      <div className="contener">
        <Logo />
        <div className="main-box">
          <p className="text-mess">Отправлялка сообщений</p>
          <Text title="От кого" />
          <div className="association-input">
            <Input
              placeholder="Имя"
              inputStyle="input-cont-left"
              value={this.state.nameSender}
              onChange={this.handleInputChange}
              name="nameSender"
            />
            <Input
              placeholder="Email"
              inputStyle="input-cont-right"
              value={this.state.emailSender}
              onChange={this.handleInputChange}
              name="emailSender"
            />
          </div>
          <Text title="Кому" />
          <div className="association-input">
            <Input
              placeholder="Имя"
              inputStyle="input-cont-left"
              value={this.state.nameRecipient}
              onChange={this.handleInputChange}
              name="nameRecipient"
            />
            <Input
              placeholder="Email"
              inputStyle="input-cont-right"
              value={this.state.emailRecipient}
              onChange={this.handleInputChange}
              name="emailRecipient"
            />
          </div>
          <Text title="Тема письма" />
          <Input
            inputStyle="input-box"
            value={this.state.theme}
            onChange={this.handleInputChange}
            name="theme"
          />

          <Text title="Сообщение" />
          <Input
            inputStyle="message-box"
            value={this.state.message}
            onChange={this.handleInputChange}
            name="message"
            type="textarea"
          />
          <Button onClick={this.sendingMessage} />
        </div>
        <p className="send-message">Отправленные сообщения</p>
        <ContainerShipped />
        {/* <SendMessage /> */}
        <LetterList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessageAction: bindActionCreators(sendMessage, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
