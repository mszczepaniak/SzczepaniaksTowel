namespace app.dashboard {
  'use strict';

  interface IDashboardVm {
    news: { title: string, description: string };
    messageCount: number;
    device: Array<any>;
    title: string;
    getMessageCount: () => ng.IPromise<number>;
    getDevice: () => ng.IPromise<Array<any>>;
  }

  export class DashboardController implements IDashboardVm {
    static $inject: Array<string> = ['$q', 'dataservice', 'logger'];
    constructor(private $q: ng.IQService,
      private dataservice: app.core.IDataService,
      private logger: blocks.logger.Logger) {
      var promises = [this.getMessageCount(), this.getDevice()];
      this.$q.all(promises).then(function() {
        logger.info('Widok Panelu użytkownika');
      });
    }

    news = {
      title: 'Przypomnienie - aktualne zużycie',
      description: ''
    };
    messageCount: number = 0;
    device: Array<any> = [];
    title: string = 'Panel Główny';

    getMessageCount() {
      return this.dataservice.getMessageCount().then((data) => {
        this.messageCount = data;
        return this.messageCount;
      });
    }

    getDevice() {
      return this.dataservice.getDevice().then((data) => {
        this.device = data;
        return this.device;
      });
    }
  }

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);
}
