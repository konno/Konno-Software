/*
 * $Id$
 */

if (!Element.prototype.hide) {
    Element.prototype.hide = function(){
        if ( !this.getUserData('display') ) {
            this.setUserData(
                'display',
                document.defaultView
                        .getComputedStyle(this, null)
                        .getPropertyValue('display'),
                null
            );
        }
        this.style.display = 'none';
    };
}
