import React from 'react';
import PropTypes from 'prop-types';
import './Features.css';
import Feature from '../Feature/Feature';
import moneySrc from '../../img/icon-money.png';
import chatSrc from '../../img/icon-chat.png';
import securitySrc from '../../img/icon-security.png';

const Features = () => {
  const titles = {
    chat: "You are our #1 priority",
    money: "More savings means higher rates",
    security: "Security you can trust"
  }

  const paragraphs = {
    chat: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
    money: "The more you save with us, the higher your interest rate will be!",
    security: ""
  }

  return (
    <div className="Features" data-testid="Features">
      <Feature src={chatSrc} title={titles.chat} paragraph={paragraphs.chat} />
      <Feature src={moneySrc} title={titles.money} paragraph={paragraphs.money} />
      <Feature src={securitySrc} title={titles.security} paragraph={paragraphs.security} />
    </div>
  );
}

Features.propTypes = {};

Features.defaultProps = {};

export default Features;
