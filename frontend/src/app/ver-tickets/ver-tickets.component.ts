import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { CommonModule } from '@angular/common'; 



@Component({
  selector: 'app-ver-tickets',
  templateUrl: './ver-tickets.component.html',
  styleUrls: ['./ver-tickets.component.css'],
 imports:[
  CommonModule
 ],
 standalone: true,
})




export class VerTicketsComponent implements OnInit {
  ticket: any;

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getTicket();
  }

  getTicket(): void {
    this.ticketService.getTicket().subscribe(
      (data) => {
        this.ticket = data;
      },
      (error) => {
       
        console.error('Error fetching ticket data:', error);
        console.log("No funciona");
      }
    );
  }
}
