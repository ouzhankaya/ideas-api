import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { IdeaDTO } from './idea.dto';
import { IdeaService } from './idea/idea.service';

@Controller('idea')
export class IdeaController {

    constructor(private ideaService: IdeaService) {}

    @Get()
    showAllIdeas(){
        return this.ideaService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createIdea(@Body() data: IdeaDTO){
        return this.ideaService.create(data);
    }

    @Get(':id')
    readIdea(@Param('id') id: string){
        return this.ideaService.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>){
        return this.ideaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string){
        return this.ideaService.destroy(id);
    }
}
