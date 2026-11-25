import { Controller } from '@nestjs/common';
import { TagService } from './tag.service.js';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
}
