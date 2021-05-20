// function clock(p_time) {

//     const names = ['en punto', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez',
//         'once', 'doce', 'trece', 'catorce', 'cuarto', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve',
//         'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 
//         'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve', 'media', 
//         'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro',
//         'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve',
//         'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco',
//         'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta',
//         'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco',
//         'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve']

//     const { time, min, hour } = { time: p_time.slice(-2), min: parseInt(p_time.slice(-4, -2)), hour: parseInt(p_time.slice(0, -5)) }

//     if (hour === 1 && min === 00) {
//         return `Es la ${names[hour]} ${names[min]} ${(time === 'am' ? 'de la mañana' : 'de la noche')}`
//     } else if (hour === 12 && min === 00) {
//         return `Es ${(time === 'am' ? 'media noche' : 'medio día')}`
//     } else if (hour > 5 && time === 'pm') {
//         return `Son las ${names[hour]} y ${names[min]} de la noche `
//     } else if (hour >= 1 && hour < 6 && time === 'pm') {
//         return `Son las ${names[hour]} y ${names[min]} de la tarde `
//     } else {
//         return `Son la ${names[hour]} y ${names[min]} de la mañana`
//     }

// }

// console.log(clock('9:05am'))
// console.log(clock('9:15am'))
// console.log(clock('12:00am'))
// console.log(clock('12:00pm'))
// console.log(clock('2:34pm'))
// console.log(clock('1:00am'))
// console.log(clock('1:30am'))


// function clock(p_time) {
//     const numbers = ['en punto', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'cuarto', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve', 'media', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve']
//     const { time, min, hour } = { time: p_time.slice(-2), min: parseInt(p_time.slice(-4, -2)), hour: parseInt(p_time.slice(0, -5)) }
//     if (hour === 12 && min === 00) {
//         return `Es ${(time === 'am' ? 'media noche' : 'medio día')}`
//     } else if (hour < 6 && time === 'pm') {
//         return `Son las ${numbers[hour]} y ${numbers[min]} de la tarde`
//     } else {
//         return `${(hour === 1 ? 'Es la ' : 'Son las ')}${numbers[hour]}${(min === 0 ? ' ' : ' y ')}${numbers[min]} ${(time === 'am' ? 'de la mañana' : 'de la noche')}`
//     }
// }

// console.log(clock('9:05am'))
// console.log(clock('9:15am'))
// console.log(clock('12:00am'))
// console.log(clock('12:00pm'))
// console.log(clock('2:34pm'))
// console.log(clock('1:00am'))
// console.log(clock('1:30am'))
// console.log(clock('6:30pm'))
// console.log(clock('6:00pm'))


function clock(p_time) {
    const numberNames = ['en punto', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'cuarto', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve', 'media', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve']
    const { time, minutes, hour } = { 
        time: p_time.slice(-2), 
        minutes: +p_time.slice(-4, -2), 
        hour: +p_time.slice(0, -5) 
    }
    if (hour === 12 && minutes === 0) {
        return `Es ${(time === 'pm' ? 'media noche' : 'medio día')}`
    } else {
        return (
            (hour === 1 ? 'Es la ' : 'Son las ') +
            numberNames[hour] + 
            (minutes === 0 ? ' ' : ' y ') + 
            numberNames[minutes] +
            (time === 'am' ? ' de la mañana' : 
                hour < 6 ? ' de la tarde' : ' de la noche')
        )
    }
}


console.log('12:00am', clock('12:00am'))
console.log('12:00pm', clock('12:00pm'))
console.log('10:00am', clock('10:00am'))
console.log('9:15am', clock('9:15am'))
console.log('9:05am', clock('9:05am'))
console.log('2:34pm', clock('2:34pm'))
console.log('1:00am', clock('1:00am'))
console.log('1:30am', clock('1:30am'))
console.log('6:30pm', clock('6:30pm'))
console.log('6:00pm', clock('6:00pm'))
console.log('3:35pm', clock('3:35pm'))
console.log('7:15am', clock('7:15am'))
console.log('2:00pm', clock('2:00pm'))
console.log('2:04pm', clock('2:04pm'))
console.log('7:00pm', clock('7:00pm'))
console.log('2:31pm', clock('2:31pm'))
console.log('5:30am', clock('5:30am'))
console.log('9:00pm', clock('9:00pm'))













