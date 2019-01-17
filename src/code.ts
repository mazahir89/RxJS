import { Observable } from "rxjs/Observable";

var observable = Observable.create((observer: any) => {
    observer.next("Hello!");
    observer.next("How are you?");
    observer.complete();
    observer.next("This will not send!");
});

observable.subscribe(
    (x: any) => addItem(x),
    (error: any) => addItem(error),
    () => addItem('Completed')
);

function addItem(val: any) {

    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);

}