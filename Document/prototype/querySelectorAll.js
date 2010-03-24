if ( typeof Document.prototype
                    .querySelectorAll == 'undefined' )
    Document.prototype
            .querySelectorAll = Document.prototype
                                        .getElementsByTagName;
