import { VaultItem } from '../infra/typeorm/entities/VaultItem';
import { IVaultItemsRepository } from '../repositories/IVaultItemsRepository';

interface IRequest {
  value: string;
  is_private?: boolean;
}

class CreateVaultItemUseCase {
  constructor(private vaultItemRepository: IVaultItemsRepository) {}
  async execute({ value, is_private = true }: IRequest): Promise<VaultItem> {
    const vaultItem = await this.vaultItemRepository.create({
      value,
      is_private,
    });
    return vaultItem;
  }
}

export { CreateVaultItemUseCase };
