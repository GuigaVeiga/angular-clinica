import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  calendarPlugins = [dayGridPlugin];

  constructor() { }

  ngOnInit(): void {
  }

}
