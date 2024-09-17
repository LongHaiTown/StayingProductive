

const Specificday= () => {

    var timesInaDay = [];
    var i;
    for (i =0 ; i< 6; i++){
        const time = (
            <div
                className="things"
                key={`day-${i}`} // Mỗi phần tử cần có key duy nhất
                style={{
                    backgroundColor: "purple",
                    margin: "5px",
                    padding: "10px",
                    border: "1px solid black",
                    display: "inline-block",
                    height:"auto"
                }}
            ></div>
            )
            timesInaDay.push(time);
    }
return ( <div className='Day'>{timesInaDay}</div> );
}
export default Specificday;
