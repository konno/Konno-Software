/*
 * $Id$
 */

if ( Object.defineProperty &&
     Object.getOwnPropertyDescriptor )
    (function(innerText, textContent){
        if (!textContent.set)
            object.set = function(){
                return innerText.set.call(this);
            };
        if (!textContent.get)
            object.get = function(){
                return innerText.get.call(this);
            };
        Object.defineProperty(
            Element.prototype,
            'textContent',
            object
        );
    })(
        Object.getOwnPropertyDescriptor(
            Element.prototype,
            'innerText'
        ),
        Object.getOwnPropertyDescriptor(
            Element.prototype,
            'textContent'
        )
    );
