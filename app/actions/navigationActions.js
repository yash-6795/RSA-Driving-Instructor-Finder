/*
 * Reducer actions related with navigation
 */
import NavigationService from 'app/navigation/NavigationService';


/*
 * Reset Navigations
 */

export function resetToHome(params) {
  NavigationService.reset('Home', params);
}

export function resetToAccountVerification(params) {
  NavigationService.reset('AccountVerification', params);
}

export function resetToDashboard(params) {
  NavigationService.reset('Dashboard', params);
}

export function resetToLogin(params) {
  NavigationService.reset('Login', params);
}


/*
 * navigate Navigations
 */

export function navigateToAccountVerification(params) {
  NavigationService.navigate('AccountVerification', params);
}
