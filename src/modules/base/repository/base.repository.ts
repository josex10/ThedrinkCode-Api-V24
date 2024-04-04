import { BaseEntity, Repository } from 'typeorm';

export abstract class BaseRepository<T extends BaseEntity> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findById(clm_id: number): Promise<T> {
    return this.findById(clm_id);
  }

  public async create(entity: T): Promise<T> {
    const staging = this.repository.create(entity);
    return this.repository.save(staging);
  }

  async update(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async delete(clm_id: number): Promise<void> {
    await this.repository.delete(clm_id);
  }
}