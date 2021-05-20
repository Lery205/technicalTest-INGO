function clock(p_time) {
    //Array with the names of the numbers until fisty nine
    const numberNames = ['en punto', 'una', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve', 'diez', 'once', 'doce', 'trece', 'catorce', 'cuarto', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve', 'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve', 'media', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y seis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve', 'cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y seis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve', 'cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y seis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve']
    //Divide the parameter in hour, minutes and am/pm
    const { time, minutes, hour } = {
        time: p_time.slice(-2),
        minutes: +p_time.slice(-4, -2),
        hour: +p_time.slice(0, -5)
    }
    //Return the result according the parameter
    if (hour === 12 && minutes === 0) {
        return `Es ${(time === 'am' ? 'media noche' : 'medio día')}`
    } else {
        return (
            (hour !== 1 ? 'Son las ' :
                minutes === 0 ? 'Es la ' : 'Son la ') +
            numberNames[hour] +
            (minutes === 0 ? ' ' : ' y ') +
            numberNames[minutes] +
            (time === 'am' ? ' de la mañana' :
                hour < 6 ? ' de la tarde' : ' de la noche')
        )
    }
}

exports.clock = clock;















