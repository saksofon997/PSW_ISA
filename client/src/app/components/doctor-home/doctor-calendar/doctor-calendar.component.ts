import { CookieService } from 'ngx-cookie-service';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor.service';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  //styleUrls: ['./../../../../styles.css'],
  templateUrl: './doctor-calendar.component.html'
})
export class DoctorCalendarComponent implements OnInit{
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  daystart: Number;
  dayend: Number;
  modalData: {
    appointment: any;
    action: string;
  };
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  constructor(private doctorService: DoctorService,
		private router: Router,
    private activatedRoute: ActivatedRoute,
    private modal: NgbModal,
    private cookieService: CookieService){}

  ngOnInit(): void {
    let user = JSON.parse(this.cookieService.get('user'));
    this.daystart = parseInt(user.shiftStart);
    this.dayend = parseInt(user.shiftEnd);
    this.doctorService.getAppointments().subscribe(
      (data) => {
       this.populateCalendarEvents(data);
      },
      (error) => { 
        alert(error);
      }
    );

    this.doctorService.getVacations().subscribe(
      (data) => {
       this.populateCalendarEvents(data);
      },
      (error) => { 
        alert(error);
      }
    );
  }

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = false;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    let appointment = {}
    this.doctorService.getOneAppointment(event.id).subscribe(
      (data) => {
        appointment=data;
        this.modalData = { appointment, action };
        this.modal.open(this.modalContent, { size: 'lg' });
      },
      (error) => { 
        alert(error);
      }
    );
    
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  // TODO: Izdvojiti operacije, preglede i godisnje odmore po bojama i u kodu
  populateCalendarEvents(data){
    data.forEach(appointment => {
      var  eventToAdd = {
        id: appointment.id,
        start: new Date(appointment.startingDateAndTime*1000),
        end: new Date(appointment.endingDateAndTime*1000),
        title: appointment.typeOfExamination.name,
        color: colors.red,
        actions: this.actions
      }
      this.events.push(eventToAdd);
    });
  }
  populateVacations(data){
    data.forEach(vacation => {
      var  eventToAdd = {
        id: vacation.id,
        start: new Date(vacation.startingDateAndTime*1000),
        end: new Date(vacation.endingDateAndTime*1000),
        title: vacation.typeOfExamination.name,
        color: colors.red,
        actions: this.actions
      }
      this.events.push(eventToAdd);
    });
  }
  
	timeConverter(a){
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var year = a.getFullYear();
		var month = months[a.getMonth()];
		var date = a.getDate();
		var hour = a.getHours();
		var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(); 
		var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
		var time = date + '. ' + month + ' ' + year + '. ' + hour + ':' + min;
		return time;
    }
    startExamination(){
      this.modal.dismissAll();
      //TODO
      //this.router.navigate(['../examination'], { relativeTo: this.activatedRoute, state: {data: clinic}});
    }
    close(){
      this.modal.dismissAll();
    }
}
