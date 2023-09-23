import styled from "styled-components"
import audio from '../assets/client-audiophile.svg'
import data from '../assets/client-databiz.svg'
import maker from '../assets/client-maker.svg'
import meet from '../assets/client-meet.svg'
import deskPath from '../assets/image-hero-desktop.png'
import mobPath from '../assets/image-hero-mobile.png'
import { useState } from "react"

const Sponsors = styled.img`
   height: 1.5rem;
   width: auto;
   padding-right: 1rem;
    display: inline-block;

    @media (max-width: 756px) {
                 height: 1rem;
        }

`

const SponsorDiv = styled.div`
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 45vw;
    gap: 4rem;
    justify-content: center;

    @media (max-width: 756px) {
        width: 100%
    }


    h1{
        font-size: 5em;

            @media (max-width: 756px) {
                    font-size: 2em;
        }
    }
   p{

       line-height: 1.5rem;
       color: var(--secondary-color)
   }
    button{ 
        display: inline-block;
        color: white;
        background-color: var(--main-color);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        width: 30%;
        font-size: 16px;

        &:hover{
            cursor: pointer;
        }

        @media (max-width: 756px) {
            width: 50%;
            margin: auto;
            
    }
    }
`

const Main = styled.main`
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
    width: 100vw;
    padding: 5rem 5rem;


    @media (max-width: 756px) {
        flex-direction: column-reverse;
        text-align: center;
        padding: 2rem 2rem;
    }


`
const LandingImage = styled.img`
    justify-self: center;
    width:auto;
    height: 75vh;

    @media (max-width: 756px) {
       width: 80%;
       height: auto;
       margin: auto;
    }
`

function LandingImages() {

    const [size, setSize] = useState(window.innerWidth)

    window.addEventListener("resize", () =>{
        setSize(window.innerWidth)
    })


    if (window.innerWidth > 756) {
        return (
            <LandingImage alt="landing-graphic" src={deskPath} />
        )
    }
    else {
        return (
            <LandingImage alt="landing-graphic" src={mobPath} />
        )
    }
}
function LandingContent() {
    return (
        <Main>
            <Div>
                <h1> Make remote work</h1>
                <p> Get your team in sync, no matter your location.
                    Streamline processes, create team rituals, and
                    watch productivity soar.</p>
                <button> Learn More</button>

                <div>
                    <Sponsors src={data} />
                    <Sponsors src={audio} />
                    <Sponsors src={meet} />
                    <Sponsors src={maker} />
                </div>

            </Div>

            <LandingImages/>
        </Main>
    )
}

export default LandingContent;