import { Pipe, PipeTransform } from '@angular/core'

@Pipe({ name: 'summary' })
export class SummaryPipe implements PipeTransform {
	transform(value: string, maxWords: number ) {
		var limit = (maxWords) ? maxWords : 50;
		if(value)
			return value.substring(0, limit) + "...";
	}
}