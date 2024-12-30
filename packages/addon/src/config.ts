import { Config } from '@aiostreams/types';
import { AddonDetail } from '@aiostreams/types';

export const allowedFormatters = ['gdrive', 'torrentio', 'torbox'];
export const allowedAddons = ['torrentio', 'comet', 'torbox', 'gdrive', 'custom'];

export const MAX_ADDONS = 10;
export const MAX_SIZE = 150000000000; // 1500GB
const MAX_TIMEOUT = 20000;
const MIN_TIMEOUT = 1000;

export const addonDetails: AddonDetail[] = [
  {
    name: 'Torrentio',
    id: 'torrentio',
    requiresService: false,
    supportedServices: ['realdebrid', 'alldebrid', 'premiumize', 'debridlink', 'torbox', 'offcloud', 'putio'],
    options: [
      {
        id: 'overrideName',
        required: false,
        label: 'Override Addon Name',
        description: 'Override the name of the Torrentio addon that shows up in the results',
        type: 'text',
      },
      {
        id: 'overrideUrl',
        required: false,
        label: 'Override URL',
        description:
          'Override the URL used to fetch streams from the torrentio addon. This option is incompatible with the useMultipleInstances option. By default, the URL is generated based on the selected services and their credentials. Use this option to override the URL with a custom URL.',
        type: 'text',
      },
      {
        id: 'useMultipleInstances',
        required: false,
        label: 'Use Multiple Instances',
        description:
          'Use multiple instances of the torrentio addon to fetch streams when using multiple services. With this option enabled, when you use multiple services, a separate request is made for each service. I recommend leaving this disabled, unless you want duplicate streams but with different services.',
        type: 'checkbox',
      },
      {
        id: 'indexerTimeout',
        required: false,
        label: 'Override Indexer Timeout',
        description: 'The timeout for fetching streams from the Torrentio addon. This is the time in milliseconds that the addon will wait for a response before timing out. Leave it empty to use the recommended timeout.',
        type: 'number',
        constraints: {
          min: MIN_TIMEOUT,
          max: MAX_TIMEOUT
        }
      },

    ],
  },
  {
    name: 'Comet',
    id: 'comet',
    requiresService: true,
    supportedServices: ['realdebrid', 'alldebrid', 'premiumize', 'debridlink', 'torbox'],
    options: [
      {
        id: 'prioritiseDebrid',
        required: false,
        label: 'Prioritise Debrid Service',
        description:
          'Prioritise a specific debrid service when fetching streams. This option is useful when you want to use a specific debrid service for fetching streams. By default, the addon will make a separate request for each debrid service. I highly recommend provding a value for this option as it will speed up the fetching process and remove redundant results.',
        type: 'select',
        options: [{ value: 'realdebrid', label: 'Real Debrid' }, { value: 'alldebrid', label: 'All Debrid' }, { value: 'premiumize', label: 'Premiumize' }, { value: 'debridlink', label: 'Debrid Link' }, { value: 'torbox', label: 'Torbox' }],
      },
      {
        id: 'overrideName',
        required: false,
        label: 'Override Addon Name',
        description: 'Override the name of the Comet addon that shows up in the results',
        type: 'text',
      },
      {
        id: 'overrideUrl',
        required: false,
        label: 'Override URL',
        description:
          'Override the URL used to fetch streams from the Comet addon. This option is incompatible with the prioritiseDebrid option. By default, the URL is generated based on the selected services and their credentials. Use this option to override the URL with a custom URL.',
        type: 'text',
      },
      {
        id: 'indexerTimeout',
        required: false,
        label: 'Override Indexer Timeout',
        description: 'The timeout for fetching streams from the Comet addon. This is the time in milliseconds that the addon will wait for a response before timing out. Leave it empty to use the recommended timeout.',
        type: 'number',
        constraints: {
          min: MIN_TIMEOUT,
          max: MAX_TIMEOUT
        }
      }
    ]
  },
  {
    name: 'MediaFusion',
    id: 'mediafusion',
    requiresService: false,
    supportedServices: ['realdebrid', 'alldebrid', 'premiumize', 'debridlink', 'torbox', 'offcloud'],
    options: [
      {
        id: 'prioritiseDebrid',
        required: false,
        label: 'Prioritise Debrid Service',
        description:
          'Prioritise a specific debrid service when fetching streams. This option is useful when you want to use a specific debrid service for fetching streams. By default, the addon will make a separate request for each debrid service. I highly recommend provding a value for this option as it will speed up the fetching process and remove redundant results.',
        type: 'select',
        options: [{ value: 'realdebrid', label: 'Real Debrid' }, { value: 'alldebrid', label: 'All Debrid' }, { value: 'premiumize', label: 'Premiumize' }, { value: 'debridlink', label: 'Debrid Link' }, { value: 'torbox', label: 'Torbox' }, { value: 'offcloud', label: 'Offcloud' }],
      },
      {
        id: 'overrideName',
        required: false,
        label: 'Override Addon Name',
        description: 'Override the name of the Media Fusion addon that shows up in the results',
        type: 'text',
      },
      {
        id: 'overrideUrl',
        required: false,
        label: 'Override URL',
        description:
          'Override the URL used to fetch streams from the Media Fusion addon. This option is incompatible with the prioritiseDebrid option. By default, the URL is generated based on the selected services and their credentials. Use this option to override the URL with a custom URL.',
        type: 'text',
      },
      {
        id: 'indexerTimeout',
        required: false,
        label: 'Override Indexer Timeout',
        description: 'The timeout for fetching streams from the Media Fusion addon. This is the time in milliseconds that the addon will wait for a response before timing out. Leave it empty to use the recommended timeout.',
        type: 'number',
        constraints: {
          min: 1000,
          max: 20000
        }
      }
    ]
  },
  {
    name: 'Torbox',
    id: 'torbox',
    requiresService: true,
    supportedServices: ['torbox'],
    options: [
      {
        id: 'indexerTimeout',
        required: false,
        label: 'Override Indexer Timeout',
        description: 'The timeout for fetching streams from the Torbox addon. This is the time in milliseconds that the addon will wait for a response from Torbox before timing out. Leave it empty to use the recommended timeout.',
        type: 'number',
        constraints: {
          min: 1000,
          max: 20000
        }
      },
      {
        id: 'overrideName',
        required: false,
        label: 'Override Addon Name',
        description: 'Override the name of the addon that shows up in the results. Leave it empty to use the default name of \'Torbox\'.',
        type: 'text',
      }
    ],
  },
  {
    name: 'Google Drive (Viren070)',
    id: 'gdrive',
    requiresService: false,
    supportedServices: [],
    options: [
      {
        id: 'addonUrl',
        required: true,
        label: 'Addon URL',
        description: 'The URL to the manifest.json file for your Google Drive addon. This would be the URL of your Cloudflare Worker which looks something like https://your-worker-name.your-subdomain.workers.dev/manifest.json',
        type: 'text',
      },
      {
        id: 'overrideName',
        required: false,
        label: 'Override Addon Name',
        description: 'Override the name of the addon that shows up in the results. Leave it empty to use the default name of \'GDrive\'.',
        type: 'text',
      },
      {
        id: 'indexerTimeout',
        required: false,
        label: 'Override Indexer Timeout',
        description: 'The timeout for fetching streams from the Google Drive addon in milliseconds. This is the time in milliseconds that the addon will wait for a response from your Cloudflare Worker before timing out. Leave it empty to use the recommended timeout.',
        type: 'number',
        constraints: {
          min: 1000,
          max: 20000
        }
      }
    ],
  },
  {
    name: 'Custom',
    id: 'custom',
    requiresService: false,
    supportedServices: [],
    options: [
      {
        id: 'name',
        required: true,
        description: 'The name of the custom addon. This is the name that will show up in the results',
        label: 'Name',
        type: 'text',
      },
      {
        id: 'url',
        required: true,
        description: 'The URL of the custom addon. This is the URL that will be used to fetch streams from the custom addon. The URL should point to the manifest.json file of the custom addon',
        label: 'URL',
        type: 'text',
      },
      {
        id: 'indexerTimeout',
        required: false,
        label: 'Override Indexer Timeout',
        description: 'The timeout for fetching streams from the custom addon in milliseconds',
        type: 'number',
        constraints: {
          min: 1000,
          max: 20000
        }
      }
    ],
  },
];

