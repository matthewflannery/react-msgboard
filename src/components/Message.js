import React from 'react';

const Message = ({ children, likes, onNewLike, onRemove }) => {
  return (
    <li>
      {children}
      <i onClick={() => onRemove()} className="fa fa-trash pull-right delete"></i>
      <i onClick={() => likes > 0 && onNewLike(false)} className="fa fa-thumbs-down pull-right"></i>
      <i onClick={() => onNewLike(true)} className="fa fa-thumbs-up pull-right"></i>
      <div className="pull-right">{likes}</div>
    </li>
  )
};

export default Message;
