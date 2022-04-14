import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ChartMultiple,
  ChartSingle,
} from '../models/thong-ke/chart-response.model';
import { ResponseStatistics } from '../models/thong-ke/response.model';

@Injectable({ providedIn: 'root' })
export class SwapTitleNameDashboardInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (req.url.search('/dashboard') > -1) {
            this.swap(event.body);
            return event.clone({ body: event.body });
          }
        }
        return event;
      })
    );
  }

  swap(obj: Object) {
    if (obj.hasOwnProperty('datas'))
      (obj as any).datas.forEach((data) => {
        let tmp = data.name;
        data.name = data.title;
        data.title = tmp;
        if ((data as Object).hasOwnProperty('series')) {
          (data as ChartMultiple).series.forEach((serie) => {
            let tmp = serie.name;
            serie.name = serie.title;
            serie.title = tmp;
          });
        }
      });
  }
}
