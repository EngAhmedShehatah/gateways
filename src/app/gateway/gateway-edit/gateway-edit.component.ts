import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {GatewayService} from '../gateway.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-gateway-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.css']
})
export class GatewayEditComponent implements OnInit {
  gatewayForm: FormGroup = new FormGroup({
    serialNumber: new FormControl(123456789101, [Validators.required]),
    name: new FormControl('test name 101', [Validators.required]),
    ipv4: new FormControl('192.168.1.1', [Validators.required]),
    devices: new FormArray([
      new FormGroup({
        uid: new FormControl(123456789201, [Validators.required]),
        vendor: new FormControl('test vendor 201', [Validators.required]),
        dateCreated: new FormControl(new Date(), [Validators.required]),
        status: new FormControl('online', [Validators.required])
      })
    ])
  });

  constructor(
    private gatewayService: GatewayService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onClickAddDevice(): void {
    const devicesControlsArray = this.gatewayForm.get('devices') as FormArray;
    devicesControlsArray.push(
      new FormGroup({
        uid: new FormControl(null, [Validators.required]),
        vendor: new FormControl(null, [Validators.required]),
        dateCreated: new FormControl(null, [Validators.required]),
        status: new FormControl(null, [Validators.required])
      })
    );
  }

  onClickSave(): void {
    if (this.gatewayForm.invalid) {
      return null;
    } else {
      // let's call the api here
      this.gatewayService.addGateway(this.gatewayForm.value)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigateByUrl('/');
          }, err => {
            console.log(err);
          }
        );
    }
  }

}
