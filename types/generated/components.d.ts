import type { Schema, Attribute } from '@strapi/strapi';

export interface FiltersFilters extends Schema.Component {
  collectionName: 'components_filters_filters';
  info: {
    displayName: 'where';
    description: '';
  };
  attributes: {
    colombia: Attribute.Boolean;
    argentina: Attribute.Boolean;
  };
}

export interface FiltersWhat extends Schema.Component {
  collectionName: 'components_filters_whats';
  info: {
    displayName: 'what';
  };
  attributes: {
    turbine: Attribute.Boolean;
    ventilator: Attribute.Boolean;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'filters.filters': FiltersFilters;
      'filters.what': FiltersWhat;
    }
  }
}
