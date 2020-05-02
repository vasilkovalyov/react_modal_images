import React from 'react'
import '../Post/Post.scss'


export default function UserMainInfo(props) {
    const [name, img, instaLink, instaUserName ] = [
        props.user.name, 
        props.user.profile_image[props.sizeImg], 
        props.user.links.html, 
        props.user.instagram_username];

    const instagramLink = props.instaLink ? <a href={instaLink} target="_blank" className="post__user-instalink">@{instaUserName}</a> : null;
    
    return (
        <div className="post__user-info">
            <a href={instaLink} className={`post__user-img post__user-img-${props.sizeImg}`}>
                <img src={img} alt={name} />
            </a>
            <div className="post__user-description">
                <a href={instaLink} className="post__user-name" onMouseEnter={props.onHoverIn}>{name}</a>
                { instagramLink }
            </div>
        </div>
    )
}