import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, mergeMap, toArray } from 'rxjs/operators';
import { LocalStorage, StorageMap, JSONSchema } from '@ngx-pwa/local-storage';

interface Data {
  title: string;
}

@Component({
  selector: 'app-page-goals',
  templateUrl: './page-goals.component.html',
  styleUrls: ['./page-goals.component.css']
})
export class PageGoalsComponent implements OnInit {

  getItem$!: Observable<Data | null>;
  schemaError$!: Observable<string | null>;
  removeItem$!: Observable<string | null>;
  clear: string | null = 'hello world';
  size$!: Observable<number>;
  length$!: Observable<number>;
  keys$!: Observable<string[]>;
  has$!: Observable<boolean>;
  service$!: Observable<string | undefined>;

  constructor(private localStorage: LocalStorage, private storageMap : StorageMap) { }

  ngOnInit(): void {

  }

}
