// Use Day.js to format the date and assign to the declared variable.
<<<<<<< HEAD
const today = dayjs();
// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?
const gradDate = dayjs('2024-10-10').format('MMM D[,] YYYY')
$('#1a').text(gradDate)
// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)
const doW = dayjs('2027-01-01').format('dddd')
$('#2a').text(doW)
// TODO: 3. What is the current time in the format: hours:minutes:seconds
const currentTime = dayjs(today).format('HH:mm:ss')
$('#3a').text(currentTime)
// TODO: 4. What is the current Unix timestamp?
const unixTime = today.unix()
$('#4a').text(unixTime)
// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
const findStamp = dayjs.unix(1318781876).format('MM/DD/YY')
$('#5a').text(findStamp)
// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
const futureDate = dayjs("2027-05-04");
const days = dayjs()
$("#6a").text(futureDate.diff(today, "day") + ' days')
=======

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

// TODO: 3. What is the current time in the format: hours:minutes:seconds

// TODO: 4. What is the current Unix timestamp?

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)
>>>>>>> c7636dc67ef98ece8fc11f8c979d38ca6b8dcd7d

