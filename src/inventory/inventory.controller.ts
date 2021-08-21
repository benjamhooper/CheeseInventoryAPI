import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Inventory')
@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  create(@Body() createInventoryDto: CreateInventoryDto) {
    return this.inventoryService.create(createInventoryDto);
  }

  @Get()
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.inventoryService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    const updatedInventoryItem = await this.inventoryService.update(
      +id,
      updateInventoryDto,
    );

    return updatedInventoryItem;
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const inventoryitem = await this.inventoryService.remove(+id);

    return inventoryitem;
  }
}
