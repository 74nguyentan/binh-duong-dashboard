import { Directive, ElementRef, ViewChild } from '@angular/core'; 
import { ChartComponent } from '@swimlane/ngx-charts'; 
 
@Directive({ 
  selector: '[gaFullscreenElement]', 
}) 
export class FullscreenElementDirective { 
  constructor(private ref: ElementRef<HTMLElement>) { 
    const btnExpand = document.createElement('a'); 
    btnExpand.href = 'javascript:void(0)'; 
    const style = this.ref.nativeElement.style; 
    style.position = 'relative'; 
    btnExpand.style.position = 'absolute';  
    btnExpand.style.right = '15px'; 
    btnExpand.style.top = '15px'; 
    btnExpand.style.zIndex = '99'; 
    btnExpand.innerHTML = '<i class="fas fa-expand"></i>'; 
    let isExpand = false; 
    const oldStyle = { ...style }; 
    let oldWidth = this.ref.nativeElement.offsetWidth; 
    let oldHeight = this.ref.nativeElement.offsetHeight; 
    btnExpand.addEventListener('click', () => { 
      if (isExpand) { 
        style.minWidth = oldStyle.minWidth; 
        style.minHeight = oldStyle.minHeight; 
        style.maxWidth = oldWidth + 'px'; 
        style.maxHeight = oldHeight + 'px'; 
        style.position = oldStyle.position; 
        style.top = oldStyle.top; 
        style.left = oldStyle.left; 
        style.zIndex = oldStyle.zIndex; 
        style.margin = oldStyle.margin; 
      } else { 
        oldWidth = this.ref.nativeElement.offsetWidth; 
        oldHeight = this.ref.nativeElement.offsetHeight; 
        style.setProperty('min-height', '100vh', 'important'); 
        style.setProperty('min-width', '100vw', 'important'); 
        style.position = 'absolute'; 
        style.top = '0'; 
        style.left = '0'; 
        style.zIndex = '99999'; 
        style.margin = '0'; 
      }
      isExpand = !isExpand; 
      btnExpand.innerHTML = isExpand 
        ? '<i class="fas fa-compress"></i>' 
        : '<i class="fas fa-expand"></i>'; 
      window.dispatchEvent(new Event('resize')); 
    });
    this.ref.nativeElement.appendChild(btnExpand); 
  }
}
