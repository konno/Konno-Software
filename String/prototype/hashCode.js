/*
 * import String.prototype.charCodeAt;
 */

if ( !String.prototype.hashCode )
    String.prototype.hashCode = function(){
        var str = this.toString();
        var num = 0;
        for ( var i = 0, l = str.length; i < l;
              num = ( num * 0x1F + str.charCodeAt(i++) ) % 0x100000000 );
        return num;
    };
