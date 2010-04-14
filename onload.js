this.__defineSetter__('onload', function(listener){
    this.addEventListener('load', listener, false);
});
