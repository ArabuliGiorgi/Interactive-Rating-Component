import './Rate.css'
import starIcon from '/images/icon-star.svg'

export default function Rate({setSubmit, rate, setRate}){
    const buttons = [1,2,3,4,5];

    return (
        <>
            <div className="star-div">
                <img src={starIcon} alt="star icon" />
            </div>
            <h1 id='heading'>How did we do?</h1>
            <p id='text'>Please let us know how we did with your support request. 
                All feedback is appreciated to help us improve our offering!</p>
            <div className="buttons-div">
                {buttons.map((item) => (
                <button
                    key={item}
                    onClick={() => setRate(item)}
                    className='rate-btn'
                    style={{
                        backgroundColor:
                            rate == item ? "#FC7614" : ""
                    }}
                >
                    <h1 style={{
                            color: rate == item ? "white" : ""
                        }}
                    >{item}</h1>
                </button>
                ))}
            </div>
            <button id='submit' 
                onClick={() => rate && setSubmit(true)}
            ><h1>SUBMIT</h1></button>
        </>
    )
}