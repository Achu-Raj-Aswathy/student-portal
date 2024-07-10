import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import Swal from 'sweetalert2'

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  if(authService.isLogged()){
    return true;
  }
  else{
    Swal.fire({
      title: 'Ooops...',
      text: 'You need to login to access this page',
      icon: 'warning',
    });
    router.navigateByUrl("")
    return false;
  }
};
