@Injectable({
  providedIn: 'root'
})
yabarsan -> başta yaratılıyo



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MobileLoggerServiceü
})
yabarsan -> sonradan yaratılıyo



Inject():

    InjectionToken act as a key





Dependency Providers:

with class      -> useClass, useExisting
with object     -> useValue


useClass:

    provides alternative class implementation
    mobileLoggerService not will be singleton anymore

useExisting: 

    same with UseClass
    covers singleton

    kullanabilmek icin dep'in rootta tanimlanmis olmasi gerekiyo


useValue:

    for alternative implementation from an object
    dynamic

useFactory:

    static