export const allowedLanguages = [
  'English',
  'Japanese',
  'Chinese',
  'Russian',
  'Arabic',
  'Portuguese',
  'Spanish',
  'French',
  'German',
  'Italian',
  'Korean',
  'Hindi',
  'Bengali',
  'Punjabi',
  'Marathi',
  'Gujarati',
  'Tamil',
  'Telugu',
  'Kannada',
  'Malayalam',
  'Thai',
  'Vietnamese',
  'Indonesian',
  'Turkish',
  'Hebrew',
  'Persian',
  'Ukrainian',
  'Greek',
  'Lithuanian',
  'Latvian',
  'Estonian',
  'Polish',
  'Czech',
  'Slovak',
  'Hungarian',
  'Romanian',
  'Bulgarian',
  'Serbian',
  'Croatian',
  'Slovenian',
  'Dutch',
  'Danish',
  'Finnish',
  'Swedish',
  'Norwegian',
  'Malay',
];

export const serviceCredentials = [
  {
    name: 'Real Debrid',
    id: 'realdebrid',
    credentials: [
      {
        label: 'API Key',
        id: 'apiKey',
        link: 'https://real-debrid.com/apitoken',
      },
    ],
  },
  {
    name: 'All Debrid',
    id: 'alldebrid',
    credentials: [
      {
        label: 'API Key',
        id: 'apiKey',
        link: 'https://alldebrid.com/apikeys',
      },
    ],
  },
  {
    name: 'Premiumize',
    id: 'premiumize',
    credentials: [
      {
        label: 'API Key',
        id: 'apiKey',
        link: 'https://www.premiumize.me/account',
      },
    ],
  },
  {
    name: 'Debrid Link',
    id: 'debridlink',
    credentials: [
      {
        label: 'API Key',
        id: 'apiKey',
        link: 'https://debrid-link.com/webapp/apikey',
      },
    ],
  },
  {
    name: 'Torbox',
    id: 'torbox',
    credentials: [
      {
        label: 'API Key',
        id: 'apiKey',
        link: 'https://torbox.app/settings',
      },
    ],
  },
  {
    name: 'Offcloud',
    id: 'offcloud',
    credentials: [
      {
        label: 'API Key',
        id: 'apiKey',
        link: 'https://offcloud.com/#/account',
      },
    ],
  },
  {
    name: 'put.io',
    id: 'putio',
    credentials: [
      {
        label: 'Client ID',
        id: 'clientId',
        link: 'https://put.io/oauth',
      },
      {
        label: 'Token',
        id: 'token',
        link: 'https://put.io/oauth',
      },
    ],
  },
  {
    name: 'Easynews',
    id: 'easynews',
    credentials: [
      {
        label: 'Username',
        id: 'username',
        link: 'https://www.easynews.com/',
      },
      {
        label: 'Password',
        id: 'password',
        link: 'https://www.easynews.com/',
      },
    ],
  },
];

