export default config;

/**
 * Type declarations for
 *    import config from 'my-app/config/environment'
 */
declare const config: {
  environment: string;
  modulePrefix: string;
  podModulePrefix: string;
  locationType: string;
  rootURL: string;
  apiURL: string;
  loginURL: string;
  snapshotURL: string;
  apiConfig: {
    rootURL: string;
    snapshotURL: string;
    loginURL: string;
  };
  APP: Record<string, unknown>;
};
