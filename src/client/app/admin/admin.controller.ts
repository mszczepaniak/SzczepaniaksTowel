namespace app.admin {
  'use strict';

  interface IAdminVm {
    title: string;
  }
  export class AdminController implements IAdminVm {
    title: string = 'Admin';

    static $inject: Array<string> = ['logger'];
    constructor(private logger: blocks.logger.Logger) {
      this.logger.info('Załadowany panel administratora');
    }
  }

  angular
    .module('app.admin')
    .controller('AdminController', AdminController);
}
