export const calcHourlyPrice = (pickDate, dropDate, hourlyPrice) => {

    console.log(pickDate);
    console.log(dropDate);

    const date1 = new Date(pickDate);
    const date2 = new Date(dropDate);
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInHours = differenceInMs / 36e5;

    // console.log(differenceInHours);

    const amount = (differenceInHours * hourlyPrice)

    return amount;
}

export const calcDailyPrice = (pickingDate, droppingDate, dailyPrice) => {
    const date1 = new Date(pickingDate);
    const date2 = new Date(droppingDate);
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));

    // console.log(differenceInDays);

    const amount = (differenceInDays * dailyPrice)

    return amount;
}

export const calcWeeklyPrice = (pickingDate, droppingDate, weeklyPrice) => {
    const date1 = new Date(pickingDate);
    const date2 = new Date(droppingDate);
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInWeeks = Math.round(differenceInMs / (1000 * 60 * 60 * 24 * 7));

    // console.log(differenceInWeeks);

    const amount = (differenceInWeeks * weeklyPrice)

    return amount;
}

export const calcMonthlyPrice = (pickingDate, droppingDate, monthlyPrice) => {
    const date1 = new Date(pickingDate);
    const date2 = new Date(droppingDate);
    const differenceInMs = Math.abs(date2 - date1);
    const differenceInMonths = (date2.getFullYear() - date1.getFullYear()) * 12 + (date2.getMonth() - date1.getMonth());

    // console.log(differenceInMonths);

    const amount = (differenceInMonths * monthlyPrice)

    return amount;
}