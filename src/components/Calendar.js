import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import React from "react";
import dayjs from "dayjs";
export function CalendarComponent({ startDate = new Date("10-10-2021"), endDate = new Date("12-12-2021"), selectedDay = new Date("11-10-2021"), onChange }) {
    function getMonthDifference() {
        return (
            endDate.getMonth() -
            startDate.getMonth() +
            12 * (endDate.getFullYear() - startDate.getFullYear())
        );
    }

    return (
        <Calendar
            style={{ display: 'flex', flexDirection: 'column'}}
            styles={() => ({
                day: {
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '10px',
                    width: '40px',
                    lineHeight: '40px',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            })}
            size="md"
            value={selectedDay}
            onChange={e => onChange(e)}
            amountOfMonths={getMonthDifference()+1}
            minDate={dayjs(new Date(startDate)).startOf('month').toDate()}
            maxDate={dayjs(new Date(endDate)).endOf('month').toDate()}
            renderDay={(date) => {
                const day = date.getDate(startDate);
                return (
                    <React.Fragment>
                        <div style={{ lineHeight: 'initial', marginTop: '30px', margin: 'auto 0' }}>{day}</div>
                        <div style={{ lineHeight: 'initial' }}>pret</div>
                    </React.Fragment>
                );
            }}
        />
    );
}