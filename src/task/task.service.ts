import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.dto.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) {}

  async create (createTaskDto: CreateTaskDto) {
    const { tagIds, ...taskData } = createTaskDto;

    return this.prisma.task.create({
      data: {
        ...taskData,
        tags: tagIds && tagIds.length > 0
          ? { connect: tagIds.map(id => ({id})) }
          : undefined
      }
    })
  }

}
