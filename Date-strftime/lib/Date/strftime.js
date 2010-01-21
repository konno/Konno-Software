/*
 * $Id$
 */

if (!Date.prototype.strftime) {
    Date.prototype.strftime = (function(){
        var regexp = /%([%A-Za-z])/g;
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
        return function(fmt){
            var time             = this.getTime();
            var date             = this.getDate();
            var day              = this.getDay();
            var fullYear         = this.getFullYear();
            var fullYearLength   = fullYear.length;
            var milliseconds     = this.getMilliseconds();
            var hours            = this.getHours();
            var minutes          = this.getMinutes();
            var month            = this.getMonth();
            var seconds          = this.getSeconds();
            var localeString     = this.toLocaleString();
            var localeDateString = this.toLocaleDateString();
            var localeTimeString = this.toLocaleTimeString();
            var twelveHourClock  = hours % 12;
            var meridiem         = hours < 12 ? 'AM' : 'PM';
            return fmt.replace(regexp, (function(s){
                return function(m0, m1){
                    return s[m1] || m1;
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
                'D': localeDateString,
                'e': date,
                'F': [ fullYear, month, date ].join('-'),
//                'g': ,
//                'G': ,
                'h': abbreviatedMonthNames[month],
                'H': hours,
                'I': twelveHourClock,
//                'j': ,
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
//                'U': ,
//                'V': ,
                'w': day,
//                'W': ,
                'x': localeDateString(),
                'X': localeTimeString(),
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
