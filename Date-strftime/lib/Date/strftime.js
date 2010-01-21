/*
 * $Id$
 */

if (!Date.prototype.strftime) {
    Date.prototype.strftime = (function(){
        var regexp = /%([-_0^#]?)([%A-Za-z])/g;
        var fullWeekdayNames =
          'Sun Mon Tues Wednes Thurs Fri Satur'
            .split(' ').map(function(s){
                return s + 'day';
            });
        var fullMonthNames = [
          'January February March',
          'April   May      June',
          'July    August   September',
          'October November December',
        ].join(' ').split(/\s+/);
        var abbreviate = function(s){
            return s.slice(0, 3);
        };
        var abbreviatedWeekdayNames =
          fullWeekdayNames.map(abbreviate);
        var abbreviatedMonthNames =
          fullMonthNames.map(abbreviate);
        var padWithZeros = function(n){
            return n < 10 ? '0' + n : n;
        };
        return function(fmt){
            var time             = this.getTime();
            var timezoneOffset   = this.getTimezoneOffset();
            var date             = this.getDate();
            var day              = this.getDay();
            var fullYear         = this.getFullYear().toString();
            var fullYearLength   = fullYear.length;
            var year             = fullYear.slice(
                                       fullYearLength - 2,
                                       fullYearLength
                                   );
            var milliseconds     = this.getMilliseconds();
            var hours            = padWithZeros( this.getHours() + 1 );
            var minutes          = padWithZeros( this.getMinutes() );
            var month            = padWithZeros( this.getMonth() + 1 );
            var seconds          = padWithZeros( this.getSeconds() );
            var localeString     = this.toLocaleString();
            var localeDateString = this.toLocaleDateString();
            var localeTimeString = this.toLocaleTimeString();
            var twelveHourClock  = hours % 12;
            var meridiem         = hours < 12 ? 'AM' : 'PM';
            var newYearsDay      = new Date( fullYear, 0, 1 );
            var elapsedDays      = (this - newYearsDay) / 864e5;
            var weekNumber       = Math.ceil(
                                       (
                                           elapsedDays
                                         + newYearsDay.getDay()
                                         + 1
                                       ) / 7
                                   ).toString();
            var weekNumberLength = weekNumber.length;
            var dayOfYear        = Math.ceil(elapsedDays);
            return fmt.replace(regexp, (function(str){
                return function(m, flag, seq){
                    var s = str[seq] || seq;
                    switch (flag) {
                        case '^':
                            s = s.toUpperCase();
                            break;
                        case '#':
                            s = s.toLowerCase();
                            break;
                    }
                    return s;
                };
            })({
                '%': '%',
                'a': abbreviatedWeekdayNames[day],
                'A': fullWeekdayNames[day],
                'b': abbreviatedMonthNames[month],
                'B': fullMonthNames[month],
                'c': localeString,
                'C': fullYear.slice(0, 2),
                'd': date,
                'D': [ month, date, year ].join('/'),
                'e': date,
                'F': [ fullYear, month, date ].join('-'),
                'g': weekNumber.slice(
                         weekNumberLength - 2,
                         weekNumberLength
                     ),
                'G': weekNumber,
                'h': abbreviatedMonthNames[month],
                'H': hours,
                'I': twelveHourClock,
                'j': dayOfYear,
                'k': hours,
                'l': twelveHourClock,
                'm': month,
                'M': minutes,
                'n': '\n',
                'N': milliseconds,
                'p': meridiem,
                'P': meridiem.toLowerCase(),
                'r': localeTimeString,
                'R': [ hours, minutes ].join(':'),
                's': time,
                'S': seconds,
                't': '\t',
                'T': [ hours, minutes, seconds ].join(':'),
                'u': day + 1,
                'U': weekNumber,
                'V': weekNumber,
                'w': day,
                'W': weekNumber,
                'x': localeDateString,
                'X': localeTimeString,
                'y': fullYear.slice(fullYearLength - 2, fullYearLength),
                'Y': fullYear,
                'z': timezoneOffset,
               ':z': timezoneOffset,
              '::z': timezoneOffset,
             ':::z': timezoneOffset,
                'Z': localeString.split(' ').pop(),
            }));
        };
    })();
}
