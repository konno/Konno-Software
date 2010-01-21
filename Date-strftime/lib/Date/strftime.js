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
            var date             = this.getDate();
            var day              = this.getDay();
            var fullYear         = this.getFullYear();
            var hours            = this.getHours();
            var minutes          = this.getMinutes();
            var month            = this.getMonth();
            var seconds          = this.getSeconds();
            var localeString     = this.toLocaleString();
            var localeDateString = this.toLocaleDateString();
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
            }));
        };
    })();
}
