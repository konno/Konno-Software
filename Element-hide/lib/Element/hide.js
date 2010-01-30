/*
 * $Id$
 */

if (!Element.prototype.hide) {
    Element.prototype.hide = function(){
        if ( !this.style.__display__ ) {
            this.style.__display__ =
                document.defaultView
                        .getComputedStyle(this, null)
                        .getPropertyValue('display');
        }
        this.style.display = 'none';
    };
}
