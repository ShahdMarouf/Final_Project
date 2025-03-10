import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  
  {
    path:'checkout/:id',
    renderMode:RenderMode.Prerender,
    getPrerenderParams: async () => [
      { id: '123' },
      { id: '456' }
    ]
  }
  ,
  {
    path:'details/:id',
    renderMode:RenderMode.Prerender,
     getPrerenderParams: async () => [
      { id: '789' },
      { id: '101' }
    ]
  }
  ,
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
 
];
