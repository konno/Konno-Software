if ( !this.XMLHttpRequest )
    this.XMLHttpRequest = (function(){
        try {
            [
                'Msxml2.XMLHTTP.6.0',
                'Msxml2.XMLHTTP.3.0',
                'Msxml2.XMLHTTP',
                'Microsoft.XMLHTTP',
            ].forEach(function(ProgID){
                try {
                    var req = new ActiveXObject(ProgID);
                }
                catch (e) {
                    return;
                }
                throw req;
            });
        }
        catch (e) {
            return function(){
                return e;
            };
        }
    })();
