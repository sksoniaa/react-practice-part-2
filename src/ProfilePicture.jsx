 export default function ProfilePicture() {

  const imageUrl = './src/assets/ProfilePic.jpeg'

  const handleClick = (e) => {e.target.style.display = "none";
                              console.log("you clicked on the image");}

  return(
    <>
      <img className="profile-img" onClick={(e) => handleClick(e)}src={imageUrl} alt="" />
    </>
  )
 }