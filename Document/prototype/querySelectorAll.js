if ( !Document.prototype.querySelectorAll )
    Document.prototype
            .querySelectorAll = Document.prototype
                                        .getElementsByTagName;
