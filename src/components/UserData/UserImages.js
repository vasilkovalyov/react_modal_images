import React from 'react'

export default function UserImages(props) {
    return (
        <div className="post__user-photo-list">
            {
                props.images.map((item,i) => <div className="post__user-photo-item" key={i} onClick={props.onClickImagesUser}>
                    <img src={item.urls.regular} alt={i}/>
                </div>)
            }
        </div>
    )
}