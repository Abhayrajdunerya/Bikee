import React from 'react'

const BookingStatus = ({color, text}) => {
  return (
    <span className={`bg-${color}-100 text-${color}-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-${color}-900 dark:text-${color}-300 capitalize`}>{text}</span>
  )
}

export default BookingStatus