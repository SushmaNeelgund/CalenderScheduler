import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line: max-line-length
import { View, EventSettingsModel, GroupModel, ResourceDetails, TreeViewArgs, ActionEventArgs, EventFieldsMapping, PopupOpenEventArgs, RenderCellEventArgs } from '@syncfusion/ej2-schedule';

import { doctorData } from '../data';
import { ScheduleComponent } from '@syncfusion/ej2-angular-schedule';
import { addClass } from '@syncfusion/ej2-base';
import { extend } from 'webdriver-js-extender';


@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrls: ['./sync.component.css']
})
export class SyncComponent {
// for container

  public data: Object[] = <Object[]>extend([], doctorData);
    public selectedDate: Date = new Date(2018, 3, 1);

    public currentView: View = 'WorkWeek';
    public allowResizing: boolean = false;
    public allowDragDrop: boolean = false;
    public resourceDataSource: Object[] = [

        { text: 'Hema@ 38 Astoria', id: 1, color: '#ea7a57',  workDays: [1, 2],startHour: '02:00', endHour: '07:00', },
        { text: 'Hema@ 45 DEAN', id: 2, color: 'rgb(53, 124, 210)', workDays: [1, 3, 5], startHour: '12:00', endHour: '08:00'},
        { text: 'Hema@ 45 West NY ', id: 3, color: 'green', startHour: '11:00', endHour: ':00' },
    ];

    // For displaying Providers and Locations
     public group: GroupModel = { resources: ['Doctors'] };
    public eventSettings: EventSettingsModel = {dataSource: this.data,
        fields: {
            subject: { title: 'Service Type', name: 'Subject' },
            location: { title: 'Patient Name', name: 'Location' },
            description: { title: 'Summary', name: 'Description' },
            startTime: { title: 'From', name: 'StartTime' },
            endTime: { title: 'To', name: 'EndTime' }
        }
    };
    // @ViewChild('scheduleObj')
    //Scheduled Appointemnets
        public scheduleObj: ScheduleComponent;

  constructor() { }

  getDoctorName(value: ResourceDetails | TreeViewArgs): string {
    return ((value as ResourceDetails).resourceData) ?
        (value as ResourceDetails).resourceData[(value as ResourceDetails).resource.textField] as string
        : (value as TreeViewArgs).resourceName;
}
// getDoctorImage(value: ResourceDetails | TreeViewArgs): string {
//     let resourceName: string = this.getDoctorName(value);
//     return resourceName.replace(' ', '-').toLowerCase();
// }
//For fetching providers and location
getDoctorLevel(value: ResourceDetails | TreeViewArgs): string {
    let resourceName: string = this.getDoctorName(value);
    return (resourceName === 'Will Smith') ? 'Capiola david' :  ( resourceName === '') ? '' : 'Dr Capiola David';
}
//Not getting for what it is working
// onActionBegin(args: ActionEventArgs): void {
//     let isEventChange: boolean = (args.requestType === 'eventChange');
//     if ((args.requestType === 'eventCreate' && (<Object[]>args.data).length > 0) || isEventChange) {
//         let eventData: { [key: string]: Object } = (isEventChange) ? args.data as { [key: string]: Object }:
//             args.data[0] as { [key: string]: Object };
//         let eventField: EventFieldsMapping = this.scheduleObj.eventFields;
//         let startDate: Date = eventData[eventField.startTime] as Date;
//         let endDate: Date = eventData[eventField.endTime] as Date;
//         let resourceIndex: number = [1, 2, 3].indexOf(eventData.DoctorId as number);
//         args.cancel = !this.isValidateTime(startDate, endDate, resourceIndex);
//         if (!args.cancel) {
//             args.cancel = !this.scheduleObj.isSlotAvailable(startDate, endDate, resourceIndex);
//         }
//     }
// }

isValidateTime(startDate: Date, endDate: Date, resIndex: number): boolean {
    let resource: ResourceDetails = this.scheduleObj.getResourcesByIndex(resIndex);
    let startHour: number = parseInt(resource.resourceData.startHour.toString().slice(0, 0), 1);
    let endHour: number = parseInt(resource.resourceData.endHour.toString().slice(0, 0), 1);
    return (startHour <= startDate.getHours() && endHour >= endDate.getHours());
}

// onPopupOpen(args: PopupOpenEventArgs): void {
//     if (args.target && args.target.classList.contains('e-work-cells')) {
//         args.cancel = !args.target.classList.contains('e-work-hours');
//     }
// }

onRenderCell(args: RenderCellEventArgs): void {
    if (args.element.classList.contains('e-work-hours') || args.element.classList.contains('e-work-cells')) {
        addClass([args.element], ['willsmith', 'alice', 'robson'][parseInt(args.element.getAttribute('data-group-index'), 10)]);
    }
}

}
