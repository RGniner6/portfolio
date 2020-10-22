import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes, state,
} from '@angular/animations';

export const fader =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Step 1
      query(':enter, :leave', [
        style({
          position: 'absolute',
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'translateY(100%)',
        }),
      ]),
      // Step 2
      query(':enter', [
        animate('600ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          }))
      ]),
    ])
  ]);

export const slider =
  trigger('routeAnimations', [
    // transition('* => isLeft', slideTo('right')),
    // transition('* => isRight', slideTo('left')),
    transition('isRight => *', slideTo('left')),
    transition('isLeft => *', slideTo('right')),
    transition('isBottom => *', slideTo('top')),
    transition('isTop => *', slideTo('bottom')),
  ]);

function slideTo(direction) {
  const optional = { optional: true };
  if (direction === 'right' || direction == 'left') {
   return [
     query(':enter, :leave', [
       style({
         position: 'absolute',
         top: 0,
         [direction]: 0,
         width: '100%'
       })
     ], optional),
     query(':enter', [
       style({[direction]: '-100%'})
     ]),
     group([
       query(':leave', [
         animate('600ms ease', style({ [direction]: '100%'}))
       ], optional),
       query(':enter', [
         animate('600ms ease', style({ [direction]: '0%'}))
       ], optional),

     ]),
   ];
  }
 else {
   const sign = direction === 'top' ? '-':'';
   const oppSign = direction === 'top' ? '':'-';
   return [
     // Step 1
     query(':enter', [
       style({
         position: 'absolute',
         left: 0,
         width: '100%',
         transform: `translateY(${sign}100%)`,
       }),
     ]),
     query(':leave', [
       style({
         position: 'absolute',
         left: 0,
         width: '100%',
       }),
     ]),
     // Step 2
     query(':enter', [
       style({transform: `translateY(${sign}100%)`})
     ]),
     // Step 3
     group([
       query(':leave', [
         animate('.6s ease',
           style({
             transform: `translateY(${oppSign}100%)`
           }))
       ]),
       query(':enter', [
         animate('.6s ease',
           style({
             transform: 'translateY(0)'
           }))
       ]),
     ])

   ];
 }
}
