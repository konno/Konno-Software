if ( !Date.prototype.strftime ) {
    Date.prototype.strftime = (function(interpret){
        var regexp = /%([-_0^#]?)(:{0,3}[%A-Za-z])/g;
        return function(fmt){
            var self     = this;
            var callback = function( m0, flag, seq ){
                if ( !interpret[seq] ) return m0;
                var s = interpret[seq].call(self);
                switch (flag) {
                    case '-':
                        if ( !s ) break;
                        s = s.toString().replace(/^0/, '');
                        break;
                    case '_':
                        s = s.toString().replace(/^0/, ' ');
                        break;
                    case '0':
                        s = s.toString().replace(/^ /, '0');
                        break;
                    case '^':
                        s = s.toString().toUpperCase();
                        break;
                    case '#':
                        s = s.toString().toLowerCase();
                        break;
                }
                return s;
            };
            return fmt.replace( regexp, callback );
        };
    })({
        '%': function(){
                 return '%';
             },
        'a': (function(abbreviatedWeekdayNames){
                 return function(){
                     return abbreviatedWeekdayNames[ this.strftime('%w') ];
                 };
             })( 'Sun Mon Tue Wed Thu Fri Sat'.split(/\s+/) ),
        'A': (function(fullWeekdayNames){
                 return function(){
                     return fullWeekdayNames[ this.strftime('%w') ];
                 };
             })( 'Sun Mon Tues Wednes Thurs Fri Satur'
                   .split(/\s+/)
                   .map(function(s){
                       return s + 'day';
                   }) ),
        'b': (function(abbreviatedMonthNames){
                 return function(){
                     return abbreviatedMonthNames[ this.getMonth() ];
                 };
             })( 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'
                   .split(/\s+/) ),
        'B': (function(fullMonthNames){
                 return function(){
                     return fullMonthNames[ this.getMonth() ];
                 };
             })( [
                     'January February March',
                     'April   May      June',
                     'July    August   September',
                     'October November December',
                 ].join(' ').split(/\s+/) ),
        'c': function(){
                 return this.toLocaleString();
             },
        'C': function(){
                 return Math.floor( this.strftime('%Y') / 100 );
             },
        'd': function(){
                 var d = this.getDate();
                 return d < 10 ? '0' + d
                               :       d;
             },
        'D': function(){
                 return this.strftime('%m/%d/%y');
             },
        'e': function(){
                 var m = this.getDate();
                 return m < 10 ? ' ' + m
                               :       m;
             },
        'F': function(){
                 return this.strftime('%Y-%m-%d');
             },
        'g': function(){
                 return this.strftime('%y');
             },
        'G': function(){
                 return this.strftime('%Y');
             },
        'h': function(){
                 return this.strftime('%b');
             },
        'H': function(){
                 var h = this.getHours();
                 return h < 10 ? '0' + h
                               :       h;
             },
        'I': function(){
                 var h = this.getHours() % 12 || 12;
                 return h < 10 ? '0' + h
                               :       h;
             },
        'j': function(){
                 var d = this.getDate();
                 return d < 10  ? '00' + d
                      : d < 100 ? '0'  + d
                      :                  d;
             },
        'k': function(){
                 var h = this.getHours();
                 return h < 10 ? ' ' + h
                               :       h;
             },
        'l': function(){
                 var h = this.getHours() % 12 || 12;
                 return h < 10 ? ' ' + h
                               :       h;
             },
        'm': function(){
                 var m = this.getMonth() + 1;
                 return m < 10 ? '0' + m
                               :       m;
             },
        'M': function(){
                 var m = this.getMinutes();
                 return m < 10 ? '0' + m
                               :       m;
             },
        'n': function(){
                 return '\n'; // should this be OS-sensitive?
             },
        'N': function(){
                 var ms = this.getMilliseconds();
                 ms = ms < 10  ? '00' + ms
                    : ms < 100 ? '0'  + ms
                    :                   ms;
                 return ms + '000000';
             },
        'p': function(){
                 return ( this.getHours() < 12 ? 'A'
                                               : 'P' ) + 'M';
             },
        'P': function(){
                 return this.strftime('%#p');
             },
        'r': function(){
                 return this.strftime('%I:%M:%S %p');
             },
        'R': function(){
                 return this.strftime('%H:%M');
             },
        's': function(){
                 return Math.floor( this.getTime() / 1e3 );
             },
        'S': function(){
                 var s = this.getSeconds();
                 return s < 10 ? '0' + s
                               :       s;
             },
        't': function(){
                 return '\t';
             },
        'T': function(){
                 return this.strftime('%H:%M:%S');
             },
        'u': function(){
                 return this.strftime('%w');
             },
        'U': function(){
                 return this.strftime('%W');
             },
        'V': function(){
                 return this.strftime('%W');
             },
        'w': function(){
                 return this.getDay();
             },
        'W': function(){
                 var d = new Date( this.strftime('%Y'), 0, 1 );
                 var w = Math.floor(
                             (
                                 ( this - d ) / 864e5
                               + d.strftime('%w')
                               + 1
                             ) / 7
                         );
                 return w < 10 ? '0' + w
                               :       w;
             },
        'x': function(){
                 return this.toLocaleDateString();
             },
        'X': function(){
                 return this.toLocaleTimeString();
             },
        'y': function(){
                 var y = this.strftime('%Y').toString();
                 var l = y.length;
                 return y.slice( l - 2, l );
             },
        'Y': function(){
                 return this.getFullYear();
             },
        'z': function(){
                 return this.strftime('%:::z00');
             },
       ':z': function(){
                 return this.strftime('%:::z:00');
             },
      '::z': function(){
                 return this.strftime('%:::z:00:00');
             },
     ':::z': function(){
                 var z = this.getTimezoneOffset() / -60;
                 return [
                     z < 0    ? '-' : '+',
                     z < 1000 ? '0' : '',
                     z,
                 ].join('');
             },
        'Z': function(){
                 return this.toString()
                            .replace(
                                /.*\(([^()]+?)\).*/,
                                function( m0, m1 ){
                                    return m1;
                                }
                            );
             },
    });
}
