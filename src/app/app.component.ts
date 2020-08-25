import { Component } from '@angular/core';
import { aggregateBy, AggregateDescriptor, AggregateResult } from '@progress/kendo-data-query';
import { data, dataWithMissingChild, dataWithMissingParent } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-data-query-aggregates';
  public readonly aggregates: AggregateResult;
  public readonly aggregatesChildMissing: AggregateResult;
  public readonly aggregatesParentMissing: AggregateResult;

  public constructor() {
    const descriptors: AggregateDescriptor[] = [{ field: 'c.d', aggregate: 'sum' }];
    this.aggregates = aggregateBy(data, descriptors);
    this.aggregatesChildMissing = aggregateBy(dataWithMissingChild, descriptors);
    this.aggregatesParentMissing = aggregateBy(dataWithMissingParent, descriptors);
  }
}
