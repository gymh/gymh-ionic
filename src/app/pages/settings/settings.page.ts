import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.page.html',
	styleUrls: [ './settings.page.scss' ]
})
export class SettingsPage implements OnInit {
	constructor() {}

	updateSetting(event) {
		var target = event.target || event.srcElement || event.currentTarget;
		var idAttr = target.attributes.id;
		var value = idAttr.nodeValue;
		var checked = target.checked;
		console.log({ target, idAttr, value, checked });

		if (value == 'elternportal') {
      if (checked) {
        $('#elternportal_config').fadeIn();
			} else {
        $('#elternportal_config').fadeOut();
			}
		}
	}
	alert() {
		console.log('lelele');
	}

	ngOnInit() {}
	ngAfterViewInit() {}
}
