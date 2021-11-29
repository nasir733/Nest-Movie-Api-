import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAllMovies(): string {
        return 'This action returns all movies';
    }

    @Get(':id')
    getOne(@Param('id')movieId:number):string{
        return `This action returns one movie with id ${movieId}`;
    }
}
