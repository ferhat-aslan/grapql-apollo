import { Component, Input } from '@angular/core';
import { Repository } from 'src/app/models/repository';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
@Input() public repository!: Repository;
}
