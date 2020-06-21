import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

  
export class NavComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver, public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
  );

  signOut() {
    this.auth.signOut();
    this.router.navigate(['/']);
  }

}
