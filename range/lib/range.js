/*
 * $Id$
 */

if (!this.range) {
    this.range = function(begin, end, step){
        if (step == null)
            step = 1;
        else if (!step)
            throw new RangeError();
        if (end == null)
            end = begin, begin = 0;
        for (var a = [];
             step < 0
           ? (begin > end)
           : (begin < end);
             a.push(begin),
             begin += step);
        return a;
    };
}
