import styles from "./Profile.module.css"

const Profile = ({children}) => {
    return (
        <div className={styles.profile}>
            <img src="https://github.com/onebitcode.png" alt="Foto do perfil" />

            {children}
        </div>        
    )
}

export default Profile