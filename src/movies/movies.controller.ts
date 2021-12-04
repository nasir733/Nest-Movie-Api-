import { Controller, Get, Param, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService: MoviesService) {}
    @Get()
    getAllMovies(@Query('movie')Movie:string): string {
        return this.moviesService.getAllMovies(Movie);
    }


    @Get(':id')
    getOne(@Param('id')movieId:number):string{
        return this.moviesService.getMovie(movieId);
    }
}
