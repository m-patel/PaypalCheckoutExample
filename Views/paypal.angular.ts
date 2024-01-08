// npm i @paypal/paypal-js

import { Component, OnInit } from '@angular/core';

declare const paypal: any; // Declare paypal variable to avoid TypeScript errors

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  ngOnInit(): void {
    this.initializePaypalScript();
  }

  initializePaypalScript(): void {
    const clientId = 'YOUR_CLIENT_ID'; // Replace with your actual PayPal Client ID

    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
    script.async = true;

    script.onload = () => {
      this.renderPaypalButtons();
    };

    document.body.appendChild(script);
  }

  renderPaypalButtons(): void {
    paypal.Buttons({
      style: {
        layout: 'vertical',
        color: 'silver',
        tagline: 'false'
      },
      createOrder: (data, actions) => {
        // Your create order logic goes here
        // Replace this with your own implementation using backend APIs
        // Return a promise that resolves with the order ID
      },
      onApprove: (data, actions) => {
        // Your on approve logic goes here
        // Replace this with your own implementation using backend APIs
        // Return a promise that resolves after capturing the payment
      }
    }).render('#paypal-button-container');
  }
}