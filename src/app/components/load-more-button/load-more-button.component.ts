import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-load-more-button',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.scss'],
})
export class LoadMoreButtonComponent {
  @Input() nextPage!: string;
  @Input() loading!: boolean | null;
  @Output() onClick = new EventEmitter<string>();
}
