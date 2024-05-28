const HeaderComponent = ({ title, subtitle,emoji }) => {
    return (
        <div className="header-container">
            <p className="logo">React Session</p>
            <p className="title">{ title } <span className="wave-sign">{ emoji }</span></p>
            <p className="subtitle">{ subtitle }</p>
        </div>
    )
}
export default HeaderComponent;