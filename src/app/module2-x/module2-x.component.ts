import { Component } from '@angular/core';
//import swal from 'sweetalert';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-module2-x',
  templateUrl: './module2-x.component.html',
  styleUrls: ['./module2-x.component.css']
})
export class Module2XComponent {
  
  name = 'Angular';
  constructor(){}
  /*ngOnInit(): void{
  sweetAlert.swal("Hai");
  }*/

  ngOnInit(){
    console.log('This is init method');
  }

  simpleAlert(){
    Swal.fire('Hello world!');
  }
  alertWithSuccess(){
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }
  
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
