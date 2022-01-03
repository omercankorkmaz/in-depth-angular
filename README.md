WITH

@Injectable({
  providedIn: 'root',
})
export class MobileLoggerService implements Logger {

  constructor(
    @Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>
  ) {
  }

}

1 ---------


providers: [
    { provide: MobileLoggerService },
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
]
export class AppComponent { }

providers: []
export class AppModule { }


2 ----------


providers: []
export class AppComponent { }


providers: [
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true }
],
export class AppModule { }
