namespace app.dashboard {
  'use strict';

  interface IDashboardVm {
    news: { title: string, description: string };
    messageCount: number;
    people: Array<any>;
    title: string;
    getMessageCount: () => ng.IPromise<number>;
    getPeople: () => ng.IPromise<Array<any>>;
  }

  export class DashboardController implements IDashboardVm {
    static $inject: Array<string> = ['$q', 'dataservice', 'logger'];
    constructor(private $q: ng.IQService,
      private dataservice: app.core.IDataService,
      private logger: blocks.logger.Logger) {
      var promises = [this.getMessageCount(), this.getPeople()];
      this.$q.all(promises).then(function() {
        logger.info('Widok Panelu użytkownika');
      });
    }

    news = {
      title: 'Przypomnienie - aktualne zużycie',
      description: ''
    };
    messageCount: number = 0;
    people: Array<any> = [];
    title: string = 'Panel Główny';

    getMessageCount() {
      return this.dataservice.getMessageCount().then((data) => {
        this.messageCount = data;
        return this.messageCount;
      });
    }

    getPeople() {
      return this.dataservice.getPeople().then((data) => {
        this.people = data;
        return this.people;
      });
    }
  }

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController);
}
