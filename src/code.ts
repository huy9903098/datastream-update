import { Observable as Rx } from 'rxjs';

var observable = Rx.create((observer: any) => {
  try {
    observer.next('Hey guys!');
    observer.next('Hey how are you!');
    setInterval(() => {
      observer.next('I am good');
    }, 2000);
    // observer.complete();
    // observer.next('not send!');
  } catch (e) {
    observer.error(e);
  }
});

observable.subscribe(
  (x: any) => addItem(x),
  (error: any) => addItem(error),
  () => addItem('completed')
);

function addItem(val: any) {
  var node = document.createElement('li');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
