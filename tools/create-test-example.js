/*!espree-section: simple-method*/
x = {
    method() {
    }
};

/*!espree-section: simple-method-with-argument*/
x = {
    method(test) {

    }
};

/*!espree-section: simple-method-with-string-name*/
x = {
    "method"() {
    }
};

/*!espree-section: simple-method-named-get*/
x = {
    get() {
    }
};

/*!espree-section: simple-method-named-set*/
x = {
    set() {
    }
};

/*!espree-section: invalid-method-no-braces*/
x = {
    method() 42
};
