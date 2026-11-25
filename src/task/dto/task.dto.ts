import { TaskSize, TaskComplexity } from '@prisma/client';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5)
  priority?: number;

  @IsOptional()
  @IsEnum(TaskSize)
  size?: TaskSize;

  @IsOptional()
  @IsEnum(TaskComplexity)
  complexity?: TaskComplexity;

  @IsDateString()
  deadline: string;

  @IsOptional()
  @IsArray()
  @IsUUID('4', {each: true})
  tagIds?: string[];
}