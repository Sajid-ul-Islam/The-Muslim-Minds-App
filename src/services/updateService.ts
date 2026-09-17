import * as Updates from 'expo-updates';

export interface UpdateCheckResult {
  isAvailable: boolean;
  message?: string;
  manifest?: any;
  error?: string;
}

export interface UpdateMetadata {
  isEnabled: boolean;
  isEmbeddedLaunch: boolean;
  updateId: string | null;
  runtimeVersion: string | null;
  channel: string | null;
  createdAt: Date | null;
  emergencyLaunch: boolean;
}

export const updateService = {
  /**
   * Retrieves metadata about the current running update.
   */
  getMetadata(): UpdateMetadata {
    return {
      isEnabled: Updates.isEnabled,
      isEmbeddedLaunch: Updates.isEmbeddedLaunch,
      updateId: Updates.updateId || null,
      runtimeVersion: typeof Updates.runtimeVersion === 'string' ? Updates.runtimeVersion : null,
      channel: Updates.channel || null,
      createdAt: Updates.createdAt || null,
      emergencyLaunch: Updates.emergencyLaunchReason !== null,
    };
  },

  /**
   * Checks for an available update. If found, fetches it automatically.
   */
  async checkAndFetchUpdate(): Promise<UpdateCheckResult> {
    if (!Updates.isEnabled || __DEV__) {
      return {
        isAvailable: false,
        message: 'OTA updates are active in standalone & preview builds. (Disabled in dev/Expo Go)',
      };
    }

    try {
      const check = await Updates.checkForUpdateAsync();
      if (check.isAvailable) {
        const fetchResult = await Updates.fetchUpdateAsync();
        return {
          isAvailable: true,
          manifest: fetchResult.manifest,
          message: 'New update downloaded and ready to apply.',
        };
      }
      return {
        isAvailable: false,
        message: 'The app is up to date.',
      };
    } catch (err: any) {
      console.warn('[OTA Updates] Check failed:', err?.message || err);
      return {
        isAvailable: false,
        error: err?.message || 'Failed to check for updates.',
      };
    }
  },

  /**
   * Reloads the app to apply the newly downloaded update.
   */
  async applyUpdate(): Promise<void> {
    if (!Updates.isEnabled) {
      return;
    }
    await Updates.reloadAsync();
  },
};
