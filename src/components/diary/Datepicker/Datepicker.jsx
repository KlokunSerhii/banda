import React, {
    // useState
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//  import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const Datepicker = ({ date, onChange, minDate }) => {
    return (
       
            
            <DatePicker
                inline
                selected={date}
                onChange={onChange}
                minDate={new Date()}
                popperPlacement="bottom-end"
                popperModifiers={[
                    {
                        name: "offset",
                        options: {
                            offset: [5, 10],
                        },
                    },
                    {
                        name: "preventOverflow",
                        options: {
                            rootBoundary: "viewport",
                            tether: false,
                            altAxis: true,
                        },
                    },
                ]}
            />
            
        
      
        
    );
};
export default Datepicker;
