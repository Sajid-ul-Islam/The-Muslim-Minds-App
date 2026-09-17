import { useState, useEffect, useCallback } from 'react';
import { updateService, UpdateMetadata, UpdateCheckResult } from '../services/updateService';

export function useOTAUpdate(autoCheckOnMount = true) {
  const [isChecking, setIsChecking] = useState(false);
  const [isUpdateReady, setIsUpdateReady] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [metadata, setMetadata] = useState<UpdateMetadata>(() => updateService.getMetadata());

  const checkForUpdate = useCallback(async (manual = false): Promise<UpdateCheckResult> => {
    setIsChecking(true);
    setStatusMessage(manual ? 'Checking for updates...' : '');

    try {
      const result = await updateService.checkAndFetchUpdate();
      if (result.isAvailable) {
        setIsUpdateReady(true);
        setStatusMessage(result.message || 'New update is ready.');
      } else {
        setStatusMessage(result.message || result.error || 'Up to date.');
      }
      setMetadata(updateService.getMetadata());
      return result;
    } catch (err: any) {
      const errorMsg = err?.message || 'Error checking for updates.';
      setStatusMessage(errorMsg);
      return { isAvailable: false, error: errorMsg };
    } finally {
      setIsChecking(false);
    }
  }, []);

  const reloadApp = useCallback(async () => {
    try {
      await updateService.applyUpdate();
    } catch (err) {
      console.warn('[OTA Updates] Reload failed:', err);
    }
  }, []);

  const dismissUpdate = useCallback(() => {
    setIsUpdateReady(false);
  }, []);

  useEffect(() => {
    if (autoCheckOnMount) {
      checkForUpdate(false);
    }
  }, [autoCheckOnMount, checkForUpdate]);

  return {
    isChecking,
    isUpdateReady,
    statusMessage,
    metadata,
    checkForUpdate,
    reloadApp,
    dismissUpdate,
  };
}
