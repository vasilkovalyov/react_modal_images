import React from 'react'
import UserMainInfo from './UserMainInfo'
import UserImages from '../UserData/UserImages'
import '../Post/Post.scss'


export default function UserProfileInfo(props) {
    const {user, sizeImg, instaLink} = props;
    
    return (
        <div className="post__user-profile-info" >
            <UserMainInfo user={user} sizeImg={sizeImg} instaLink={instaLink}/>
            <UserImages photosUrl={user.links.photos} countImages={3} onClickImagesUser={props.onClickImagesUser}/>
        </div>
    )
}