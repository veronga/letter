import React, { Fragment } from "react";
import { connect } from "react-redux";
import SendMessage from "../components/SendMessage";

class LetterList extends React.Component {
  render() {
    const { letters, delMessageAction } = this.props;

    return (
      <Fragment>
        {letters.map(item => {
          return (
            <SendMessage
              date={item.date}
              title={item.title}
              status={item.status}
              delMessageAction={delMessageAction}
            />
          );
        })}
      </Fragment>
    );
  }
}

function mapStateToProps(store) {
  return { letters: store.letters };
}

export default connect(mapStateToProps)(LetterList);
