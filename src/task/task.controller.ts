import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service.js';
import { CreateTaskDto } from './dto/task.dto.js';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto)
  }
}
