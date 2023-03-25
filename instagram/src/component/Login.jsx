import './Login.css'

function login(){
return(
    <div id='login-fullpage'>
     <div id='login-page'>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png" alt="" />
        </div>
        <div>
            <form>
                <input type="text" placeholder='Enter your email' />
                <br />
                <input type="Password" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>

     </div>

    </div>
)

}
export default login;