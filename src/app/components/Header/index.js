import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import data from './data';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log('Will Mount');
  }

  componentDidMount() {
    console.log('Did Mount');
    this.interval = setInterval(
      () => this.setState(state => ({ count: state.count + 1 })),
      1000
    );
  }

  componentWillReceiveProps(nextProps) {
    console.log('Will receive, this.props', this.props);
    console.log('Will receive, next', nextProps);
  }

  // shouldComponentUpdate(nextProps) {
  //   console.log('shouldComponentUpdate next', nextProps);
  //   if (nextProps.language === 'kr') {
  //     return false;
  //   }

  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('Will Update', nextProps, nextState);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props, state);

    return { animate: 'in' };
  }

  componentDidUpdate(props, state, snapshot) {
    console.log('componentDidUpdate', props, state, snapshot);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  getSnapshotBeforeUpdate(prevrops, prevState) {
    console.log('getSnapshotBeforeUpdate nextProps', prevrops);
    console.log('getSnapshotBeforeUpdate nextState', prevState);

    return 'Labas';
  }

  render() {
    // throw Error('You can not see Header');
    console.log('Render');

    const { count } = this.state;
    const { language, onLanguage } = this.props;
    const { contacts, picture, name, summary } = data[language];

    return (
      <header className="Header">
        <h1>
          {name}
          {count}
        </h1>
        <hr />
        <p className="Header--contact">
          {`${contacts.phone.label} ${contacts.phone.value}`}
        </p>
        <p className="Header--contact">
          {`${contacts.email.label} `}
          <a
            href={`mailto:${contacts.email.value}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.email.value}
          </a>
        </p>
        <p className="Header--summary">{summary}</p>
        <img
          className="Header--profile-picture"
          alt={picture.alt}
          src={picture.src}
        />
        <select
          value={language}
          onChange={e => onLanguage(e.target.value)}
          className="Header--language-select"
        >
          <option value="en">English</option>
          <option value="kr">한국어</option>
        </select>
      </header>
    );
  }
}

Header.propTypes = {
  language: PropTypes.oneOf(['en', 'kr']),
  onLanguage: PropTypes.func.isRequired,
};

Header.defaultProps = {
  language: 'en',
};

export default Header;
