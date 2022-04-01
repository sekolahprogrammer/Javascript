function myDisplayer(text) {
    console.log(text);
}

let myPromise = new Promise(function(myResolve, myReject) {
   myResolve();
   myReject(); 
});

myPromise.then(
    function(value) {
        myDisplayer(value);
    },
    function(error) {
        myDisplayer(error);
    }
);