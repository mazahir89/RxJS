//import { Subject } from 'rxjs/Subject';
//import { Observable } from 'rxjs/Observable';
//import { merge } from "rxjs/observable/merge";


//import "rxjs/add/operator/map";
/* import { from } from 'rxjs/Observable/from';
import "rxjs/add/operator/pluck";


from([
    { first: "Mats", last: "Williamson", age: "41" },
    { first: "Lidia", last: "Olsen", age: "27" },
    { first: "Krista", last: "John", age: "32" }
])

    .pluck("first")
    .subscribe((x: any) => addItem(x));
 */




/* Observable.create((observer: any) => {
    observer.next("Hello");
})

    .map((val: any) => val.toUpperCase())
    .subscribe((x: any) => addItem(x));
 */



/* var observable = Observable.create((observer: any) => {
    observer.next("Hello");
}); 

var observable2 = Observable.create((observer: any) => {
    observer.next("How are you?");
});

var newObs = merge(observable, observable2);

newObs.subscribe((x: any) => addItem(x));
*/

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { interval } from 'rxjs/Observable/interval';
import "rxjs/add/operator/skipUntil";


var observableA = Observable.create((data: any) => {
    var i = 1;
    setInterval(() => {
        data.next(i++);
    }, 1000);
});

var observableB = new Subject;

setTimeout(() => {
    observableB.next("Hello")
}, 5000)

var observ = observableA.skipUntil(observableB);

observ.subscribe((x: any) => addItem(x));

function addItem(val: any) {

    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);

}