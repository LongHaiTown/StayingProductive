import Specificday from "./Specificday";

const Weekday= () => {

    var weekday = [];
    var i;
    for (i =0 ; i< 7; i++){
            if(i%2 ==0){
            const day = (
                <Specificday />
            )
            
            weekday.push(day);
        } else {
            const day = (
                <Specificday />
                
            )
            
            weekday.push(day);
        }
    }
return ( <div id='scheduleMain'>{weekday}</div> );
}
export default Weekday;
