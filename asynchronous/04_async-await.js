/*
 *sintaks asynchronous
 */

async function hallo() {
    return "Hello, World!";
}

function hallo() {
    return Promise.resolve("Hello, World!");
}

hallo().then(
    function(value) {
        //jika kode sukses
    },
    function(error) {
        //jika kode error
    }
);

// contoh asynchronous
function myDisplayer(text) {
    console.log(text);
}

async function nama() {
    return "prayogaea";
}

nama().then(
    function(value) {
        myDisplayer(value);
    }
);