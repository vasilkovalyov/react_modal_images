import React from 'react'

import './UserProfileModal.scss'

export default function UserModalProfile(props) {
    const user = props.user;
    console.log(user);

    return (
        <div className="user-profile">
            <div className="user-profile__image">
                <img src={user.profile_image.large} alt={user.name}/>
            </div>
            <a href={user.links.html} className="user-profile__name">{user.name}</a>
            <div className="user-profile__top-info">
                <div className="user-profile__counter">
                    <i className="fas fa-heart"></i>
                    <span className="user-profile__count">{user.total_likes}</span>
                </div>
                <div className="user-profile__counter">
                    <i className="fas fa-camera"></i>
                    <span className="user-profile__count">{user.total_photos}</span>
                </div>
            </div>
            <div className="user-profile__social">
                <ul className="user-profile__social-list">
                    {
                        user.instagram_username ? (
                            <li className="user-profile__social-item">
                                <i className="fab fa-instagram user-profile__social-icon"></i>
                                <a href={`https://www.instagram.com/${user.instagram_username}`} 
                                    target="_blank" 
                                    className="user-profile__social-link">
                                        {user.instagram_username}
                                </a>
                            </li>
                        ) : null
                    }
                    {
                        user.twitter_username ? (
                            <li className="social-list__item">
                                <i className="fab fa-twitter user-profile__social-icon"></i>
                                <a href={`https://twitter.com/${user.twitter_username}`} 
                                    target="_blank" 
                                    className="user-profile__social-link">
                                        {user.twitter_username}
                                </a>
                            </li>
                        ) : null
                    }
                </ul>
            </div>
            <span className="user-profile__bio">City - {user.location}</span>
        </div>
    )
}