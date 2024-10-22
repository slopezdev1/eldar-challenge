import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-redirect',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.css'
})
export class RedirectComponent {

  listButton: Array<{label: string, route: string}> = [
    {
      label: 'Editar',
      route: 'edit'
    },
    {
      label: 'Crear',
      route: 'create'
    },
    {
      label: 'Eliminar',
      route: 'delete'
    },
    {
      label: 'Cancelar',
      route: 'cancel'
    },
  ]
}
