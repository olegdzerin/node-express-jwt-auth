import {domElements} from './domElement.js';

export class Init {
    constructor( data, countCar) {
        this.countCar = countCar;
        this.data = data;
        this.countAddingElement = 0;
    }
    resultTemplateSbFn(item, array) {
        return `<div class="col-md-3  col-sm-4 col-xl-2"> \
        <img src="${item.photo}" alt="${item.category}" class="img-thumbnail">\
        <div class="info-wrapper">\ 
         <div class="text-muted"> ${item.category}</div>\
        <div class="text-muted top-padding">${item.description}</div>\
        <div class="text-muted">${item.price}</div>\
        <div class="col-lg-12 col-md-12 text-center ">\
        <div class="text-muted invisible" id="getId" >${item.id}</div>\
        <button class="btn btn-default select"  data-toggle="tooltip" data-placement="left"  title="Вибрати">Вибрати</button>\
        </div>\
        </div>\
        </div>`;
    }
    resultTemplate() {
        var resultHTML = "";
        const that = this;
        this.data.forEach(function(item){  
            resultHTML = resultHTML + that.resultTemplateSbFn(item);
        })
        return resultHTML;
    }
}