/*
 * $Id$
 */

if (!Element.prototype.show) {
    Element.prototype.show = function(value){
        var display = this.getUserData('display');
        if (!display) {
            display =
                document.defaultView
                        .getComputedStyle(this, null)
                        .getPropertyValue('display');
            this.setUserData('display', display, null);
        }
        this.style.display =
            display == 'none' ? 'block' || value
                              : display;
    };
}
