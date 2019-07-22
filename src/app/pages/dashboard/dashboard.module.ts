import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'
import { DashboardRouterModule } from './dashboard-routing.module'
import { CleanUIModule } from 'src/app/components/CleanUIComponents/cleanui.module'
import { ChartistModule } from 'ng-chartist'

// dashboard
import { DashboardAlphaComponent } from 'src/app/pages/dashboard/alpha/alpha.component'

const COMPONENTS = [DashboardAlphaComponent]

@NgModule({
  imports: [SharedModule, DashboardRouterModule, CleanUIModule, ChartistModule, FormsModule],
  declarations: [...COMPONENTS],
})
export class DashboardModule {}
