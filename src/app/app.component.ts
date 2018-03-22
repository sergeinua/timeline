import {Component, OnInit, ElementRef, ViewChild, Compiler, ComponentFactoryResolver, ViewChildren} from "@angular/core";

declare const vis: any;
import * as moment from 'moment';
import {ItemModule} from "./item/item.module";
import {ItemComponent} from "./item/item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  readonly campaigns = [
    {
      id: 1,
      name: 'First name',
      start: moment().startOf('day'),
      end: moment().add(1, 'day').startOf('day')
    },
    {
      id: 2,
      name: 'Second Name',
      start: moment().add(3, 'day').startOf('day'),
      end: moment().add(5, 'day').startOf('day')
    }
  ];

  @ViewChild('timeline')
  timeLine: ElementRef;

  @ViewChildren('comp')
  elements: ElementRef[];

  constructor(private compiler: Compiler, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    // const container = document.getElementById('timeline');
    const container = this.timeLine.nativeElement;
    console.log('!cont', container);
    const el = `<div #comp>el</div>`;
    // const mod = this.compiler.compileModuleAndAllComponentsSync(ItemModule);
    // const factory = mod.componentFactories.find((comp) =>
    //   comp.componentType === ItemComponent
    // );

    // const component = this.componentFactoryResolver.resolveComponentFactory(ItemComponent);
    // component.

    // Create a DataSet (allows two way data-binding)
    // const items = new vis.DataSet([
    //   {
    //     id: 1,
    //     content: el,
    //     start: moment().startOf('day'),
    //     end: moment().add(1, 'day').startOf('day')
    //   },
    //   {
    //     id: 1,
    //     content: el,
    //     start: moment().startOf('day'),
    //     end: moment().add(1, 'day').startOf('day')
    //   }
    // ]);
    const items = new vis.DataSet(this.campaigns.map(campaign => {
      return {
        id: campaign.id,
        content: el,
        start: campaign.start,
        end: campaign.end
      };
    }));

    // Configuration for the Timeline
    const options = {
      // autoResize: false
      height: 500
    };

    // Create a Timeline
    const timeline = new vis.Timeline(container, items, options);
    setTimeout(() => console.log('!', this.elements), 3000);
  }
}
