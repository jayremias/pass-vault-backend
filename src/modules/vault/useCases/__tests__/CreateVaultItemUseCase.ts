import { VaultItemsRepositoryInMemory } from '@modules/vault/repositories/in-memory/VaultItemsRepositoryInMemory';
import { CreateVaultItemUseCase } from '../CreateVaultItemUseCase';

let createVaultItemUseCase: CreateVaultItemUseCase;
let vaultItemsRepositoryInMemory: VaultItemsRepositoryInMemory;

describe('CreateVaultItemUseCase', () => {
  beforeEach(() => {
    vaultItemsRepositoryInMemory = new VaultItemsRepositoryInMemory();
    createVaultItemUseCase = new CreateVaultItemUseCase(
      vaultItemsRepositoryInMemory
    );
  });
  it('Should be able to create a new Vault Item', async () => {
    const vaultItem = await createVaultItemUseCase.execute({
      value: 'test-item',
      is_private: false,
    });
    expect(vaultItem).toHaveProperty('id');
  });
});
