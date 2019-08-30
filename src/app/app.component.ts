// import { Component, ViewEncapsulation } from '@angular/core';
// import { doctorData } from './data';
// import { addClass, extend } from '@syncfusion/ej2-base';
// import {EventSettingsModel, View, GroupModel, ResourceDetails, TreeViewArgs, PopupOpenEventArgs, ScheduleComponent, ActionEventArgs,
//     EventFieldsMapping, RenderCellEventArgs, MonthService, WorkWeekService} from '@syncfusion/ej2-angular-schedule';

// @Component({
//     selector: 'app-root',
//     templateUrl: 'app.component.html',
//     styleUrls: ['app.component.css'],
//     encapsulation: ViewEncapsulation.None,
//     providers: [MonthService, WorkWeekService]
// })

// export class AppComponent {
//     public data: Object[] = <Object[]>extend([], doctorData, null, true);
//     public selectedDate: Date = new Date(2018, 3, 1);
//     public currentView: View = 'WorkWeek';
//     public allowResizing: boolean = false;
//     public allowDragDrop: boolean = false;
//     public resourceDataSource: Object[] = [

//         { text: 'Will Smith', id: 1, color: '',  workDays: [1, 2, 3, 4,],startHour: '02:00', endHour: '07:00' },
//         { text: 'Alice', id: 2, color: '', workDays: [1, 3, 5], startHour: '12:00', endHour: '08:00' },
//         { text: 'Robson', id: 3, color: '', startHour: '11:00', endHour: ':00' }
//     ];
//     public group: GroupModel = { resources: ['Doctors'] };
//     public eventSettings: EventSettingsModel = {
//         dataSource: this.data,
//         fields: {
//             subject: { title: 'Service Type', name: 'Subject' },
//             location: { title: 'Patient Name', name: 'Location' },
//             description: { title: 'Summary', name: 'Description' },
//             startTime: { title: 'From', name: 'StartTime' },
//             endTime: { title: 'To', name: 'EndTime' }
//         }
//     };
//     // @ViewChild('scheduleObj')
//     public scheduleObj: ScheduleComponent;

//     constructor() {

//     }

//     getDoctorName(value: ResourceDetails | TreeViewArgs): string {
//         return ((value as ResourceDetails).resourceData) ?
//             (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string
//             : (value as TreeViewArgs).resourceName;
//     }
//     getDoctorImage(value: ResourceDetails | TreeViewArgs): string {
//         let resourceName: string = this.getDoctorName(value);
//         return resourceName.replace(' ', '-').toLowerCase();
//     }
//     getDoctorLevel(value: ResourceDetails | TreeViewArgs): string {
//         let resourceName: string = this.getDoctorName(value);
//         return (resourceName === 'Will Smith') ? 'Cardiologist' : (resourceName === 'Alice') ? 'Neurologist' : 'Orthopedic Surgeon';
//     }

//     onActionBegin(args: ActionEventArgs): void {
//         let isEventChange: boolean = (args.requestType === 'eventChange');
//         if ((args.requestType === 'eventCreate' && (<Object[]>args.data).length > 0) || isEventChange) {
//             let eventData: { [key: string]: Object } = (isEventChange) ? args.data as { [key: string]: Object } :
//                 args.data[0] as { [key: string]: Object };
//             let eventField: EventFieldsMapping = this.scheduleObj.eventFields;
//             let startDate: Date = eventData[eventField.startTime] as Date;
//             let endDate: Date = eventData[eventField.endTime] as Date;
//             let resourceIndex: number = [1, 2, 3].indexOf(eventData.DoctorId as number);
//             args.cancel = !this.isValidateTime(startDate, endDate, resourceIndex);
//             if (!args.cancel) {
//                 args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate, resourceIndex);
//             }
//         }
//     }

//     isValidateTime(startDate: Date, endDate: Date, resIndex: number): boolean {
//         let resource: ResourceDetails = this.scheduleObj.getResourcesByIndex(resIndex);
//         let startHour: number = parseInt(resource.resourceData.startHour.toString().slice(0, 2), 10);
//         let endHour: number = parseInt(resource.resourceData.endHour.toString().slice(0, 2), 10);
//         return (startHour <= startDate.getHours() && endHour >= endDate.getHours());
//     }

//     onPopupOpen(args: PopupOpenEventArgs): void {
//         if (args.target && args.target.classList.contains('e-work-cells')) {
//             args.cancel = !args.target.classList.contains('e-work-hours');
//         }
//     }

//     onRenderCell(args: RenderCellEventArgs): void {
//         if (args.element.classList.contains('e-work-hours') || args.element.classList.contains('e-work-cells')) {
//             addClass([args.element], ['willsmith', 'alice', 'robson'][parseInt(args.element.getAttribute('data-group-index'), 10)]);
//         }
//     }
// }




import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Team2';
}
