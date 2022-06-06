import { Injectable } from '@nestjs/common';
import { AuthBootstrap } from 'src/auth/auth.bootstrap';
import { UserTypeBootstrap } from 'src/user-type/user-type.bootstrap';

@Injectable()
export class BootstrapService {

  constructor(
    private readonly authBootstrap: AuthBootstrap,
    private readonly userTypeBootstrap: UserTypeBootstrap
    ) {}

  async loadData() {
    await this.userTypeBootstrap.loadData();
    await this.authBootstrap.loadData();
  }
}
