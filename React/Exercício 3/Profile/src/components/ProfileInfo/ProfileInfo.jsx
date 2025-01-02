import styles from "./ProfileInfo.module.css"

const ProfileInfo = ({children}) => {
    return (
        <div className={styles.profileInfo}>
            {children}
        </div>
    )
}

export default ProfileInfo