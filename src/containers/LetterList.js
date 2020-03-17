import React, { Fragment } from "react";
import { connect } from "react-redux";
import SendMessage from "../components/SendMessage";

import "./style.css";

class LetterList extends React.Component {
  render() {
    const { letters, delMessageAction } = this.props;
    console.log("TCL: LetterList -> render -> letters", letters);
    return (
      <Fragment>
        {letters.length > 0 ? (
          letters.map(item => {
            return (
              <SendMessage
                date={item.date}
                title={item.title}
                status={item.status}
                delMessageAction={delMessageAction}
              />
            );
          })
        ) : (
          <span className="no-mess">Нет отправленых сообщений</span>
        )}
      </Fragment>
    );
  }
}

function mapStateToProps(store) {
  return { letters: store.letters };
}

export default connect(mapStateToProps)(LetterList);
