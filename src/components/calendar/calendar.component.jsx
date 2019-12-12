import React from "react";

import { useHistory } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';

import './calendar.styles.scss';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {

  	const history = useHistory();
    registerLocale('ru', ru)

    return (
       <DatePicker
       		className='calendar'
    			selected={new Date()}
    			onChange={date => history.push('/schedules')}
    			inline
    			locale="ru"
    	/>
    );
};

export default Calendar;