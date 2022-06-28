import s from './Header.module.scss'
export function Header() {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><p>SXR</p></div>
                <div className={s.featured}><p>New Featured</p></div>
                <div className={s.explore}><p>Explore</p></div>
                <div className={s.about}><p>About</p></div>
            </div>
            <div>
                <div><p>Search</p></div>
            </div>
            <div className={s.wrapper}>
                <div className={s.twitter}><p>Twitter</p></div>
                <div className={s.scene}><p>Add scene</p></div>
                <div className={s.sine}><p>Sine in</p></div>
            </div>
        </header>
    )
}