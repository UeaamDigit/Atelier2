
import '../../App.css' ;
import myImage from'../../images/ff.png' ;

function Header(){
    return(
        <header>
            <div>
                <img src={myImage} alt="" />
            </div>
            <div>
                <h1>Titre du Site</h1>
                <a href="">Notre Slogan</a>
            </div>
        </header>
    )
}

export default Header ;