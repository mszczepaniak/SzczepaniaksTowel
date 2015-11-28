/*jshint node:true*/

namespace data {

    'use strict';

    interface IDevices {
        id: number;
        typ_komponentu: string;
        opis_menu: string;
        opis_rozwiniety: string;
        state: string;
    }

    export function getDevice() {
        var device: Array<IDevices> = [
      { id: 0, typ_komponentu: 'zarowka', opis_menu: 'swieci', opis_rozwiniety: 'swieci dobrze', state: 'wlaczona' },
      { id: 1, typ_komponentu: 'piec', opis_menu: 'grzeje', opis_rozwiniety: 'grzeje mocno', state: 'wylaczony' },
      { id: 2, typ_komponentu: 'grzejnik', opis_menu: 'dziala', opis_rozwiniety: 'dziala bardzo dobrze', state: 'wlaczony' },
      { id: 3, typ_komponentu: 'led', opis_menu: 'swieci', opis_rozwiniety: 'swieci na niebiesko', state: 'wylaczony' },
      { id: 4, typ_komponentu: 'zarowka', opis_menu: 'swieci', opis_rozwiniety: 'swieci dobrze', state: 'wlaczona' },
      { id: 5, typ_komponentu: 'piec', opis_menu: 'grzeje', opis_rozwiniety: 'grzeje mocno', state: 'wylaczony' },
      { id: 6, typ_komponentu: 'grzejnik', opis_menu: 'dziala', opis_rozwiniety: 'dziala bardzo dobrze', state: 'wlaczony' },
      { id: 7, typ_komponentu: 'led', opis_menu: 'swieci', opis_rozwiniety: 'swieci na niebiesko', state: 'wylaczony' },  
    ];
        return device;
    };
}

export = data;
