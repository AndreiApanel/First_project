import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                Ava+discription
            </div>
        </div>
    )
}

export default ProfileInfo;