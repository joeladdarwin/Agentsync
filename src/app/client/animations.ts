import { trigger, animate, transition,state, style, query } from '@angular/animations';

export function fadeAnimation(){

    return trigger('fadeAnimation', [
      state('void',style({})),
      state('*',style({})),
      transition(':enter',[
      style({ transform:'translateX(-100%)'}),
      animate('3s ease-in-out',style({transform:'translateX(0%)'}))
      ]),
      transition(':leave',[
      style({transform:'translateX(0%)'}),
      animate('3s ease-in-out',style({transform:'translateX(100%)'}))
      ])
      ]);
    }