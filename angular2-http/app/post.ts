
//NOTE: if we do export class Post and look at the generated js file then we see that
//there is unnecessary code generated since JavaScript is dynamic. That is, it can 
//have parameters at run time. So we go for interface which is natively not available
//in javascript. This will implement compile time checking.

export interface Post {
	//Fields we need. Look at the Restful API. Note the data types.

	userId: number;
	id?: number;		// '?' denotes optional
	title: string;
	body: string;

}