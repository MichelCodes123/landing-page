import styled from 'styled-components'


let register = {
    border: "solid",

}

let Nav = styled.nav`
height: 10vh;
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    gap: 50%;
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

    @media (max-width: 756px) {
            gap: 8%;
    }

`
let A = styled.a`
    
    display: inline-block;
    font-family: var(--main-font);
    font-weight: 500;

    text-decoration: none;
    color: hsl(0,0%,41%);

 
`
let LinkDiv = styled.div`
    display: flex;
    gap: 3rem;
`
let HomeLink = styled(A)`

    font-weight: 700;
    font-size: 2.5rem;
    color: hsl(0, 0%, 8%);

`
let LinkHolder = styled.ul`
    display: flex !important;
    gap: 1rem;


    @media (max-width: 756px) {
           display: inline-block !important;
           overflow-y: hidden;
           height: 1rem;
    }


`
function Links() {


    return (
        <LinkHolder>
            <li> <A href="#"> Features</A> </li>
            <li> <A href="#"> Company </A> </li>
            <li> <A href="#"> Careers</A> </li>
            <li> <A href="#"> About</A> </li>
        </LinkHolder>
    )
}
function NavBar() {
    return (
        <Nav>
            <div>
                <HomeLink href="#"> snap</HomeLink>

            </div>

            <LinkDiv>
                <Links />
                <A href="#"> Login</A>
                <A style={register} href="#"> Register</A>
            </LinkDiv>

        </Nav>

    )
}


export default NavBar;