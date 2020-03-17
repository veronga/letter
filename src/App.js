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
import { delMessage } from "./actions";
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
      message: "",
      error: ""
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
    const {
      nameSender,
      nameRecipient,
      emailSender,
      emailRecipient,
      theme
    } = this.state;
    if (nameSender === "") {
      this.setState({ error: "Пожалуйста введите имя" });
    } else if (emailSender === "") {
      this.setState({ error: "Email не может быть пустым" });
    } else if (nameRecipient === "") {
      this.setState({ error: "Пожалуйста введите имя получателя" });
    } else if (emailRecipient === "") {
      this.setState({ error: "Email получателя не может быть пустым" });
    } else if (theme === "") {
      this.setState({ error: "Введите тему письма" });
    } else {
      this.props.sendMessageAction({
        date: new Date().toLocaleDateString(),
        title: this.state.theme,
        status: "done"
      });
      this.setState({
        nameSender: "",
        nameRecipient: "",
        emailSender: "",
        emailRecipient: "",
        theme: "",
        message: "",
        error: ""
      });
    }
  };

  render() {
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
          <span className="text-error">{this.state.error}</span>
        </div>
        <span className="send-message">Отправленные сообщения</span>
        <ContainerShipped />
        <LetterList delMessageAction={this.props.delMessageAction} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sendMessageAction: bindActionCreators(sendMessage, dispatch),
    delMessageAction: bindActionCreators(delMessage, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
