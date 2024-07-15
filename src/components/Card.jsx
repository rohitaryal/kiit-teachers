const Card = ({ json }) => {
    return (
        <>
            <div className="card-container">
                {
                    json.map(teacher => {
                        return (
                            <div className="card" key={crypto.randomUUID()}>
                                <div className="user-profile" style={{
                                    backgroundImage: `url(${teacher.profileUrl})`
                                }}></div>
                                <div className="user-detail-holder">
                                    <div className="user-name">{teacher.name}</div>
                                    <div className="job-title">{teacher.jobTitle}</div>
                                    <div className="user-description">
                                        {teacher.description}
                                    </div>
                                    <div className="user-stats">
                                        <div className="likes">
                                            <div className="like-count">{teacher.likes}</div>
                                            <div className="mdi">Likes</div>
                                        </div>
                                        <div className="dislikes">
                                            <div className="dislike-count">{teacher.dislikes}</div>
                                            <span className="mdi">Dislikes</span>
                                        </div>
                                        <div className="sections">
                                            <div className="section-count">{teacher.sections.join(", ")}</div>
                                            <span className="mdi">Classroom</span>
                                        </div>
                                    </div>
                                    <ul className="subjects">
                                        {
                                            teacher.subjects.map(sub => {
                                                return <li key={crypto.randomUUID()}>{sub}</li>
                                            })
                                        }
                                    </ul>
                                    <div className="buttons">
                                        <button onClick={() => window.open("", "_blank")}>Details</button>
                                        <button onClick={() => window.open(teacher.moreInfo, "_blank")}>View Profile</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;