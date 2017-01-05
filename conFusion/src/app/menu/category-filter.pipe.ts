import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(dishes: any[], catgoryFilter : string): any {
    return dishes.filter(value => value.category.toLowerCase().startsWith(catgoryFilter));
}

}
