import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-gateway-edit',
  templateUrl: './gateway-edit.component.html',
  styleUrls: ['./gateway-edit.component.css']
})
export class GatewayEditComponent implements OnInit {
  gatewayForm: FormGroup = new FormGroup({
    serialNumber: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
    ipv4: new FormControl(null, [Validators.required]),
    devices: new FormArray([
      new FormGroup({
        uid: new FormControl(null, [Validators.required]),
        vendor: new FormControl(null, [Validators.required]),
        dateCreated: new FormControl(null, [Validators.required]),
        status: new FormControl(null, [Validators.required])
      })
    ])
  });

  constructor() { }

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
    }
  }

}
