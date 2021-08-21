import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { Inventory } from './entities/inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  create(createInventoryDto: CreateInventoryDto): Promise<Inventory> {
    const newInventoryItem =
      this.inventoryRepository.create(createInventoryDto);
    return this.inventoryRepository.save(newInventoryItem);
  }

  findAll(): Promise<Inventory[]> {
    return this.inventoryRepository.find();
  }

  findOne(id: number): Promise<Inventory> {
    return this.inventoryRepository.findOne(id);
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    const inventoryItem = await this.findOne(id);

    inventoryItem.cheeseType = updateInventoryDto.cheeseType;
    inventoryItem.stock = updateInventoryDto.stock;

    return this.inventoryRepository.save(inventoryItem);
  }

  async remove(id: number) {
    const inventoryItem = await this.findOne(id);

    return this.inventoryRepository.remove(inventoryItem);
  }
}
