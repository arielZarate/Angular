import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sweetAlert';

  getMessage1() {
    Swal.fire('cualquier tonto puede usar la pc ');
  }

  getMessage2() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'algo salio mal!',
      footer: '<a href="">Porque tengo este problema?</a>',
      imageUrl: 'https://placeholder.pics/svg/300x1500',
      imageHeight: 300,
      imageWidth: 300,
      imageAlt: 'A tall image',
    });
  }

  getHTML1() {
    Swal.fire({
      title: '<strong>HTML <u>example</u></strong>',
      icon: 'info',
      html:
        'You can use <b>bold text</b>, ' +
        '<a href="//sweetalert2.github.io">links</a> ' +
        'and other HTML tags',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }

  getMessage3() {
    Swal.fire({
      title: 'Quieres guardar los cambios?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'guardar',
      denyButtonText: `No guardar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Guardado!', '', 'success');
      } else if (result.isDenied) {
        Swal.fire('los cambios no han sido  guardados', '', 'info');
      }
    });
  }

  getMessage4() {
    Swal.fire({
      title: 'Custom animation with Animate.css',
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    });
  }

  getMessage5() {
    Swal.fire({
      title: 'Sweet!',
      text: 'Modal con imagen personalizada.',
      imageUrl: 'https://unsplash.it/400/200',
      imageWidth: 300,
      imageHeight: 200,
      imageAlt: 'Custom image',
    });
  }
}
