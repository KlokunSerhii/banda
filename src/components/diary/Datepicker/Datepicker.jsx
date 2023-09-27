import React, {
    // useState
} from "react";
import  DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { CalendarGlobalStyles} from './Datepicker.styled'

const Datepicker = ({ date, onChange }) => {
    return (
        <>
            <DatePicker
                inline
                selected={date}
                onChange={onChange}
                minDate={new Date()}
                calendarStartDay={1}

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

            <CalendarGlobalStyles />
        </>

    );
};
export default Datepicker;

