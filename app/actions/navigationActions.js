/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';

export function resetToHome(params) {
  NavigationService.reset('Home', params);
}

export function resetToDashboard(params) {
  NavigationService.reset('Dashboard', params);
}

export function navigateToAccountVerification(params) {
  NavigationService.navigate('AccountVerification', params);
}
