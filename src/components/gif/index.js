const Gif = ({url, title}) => {
    return (
        <div className="gif">
            <img src={url} alt={title} />
            {/* <p>{title}</p> */}
        </div>
    )
}

export default Gif