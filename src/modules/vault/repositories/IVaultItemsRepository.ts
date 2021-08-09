import { VaultItem } from '../infra/typeorm/entities/VaultItem';
import { ICreateVaultItemDTO } from '@modules/vault/dtos/ICreateVaultItemDTO';

interface IVaultItemsRepository {
  create({ is_private, value }: ICreateVaultItemDTO): Promise<VaultItem>;
}

export { IVaultItemsRepository };
