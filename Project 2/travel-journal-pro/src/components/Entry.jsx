export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.containerImg.src}
                    alt={props.containerImg.alt}
                />
            </div>
            <div className="info-container">
                <img
                    className="marker"
                    src="images/location.png"
                    alt="Map Marker Icon"
                />
                <span className="country">{props.countryName}</span>
                <a href={props.googleMapLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.infoDate}</p>
                <p className="entry-text">{props.infoText}</p>
            </div>

        </article>
    )
}