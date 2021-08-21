import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { InventoryModule } from './inventory/inventory.module';
import Config from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(Config), InventoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
