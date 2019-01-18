//import { Observable } from 'rxjs/Observable';
//import { merge } from "rxjs/observable/merge";

import { from } from 'rxjs/Observable/from';
//import "rxjs/add/operator/map";
import "rxjs/add/operator/pluck";


from([
    { first: "Mats", last: "Williamson", age: "41" },
    { first: "Lidia", last: "Olsen", age: "27" },
    { first: "Krista", last: "John", age: "32" }
])

    .pluck("first")
    .subscribe((x: any) => addItem(x));




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




function addItem(val: any) {

    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);

}