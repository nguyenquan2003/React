import profilePic from './assets/test.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture" />
            <h2 className="card-title">Web test</h2>
            <p className="card-text">abcdxyz</p>
        </div>
    );
}
export default Card