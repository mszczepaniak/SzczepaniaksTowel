namespace app.layout {
  'use strict';

  export class ShellController {
    static $inject: Array<string> = ['$rootScope', '$timeout', 'config', 'logger'];
    constructor(private $rootScope: any,
      private $timeout: ng.ITimeoutService,
      private config: { appTitle: string },
      private logger: blocks.logger.Logger) {
      this.logger.success(config.appTitle + ' załadowany!', null);
      this.hideSplash();
      this.$rootScope.showSplash = true;
    }

    busyMessage = 'Proszę czekać ...';
    isBusy = true;
    navline = {
      title: this.config.appTitle,
      text: 'Szkic - Michał Szczepaniak',
      link: 'https://de.linkedin.com/in/szczepaniak'
    };

    hideSplash() {
      //Force a 1 second delay so we can see the splash.
      this.$timeout(() => { this.$rootScope.showSplash = false; }, 1000);
    }
  }

  angular
    .module('app.layout')
    .controller('ShellController', ShellController);
}
