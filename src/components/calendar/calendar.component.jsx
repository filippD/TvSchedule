import React from "react";

import './calendar.styles.scss';

import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
 
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
  	
    registerLocale('ru', ru)

    return (
       <DatePicker
       		className='calendar'
    			selected={new Date()}
    			onChange={date => console.log(date)}
    			inline
    			locale="ru"
    	/>
    );
};

export default Calendar;