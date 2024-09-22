

const Specificday= ({specificthing}) => {
    console.log(specificthing.title);
    var timesInaDay = [];
    var i;
    for (i =0 ; i< 6; i++){
        const time = (
            <div
                className="things"
                key={`day-${i}`} 
                style={{
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    display: "inline-block",
                    height:"auto"
                }}
            >
                <p style={{margin:"0", padding:"0"}}></p>
            </div>
            )
            timesInaDay.push(time);
    }
return ( <div className='Day'>{timesInaDay}</div> );
}
export default Specificday;
