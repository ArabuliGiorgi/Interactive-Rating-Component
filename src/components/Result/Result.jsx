import './Result.css'
import thankYou from '/images/illustration-thank-you.svg'

export default function Result({rate}){
    return (
        <>
            <div className="main-image">
                <img src={thankYou} alt="thank you" id='image'/>
            </div>
            <div className="score-div">
                <h1>You selected {rate} out of 5</h1>
            </div>
            <h1 id='header1'>Thank you!</h1>
            <p id='text1'>We appreciate you taking the time to give a rating. 
                If you ever need more support, don't hesitate to get in touch!</p>
        </>
    )
}