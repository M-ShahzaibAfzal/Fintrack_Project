import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  userName: string | null = null;

  items: any[] = [
    {
      label: 'Income',
      icon: 'pi pi-plus',
      routerLink: ['/income']
    },
    {
      label: 'Expenses',
      icon: 'pi pi-dollar',
      routerLink: ['/expenses']  
    },
    {
      label: 'Savings',
      icon: 'pi pi-wallet',
      routerLink: ['/savings']
    },
    {
      label: 'Update User',
      icon: 'pi pi-user-edit',
      routerLink: ['/update-user']
    },
    {
      label: 'Delete User',
      icon: 'pi pi-trash',
      routerLink: ['/delete-user']
    },
    {
      label: 'Financial Reports',  // New Financial Reports menu option
      icon: 'pi pi-chart-line',
      routerLink: ['/financial-reports']
    },

    {
      label: 'Sorting',  // New Financial Reports menu option
      icon: 'pi pi-chart-line',
      routerLink: ['/sorting']
    },

  ];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Retrieve query parameters from the URL
    this.route.queryParams.subscribe(params => {
      this.userName = params['fullName'];
    });
  }
}

