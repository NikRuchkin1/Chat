import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import readed from '../../assets/img/readed.svg';
import noReaded from '../../assets/img/noreaded.svg';

import './Message.scss';

function Message({ avatar, text, user, date, isMe, isReaded, attachments, isTyping }) {
  return (
    <div
      className={classNames('message', {
        'message--isme': isMe,
        'message--is-typing': isTyping,
      })}>
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className="message__content">
        <div className="message__boxBubble">
          <div className="message__bubble">
            {text && <p className="message__text">{text}</p>}
            {isTyping && (
              <div className="message__typing">
                <span className=""></span>
                <span className=""></span>
                <span className=""></span>
              </div>
            )}
          </div>
          {isMe && isReaded ? (
            <img src={readed} className="message__icon-readed" alt="Message read" />
          ) : (
            <img src={noReaded} className="message__icon-readed" alt="Message no read" />
          )}
        </div>
        <div className="message__attachments">
          {attachments &&
            attachments.map((item) => (
              <div className="message__attachments-item">
                <img src={item.url} alt={item.filename} />
              </div>
            ))}
        </div>
        {date && (
          <span className="message__date">
            {
              //3 lesson 50 min
              // distanceInWordsToNow(date)
              date
            }
          </span>
        )}
      </div>
    </div>
  );
}

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  user: PropTypes.object,
  text: PropTypes.string,
  date: PropTypes.string,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
};

export default Message;
