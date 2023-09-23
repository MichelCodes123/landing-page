import styled from 'styled-components'

let register = {
    border: "solid",
    borderRadius: "1rem",
    padding: "1rem"
}

let Nav = styled.nav`
height: 10vh;
    padding: 1rem 3%;
    display: flex;
    justify-content: space-between;
    ul{
        list-style: none;
        display: inline-block;
    }   
    li{
        display: inline-block;
    }
    div{
        display: flex;
        align-items: center;
    }

`
let A = styled.a`
    
    display: inline-block;
    padding: 0 1rem;
    font-family: var(--main-font);
    font-weight: 500;

    text-decoration: none;
    color: hsl(0,0%,41%);

 
`
let HomeLink = styled(A)`
    padding-right: 2rem;
    padding-left: 0;
    font-weight: 700;
    font-size: 2.5rem;
    color: hsl(0, 0%, 8%);

`
function Links() {

    return (

        <ul>
            <li> <A href="#"> Features</A> </li>
            <li> <A href="#"> Company </A> </li>
            <li> <A href="#"> Careers</A> </li>
            <li> <A href="#"> About</A> </li>


        </ul>
    )
}
function NavBar() {
    return (
        <Nav>
            <div>
                <HomeLink href="#"> snap</HomeLink>
                <Links />
            </div>
            <div>
                <A href="#"> Login</A>
                <A style={register} href="#"> Register</A>
            </div>

        </Nav>

    )
}


export default NavBar;