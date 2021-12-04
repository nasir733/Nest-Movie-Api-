import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
    getAllMovies(Movie:string): string {    
        return ` This action is going to return ${Movie}`;
    }
    getMovie(id: number): string {
        return `This action is going to return ${id}`;
    }


}
