import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/share';

var observable = Observable.create((observer: any) => {
    try {
        observer.next("Hello!");
        observer.next("How are you?");
        setInterval(() => {
            observer.next("I am good");
        }, 2000)
        // observer.complete();
        // observer.next("This will not send!");
    }
    catch (e) {
        observer.error(e);
    }
}).share();


var observer = observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);


setTimeout(() => {
    var observer2 = observable.subscribe(
        (x: any) => addItem('Subscriber 2: ' + x)
    );
}, 1000);

function addItem(val: any) {

    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);

}