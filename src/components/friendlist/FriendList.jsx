import PropTypes from 'prop-types';
import css from './FriendList.module.css';
const FriendList = ({ friends}) => {
    return (
        <ul className={css.friendList}>
        {friends.map((friend) => (
           <li className={css.item} key={friend.id}>
             <span className={`${css.status} ${friend.isOnline ? css.stGreen : css.stRed}`}></span>
             <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
             <p className={css.name}>{friend.name}</p>
             </li>  
        ))}
            
             </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendList;