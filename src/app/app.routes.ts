import { Routes } from '@angular/router';
import { PortfolioComponents } from './features/portfolio-components/portfolio-components';
import { LegalNotice} from './features/legal-notice/legal-notice';
import { PrivatPolicy } from './features/privat-policy/privat-policy';

export const routes: Routes = [
  { path: '', component: PortfolioComponents },
  { path: 'legal-notice', component: LegalNotice},
  { path: 'privacy-policy',component: PrivatPolicy},
  { path: '**', redirectTo: '' },
];