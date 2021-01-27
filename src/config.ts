import { AppConfig } from './utils/types';

const config: AppConfig = {
    FILTER_FIELDS: ["input_type", "output_type", "predicate", "api_name", "source"],
    SMARTAPI_URL: 'https://smart-api.info/api/query?q=tags.name:translator&size=100'
}

export = config;