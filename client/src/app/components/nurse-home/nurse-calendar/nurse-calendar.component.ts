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
import { NurseService } from 'src/app/services/nurse.service';
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
  selector: 'app-nurse-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nurse-calendar.component.html',
  styleUrls: ['./nurse-calendar.component.css']
})
export class NurseCalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();
  daystart: Number;
  dayend: Number;
  modalData: {
    action: string;
    event: CalendarEvent;
  };
  excludeDays: number[] = [0, 6];

  weekStartsOn = DAYS_OF_WEEK.SUNDAY;

  constructor(private nurseService: NurseService,
		private router: Router,
    private activatedRoute: ActivatedRoute,
    private modal: NgbModal,
    private cookieService: CookieService){}

  ngOnInit() {
    let user = JSON.parse(this.cookieService.get('user'));
    this.daystart = parseInt(user.shiftStart);
    this.dayend = parseInt(user.shiftEnd);
    this.nurseService.getVacations().subscribe(
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
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
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
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
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
        start: new Date(appointment.startDate*1000),
        end: new Date(appointment.endDate*1000),
        title: "Vacation",
        color: colors.blue,
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
    close(){
      this.modal.dismissAll();
    }

}
