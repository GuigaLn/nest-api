import { ulid } from 'ulid';
import { ULIDContract } from './contract/ULIDContract';

export class ULID implements ULIDContract {
  get() {
    return ulid();
  }
}
