import { Component } from '@angular/core';
import { aggregateBy, AggregateDescriptor, AggregateResult } from '@progress/kendo-data-query';
import { dataWithUndefined, dataWithNull, dataWithMissing } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kendo-data-query-aggregates';
  public readonly aggregatesWithUndefined: AggregateResult;
  public readonly aggregatesWithNull: AggregateResult;
  public readonly aggregatesWithMissing: AggregateResult;

  public constructor() {
    const descriptors: AggregateDescriptor[] = [{ field: 'a', aggregate: 'sum' }];
    this.aggregatesWithUndefined = aggregateBy(dataWithUndefined, descriptors);
    this.aggregatesWithNull = aggregateBy(dataWithNull, descriptors);
    this.aggregatesWithMissing = aggregateBy(dataWithMissing, descriptors);
  }
}
