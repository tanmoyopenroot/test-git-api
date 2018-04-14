import React from 'react';
import Avatar from 'material-ui/Avatar';
import PropTypes from 'prop-types';
import {ListItem} from 'material-ui/List';

const Card = (props) => {
  const name = props.name;
  const stargazersCount = props.stargazersCount;
  const description = props.description;
  const language = props.language;
  const url = props.url;
  
  const avatarStyle = {
    marginTop: '25px'
  }
  
  return (
    <ListItem
      disabled={true}
      leftAvatar={
        <Avatar
          style={avatarStyle}
          src={url}
        />
      }
    >
      <p><b>Name : </b>{name}</p>
      <p><b>Stars : </b>{stargazersCount}</p>
      <p><b>Description : </b>{description}</p>
      <p><b>Language : </b>{language}</p>
    </ListItem>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  stargazersCount: PropTypes.number,
  description: PropTypes.string,
  language: PropTypes.string,
  url: PropTypes.string
};

export default Card;