export function validateConfig(config: Config): {
  valid: boolean;
  errorCode: string | null;
  errorMessage: string | null;
} {
  const createResponse = (
    valid: boolean,
    errorCode: string | null,
    errorMessage: string | null
  ) => {
    return { valid, errorCode, errorMessage };
  };

  // check for any duplicate addons where both the ID and options are the same
  const duplicateAddons = config.addons.filter(
    (addon, index) =>
      config.addons.findIndex(
        (a) =>
          a.id === addon.id &&
          JSON.stringify(a.options) === JSON.stringify(addon.options)
      ) !== index
  );

  if (duplicateAddons.length > 0) {
    return createResponse(
      false,
      'duplicateAddons',
      'Duplicate addons found. Please remove any duplicates'
    );
  }

  for (const addon of config.addons) {
    // if torbox addon is enabled, torbox service must be enabled and torbox api key must be set
    if (addon.id === 'torbox') {
      const torboxService = config.services.find(
        (service) => service.id === 'torbox'
      );
      if (!torboxService || !torboxService.enabled) {
        return createResponse(
          false,
          'torboxServiceNotEnabled',
          'Torbox service must be enabled to use the Torbox addon'
        );
      }
      if (!torboxService.credentials.apiKey) {
        return createResponse(
          false,
          'torboxApiKeyNotSet',
          'Torbox API Key must be set to use the Torbox addon'
        );
      }
    }
    const details = addonDetails.find((detail) => detail.id === addon.id);
    if (!details) {
      return createResponse(
        false,
        'invalidAddon',
        `Invalid addon: ${addon.id}`
      );
    }
    if (details.options) {
      for (const option of details.options) {
        if (option.required && !addon.options[option.id]) {
          return createResponse(
            false,
            'missingRequiredOption',
            `Option ${option.label} is required for addon ${addon.id}`
          );
        }

        if (
          option.id.toLowerCase().includes('url') &&
          addon.options[option.id]
        ) {
          console.log('checking url', addon.options[option.id]);
          try {
            new URL(addon.options[option.id] as string);
          } catch (_) {
            return createResponse(
              false,
              'invalidUrl',
              `Invalid URL for ${option.label}`
            );
          }
        }

        if (option.type === 'number' && addon.options[option.id]) {
          const input = addon.options[option.id];
          if (input !== undefined && !parseInt(input)) {
            return createResponse(
              false,
              'invalidNumber',
              `${option.label} must be a number`
            );
          } else if (input !== undefined) {
            const value = parseInt(input);
            const { min, max } = option.constraints || {};
            if ((min !== undefined && value < min) || (max !== undefined && value > max)) {
              return createResponse(
                false,
                'invalidNumber',
                `${option.label} must be between ${min} and ${max}`
              );
            }
          }
        }
      }
    }
  }

  if (!allowedFormatters.includes(config.formatter)) {
    return createResponse(
      false,
      'invalidFormatter',
      `Invalid formatter: ${config.formatter}`
    );
  }

  for (const service of config.services) {
    if (service.enabled) {
      const serviceDetail = serviceCredentials.find(
        (detail) => detail.id === service.id
      );
      if (!serviceDetail) {
        return createResponse(
          false,
          'invalidService',
          `Invalid service: ${service.id}`
        );
      }
      for (const credential of serviceDetail.credentials) {
        if (!service.credentials[credential.id]) {
          return createResponse(
            false,
            'missingCredential',
            `${credential.label} is required for ${service.name}`
          );
        }
      }
    }
  }

  // need at least one visual tag, resolution, quality
 
  if (
    !config.visualTags.some((tag) => Object.values(tag)[0]) ||
    !config.resolutions.some((resolution) => Object.values(resolution)[0]) ||
    !config.qualities.some((quality) => Object.values(quality)[0])
  ) {
    return createResponse(
      false,
      'noFilters',
      'At least one visual tag, resolution, and quality must be selected'
    );
  }

  if (config.minSize && config.maxSize) {
    if (config.minSize >= config.maxSize) {
      return createResponse(
        false,
        'invalidSizeRange',
        "Your minimum size limit can't be greater than or equal to your maximum size limit"
      );
    }
  }

  if (config.addons.length < 1) {
    return createResponse(
      false,
      'noAddons',
      'At least one addon must be selected'
    );
  }

  if (config.addons.length > MAX_ADDONS) {
    return createResponse(
      false,
      'tooManyAddons',
      `You can only select a maximum of ${MAX_ADDONS} addons`
    );
  }

  return createResponse(true, null, null);
}
