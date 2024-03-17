"use client";
import React from "react";
import "../app/globals.css";
import {
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
  Resize,
  DragAndDrop,
  ViewsDirective,
  ViewDirective,
} from "@syncfusion/ej2-react-schedule";
import { Internationalization } from "@syncfusion/ej2-base";
import { DataManager, UrlAdaptor } from "@syncfusion/ej2-data";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense(

  "ORg4AjUWIQA/Gnt2UVhhQlVFfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTX5Qd0NiXntbcnBTR2NZ",
);
const Scheduler = () => {
  const dataManager = new DataManager({
    url: "http://localhost:8080/api/scheduleevents/getData",
    crudUrl: "http://localhost:8080/api/scheduleevents/crudActions",
    adaptor: new UrlAdaptor(),
    crossDomain: true,
  });  
  const instance = new Internationalization();

  const majorSlotTemplate = (props) => {
    return (
      <div className="h-[199px]">
        {instance.formatDate(props.date, { skeleton: "hm" })}
      </div>
    );
  };
  const timeScale = {
    enable: true,
    interval: 60,
    slotCount: 1,
    majorSlotTemplate: majorSlotTemplate.bind(this),
  };
  const cellTemplate = (props) => {
    if (props.type === "workCells") {
      return <div className="h-[201px] "></div>;
    }
  };
  const eventTemplate = (props) => {
  if (props.type === "month") {
            return (<div  ></div>);
        }
    return (
      <div>
       <div className="text-[#091A2B] font-bold text-[14px] " >
                {props.subject}
                </div> 
                <div className="text-[#73B873] text-[10px]"> {instance.formatDate(props.starttime, { skeleton: "hm" })} - {instance.formatDate(props.endtime, { skeleton: "hm" })}</div>
      </div>
    );
  };
  return (
    <div className="min-h-screen">
      <ScheduleComponent
        currentView="Week"
        showTimeIndicator={false}
        cellTemplate={cellTemplate}
        timeScale={timeScale}
        eventSettings={{
                    template: eventTemplate,
          dataSource: dataManager,
          fields: {
            id: "id",
            subject: { name: "subject" },
            isAllDay: { name: "isallday" },
            location: { name: "location" },
            description: { name: "description" },
            startTime: { name: "starttime" },
            endTime: { name: "endtime" },
            startTimezone: { name: "starttimezone" },
            endTimezone: { name: "endtimezone" },
            recurrenceID: { name: "recurrenceid" },
            recurrenceRule: { name: "recurrencerule" },
            recurrenceException: { name: "recurrenceexception" },
            followingID: { name: "followingid" },
          },
        }}
      >
        <ViewsDirective>
          <ViewDirective option="Week" />
          <ViewDirective option="Day" />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Scheduler;
