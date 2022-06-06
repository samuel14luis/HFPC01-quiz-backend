import { Injectable } from '@nestjs/common';
import { AuthBootstrap } from 'src/auth/auth.bootstrap';

@Injectable()
export class BootstrapService {

  constructor(private readonly authBootstrap: AuthBootstrap) {}

  async loadData() {
    await this.authBootstrap.loadData();
  }
}
