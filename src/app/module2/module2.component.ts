import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component {
  simpleAlert(){
    Swal.fire('Hello world!');
  }
}
