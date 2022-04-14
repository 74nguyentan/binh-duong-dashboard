import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { CrudBaseService } from 'nest-crud-typeorm-client';

@Injectable({ providedIn: 'root' })
export class ExcelService {
    xuatNghiaTrangPhuLuc3(){
        const url = `${environment.apiUrl}/nghia-trang/bao-cao/phuluc3`;
        return this.exportExcel({method:'GET',endpoint:url,filename:'bao cao nghia trang.xlsx'})
    }
    xuatMauBaoCao(mauBaoCao: string) {
        const url = `${environment.apiUrl}/bao-cao-do-an/${mauBaoCao}`;
        return this.exportExcel({ method: 'GET', endpoint: url, filename: `Bao cao ${mauBaoCao}.xlsx` })
    } 
    async exportExcel(param: {
        method: 'GET' | 'POST',
        endpoint: string,
        body?: BodyInit,
        filename?: string
    }): Promise<boolean> {
        const res = await fetch(param.endpoint, {
            method: param.method,
            body: param.body,
            headers: {
                'Access-Control-Expose-Headers': 'Content-Disposition'
            }
        });
        if (res.status === 200) {
            const blob = await res.blob();
            const disposition = res.headers.get('Content-Disposition');
            let filename = param.filename;
            if (!filename) {
                if (disposition && disposition.indexOf('attachment') !== -1) {
                    var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                    var matches = filenameRegex.exec(disposition);
                    if (matches != null && matches[1]) { filename = matches[1].replace(/['"]/g, ''); }
                }
            }
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();
            a.remove();  //afterwards we remove the element again         
        }
        return true;
    }
}