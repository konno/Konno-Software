if ( !this.URI )
    this.URI = function(uri){
        var a = document.createElement('a');
        a.href = uri;
        [
            'hash     host hostname href',
            'pathname port protocol search',
        ].join(' ').split(/\s+/).forEach(function(prop){
            this[prop] = a[prop];
        }, this);
        return this;
    };
