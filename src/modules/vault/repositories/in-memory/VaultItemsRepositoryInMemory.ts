import { ICreateVaultItemDTO } from '@modules/vault/dtos/ICreateVaultItemDTO';
import { VaultItem } from '@modules/vault/infra/typeorm/entities/VaultItem';
import { IVaultItemsRepository } from '@modules/vault/repositories/IVaultItemsRepository';

class VaultItemsRepositoryInMemory implements IVaultItemsRepository {
  vault_items: VaultItem[] = [];

  async create({ value, is_private }: ICreateVaultItemDTO): Promise<VaultItem> {
    const vault_item = new VaultItem();
    Object.assign(vault_item, { private: is_private, value });
    this.vault_items.push(vault_item);
    return vault_item;
  }
}
export { VaultItemsRepositoryInMemory };
